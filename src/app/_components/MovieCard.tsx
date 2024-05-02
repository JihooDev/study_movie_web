"use client";

import { COLORS } from '@/assets/colors';
import { MovieTypes } from '@/types/movie';
import { Box } from '@chakra-ui/react';
import React from 'react'

interface Props {
    movie: MovieTypes
}

export default function MovieCard({ movie }: Props) {
    return (
        <Box w={300} h={'300px'} backgroundColor={COLORS.white}>

        </Box>
    )
}
