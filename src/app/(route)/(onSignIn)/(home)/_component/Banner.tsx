"use client"

import { COLORS } from '@/assets/colors'
import { Box, ChakraProvider, Flex } from '@chakra-ui/react'
import Image from 'next/image'
import React from 'react'

export default function Banner() {
    return (
        <ChakraProvider>
            <Flex w={'full'} h={300} backgroundColor={COLORS.white}>
                <Image src={require('@/assets/src/main.png')} alt='main' />
            </Flex>
        </ChakraProvider>
    )
}
