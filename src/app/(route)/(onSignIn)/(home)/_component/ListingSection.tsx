"use client";

import { COLORS } from '@/assets/colors';
import { MovieResponse } from '@/types/responseType';
import { Box, Text } from '@chakra-ui/react';
import { useQueryClient } from '@tanstack/react-query';
import React, { useEffect } from 'react'

interface Props {
    queryKey: string,
    title: string
}

export default function ListingSection({ queryKey, title }: Props) {

    const queryClient = useQueryClient();

    const data: MovieResponse | undefined = queryClient.getQueryData([queryKey]);

    useEffect(() => {
        console.log(data, '데이터11')
    }, [data])

    return (
        <Box w={'full'} px={5} py={10}>
            <Text
                color={COLORS.white}
                fontSize={20}
            >
                {title}
            </Text>
        </Box>
    )
}
