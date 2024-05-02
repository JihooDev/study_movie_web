"use client";

import { COLORS } from '@/assets/colors';
import { MovieTypes } from '@/types/movie';
import { Box, Flex } from '@chakra-ui/react';
import React from 'react'
import LikeButton from './LikeButton';

interface Props {
    movie: MovieTypes
}

export default function MovieCard({ movie }: Props) {
    return (
        <Flex w={300} h={'330px'} borderRadius={15} borderColor={COLORS.gray} borderWidth={1} overflow={'hidden'} position={'relative'}>
            <img
                src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
                alt={movie.title}
                style={{ position: 'absolute', width: '100%', height: '100%', zIndex: 0 }}
            />
            <Flex flex={1} p={5} zIndex={1} justifyContent={'flex-end'}>
                <LikeButton id={movie.id} />
            </Flex>
        </Flex>
    )
}
