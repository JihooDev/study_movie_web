"use client";

import MovieCard from '@/app/_components/MovieCard';
import { COLORS } from '@/assets/colors';
import { MovieResponse } from '@/types/responseType';
import { Box, ChakraProvider, Text } from '@chakra-ui/react';
import { useQueryClient } from '@tanstack/react-query';
import React, { useEffect } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
interface Props {
    queryKey: string,
    title: string
}

export default function ListingSection({ queryKey, title }: Props) {

    const queryClient = useQueryClient();

    const data: MovieResponse | undefined = queryClient.getQueryData([queryKey]);

    return (
        <ChakraProvider>
            <Box w={'full'} px={5} py={10}>
                <Text
                    color={COLORS.white}
                    fontSize={20}
                    fontWeight={'bold'}
                >
                    {title}
                </Text>
                <Swiper
                    spaceBetween={50}
                    slidesPerView={1}
                    loop={true}
                >
                    {
                        data?.results.map((movie) => (
                            <SwiperSlide key={movie.id}>
                                <MovieCard movie={movie} />
                            </SwiperSlide>
                        ))
                    }
                </Swiper>
            </Box>
        </ChakraProvider>
    )
}
