"use client"

import { ChakraProvider } from '@chakra-ui/react';
import { useQueryClient } from '@tanstack/react-query';
import { useRouter } from 'next/navigation';
import React, { useEffect } from 'react'

interface Props {
    id: string
}

export default function MovieDetail({ id }: Props) {
    const queryClient = useQueryClient();
    const data = queryClient.getQueryData(['movie_detail', id]);
    useEffect(() => {
        console.log(data, id, '쿼리데이터');
    }, [data])
    const router = useRouter();

    return (
        <ChakraProvider>
            <div>
                <button onClick={() => router.push('/')}>홈으로</button>
                {id}
            </div>
        </ChakraProvider>
    )
}
