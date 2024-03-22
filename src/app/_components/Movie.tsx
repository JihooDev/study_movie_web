'use client';

import { Box, Flex, Grid, Stack } from '@chakra-ui/react';
import React, { ReactElement, useEffect, useState } from 'react'
import MovieList from './MovieList';
import { useInfiniteQuery, useQuery } from '@tanstack/react-query';
import { getTopRated } from '@/api/movie';
import { MovieTypes } from '@/types/movie';
import { useInView } from 'react-intersection-observer';
import useIntersection from '@/hooks/useIntersection';

export default function Movie(): ReactElement {

    // const { data } = useQuery({
    //     queryKey: ['top_rated'],
    //     queryFn: () => getTopRated(({ pageCount: 1 })),
    //     staleTime: 60000,
    // })

    const [perPage, setPerPage] = useState<number>(1);

    const {
        data,
        status,
        fetchNextPage,
        fetchPreviousPage,
        hasNextPage,
        hasPreviousPage,
        isFetchingNextPage,
    } = useInfiniteQuery({
        queryKey: ['top_rated'],
        initialPageParam: 1,
        queryFn: ({ pageParam = 1 }) => getTopRated({ pageCount: pageParam }),
        getNextPageParam: (lastPage, allPages) => {
            console.log(lastPage.total_pages);
            return lastPage.total_pages > lastPage.page ? lastPage.page + 1 : undefined;
        },
        getPreviousPageParam: (firstPage, allPages) => firstPage.page,
    })

    const ref = useIntersection({
        onIntersect: (entry: any, observer: any) => {
            console.log(entry, observer, 'entry')
            observer.unobserve(entry.target);

            console.log(hasNextPage && !isFetchingNextPage, '조건');

            if (hasNextPage && !isFetchingNextPage) fetchNextPage();
        }
    });

    useEffect(() => {
        console.log(data)
    }, [data])


    return (
        <Flex gap={0} height={'100%'} width={'100%'} flexDirection={'column'} alignItems={'center'}>
            <Grid templateColumns={'repeat(4,1fr)'} gap={6}>
                {data?.pages.map((group, i) => (
                    <React.Fragment key={i}>
                        {group?.results?.map((item: MovieTypes) => (
                            <MovieList key={item.id} data={item} />
                        ))}
                    </React.Fragment>
                ))}
            </Grid>
            <Box ref={ref}>

            </Box>
            {
                isFetchingNextPage && <Stack justifyContent={'center'} alignItems={'center'} paddingY={10}>
                    <div>Loading...</div>
                </Stack>
            }
        </Flex>
    )
}
