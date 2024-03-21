'use client';

import { Flex, Grid, Stack } from '@chakra-ui/react';
import React, { ReactElement, useEffect } from 'react'
import MovieList from './MovieList';
import { useQuery } from '@tanstack/react-query';
import { getTopRated } from '@/api/movie';
import { MovieTypes } from '@/types/movie';
import { useInView } from 'react-intersection-observer';

export default function Movie(): ReactElement {

    const { ref, inView, entry } = useInView({});

    const { data } = useQuery({
        queryKey: ['top_rated'],
        queryFn: getTopRated,
        staleTime: 60000,
    })

    useEffect(() => {
        console.log(data)
    }, [data])


    return (
        <Flex gap={0} height={'100%'} flexDirection={'column'} >
            <Grid templateColumns={'repeat(4,1fr)'} gap={6}>
                {
                    data?.results.map((item: MovieTypes, index: number): ReactElement => (
                        <React.Fragment key={index}>
                            <MovieList data={item} />
                        </React.Fragment>
                    ))
                }
            </Grid>
        </Flex>
    )
}
