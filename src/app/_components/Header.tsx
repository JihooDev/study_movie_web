'use client'

import { Link } from '@chakra-ui/next-js'
import { Box, Button, Flex, Heading, Stack, Text } from '@chakra-ui/react'
import React from 'react'

export default function Header() {
    return (
        <Flex
            as="nav"
            align="center"
            justify="space-between"
            bg="#042541"
            height={20}
            color="white"
            paddingX={10}
        >
            <Flex align="center" mr={5}>
                <Link href={'/'}>
                    <Heading as="h1" size="lg" letterSpacing={"tighter"}>
                        TMDB
                    </Heading>
                </Link>
            </Flex>
        </Flex>
    )
}
