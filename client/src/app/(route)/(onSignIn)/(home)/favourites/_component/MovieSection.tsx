"use client"

import Loading from '@/app/_components/Loading';
import { COLORS } from '@/assets/colors';
import { Button, Center, ChakraProvider, Text } from '@chakra-ui/react';
import { useQueryClient } from '@tanstack/react-query';
import { useSession } from 'next-auth/react'
import { useRouter } from 'next/navigation';
import React from 'react'

interface FavouriteMovie {
    status: number;
    data: {
        movie_id: string;
        title: string;
    }[]
}

export default function MovieSection() {

    const session = useSession();
    const queryClient = useQueryClient();
    const router = useRouter();

    const user_id = session.data?.user.id;

    const data = queryClient.getQueryData<FavouriteMovie | undefined>(['favourite_movie', user_id]);

    if (!data) {
        return (
            <ChakraProvider>
                <Center flex={1} height={'100%'}>
                    <Loading />
                </Center>
            </ChakraProvider>
        )
    }

    if (data.data.length === 0) {
        return (
            <ChakraProvider>
                <Center flex={1} height={'80%'} flexDirection={'column'}>
                    <Text color={COLORS.white} fontSize={20} fontWeight={'bold'}>
                        추가한 영화가 없습니다
                    </Text>
                    <Button
                        mt={5}
                        fontSize={14}
                        colorScheme={'facebook'}
                        onClick={() => router.push('/movie')}
                    >
                        추가하러가기
                    </Button>
                </Center>
            </ChakraProvider>
        )
    }

    return (
        <ChakraProvider>
        </ChakraProvider>
    )
}
