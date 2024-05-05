"use client";
import { COLORS } from '@/assets/colors';
import CoffieIcon from '@/assets/src/CoffieIcon';
import { Button, ChakraProvider, Flex, Text } from '@chakra-ui/react';
import React from 'react'

export default function ContentSection() {
    return (
        <ChakraProvider>
            <Flex justifyContent={'center'} flexDirection={'column'} alignItems={'center'} backgroundColor={COLORS.black} p={10} borderRadius={'xl'}>
                <Flex alignItems={'center'}>
                    <CoffieIcon color={COLORS.white} />
                    <Text color={COLORS.white} ml={5} fontSize={30} fontWeight={'bold'}>
                        WATCH
                    </Text>
                </Flex>
                <Text color={COLORS.white} my={5}>
                    Enjoy the newest movies
                </Text>
                <Button w={200} backgroundColor={COLORS.pupple} _hover={{ backgroundColor: COLORS.light_purple }} color={COLORS.white}>
                    Login
                </Button>
                <Flex mt={5}>
                    <Text color={COLORS.white} mr={2}>
                        Don't have an account?
                    </Text>
                    <Text color={COLORS.white} fontWeight={'bold'} cursor={'pointer'}>
                        Sign Up
                    </Text>
                </Flex>
            </Flex>
        </ChakraProvider>
    )
}
