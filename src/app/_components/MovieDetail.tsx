"use client"

import { MovieTypes } from '@/types/movie';
import { ChakraProvider } from '@chakra-ui/react';
import { useQueryClient } from '@tanstack/react-query';
import { useRouter } from 'next/navigation';
import React, { useEffect } from 'react'
import DetailHeader from '../(route)/detail/[slug]/_component/DetailHeader';
import IntroductionSection from '../(route)/detail/[slug]/_component/IntroductionSection';

interface Props {
    id: string
}

export default function MovieDetail({ id }: Props) {
    const queryClient = useQueryClient();
    const data: MovieTypes | undefined = queryClient.getQueryData(['movie_detail', id]);

    if (!data) {
        return (
            <></>
        )
    }

    return (
        <ChakraProvider>
            <DetailHeader />
            <IntroductionSection data={data} />
        </ChakraProvider>
    )
}
