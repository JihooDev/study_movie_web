import { COLORS } from '@/assets/colors'
import { MovieTypes } from '@/types/movie'
import { Box, Flex, Heading, Text } from '@chakra-ui/react'
import React, { useEffect } from 'react'

interface Props {
    data: MovieTypes
}

export default function IntroductionSection({ data }: Props) {

    useEffect(() => {
        console.log(data);
    }, [])

    return (
        <Flex width={'full'} height={600} justifyContent={'space-between'} alignItems={'center'}>
            <Box position={'absolute'} width={'100%'} height={600} left={0} backgroundImage={`https://image.tmdb.org/t/p/w1280/${data.backdrop_path}`} backgroundRepeat={'no-repeat'} backgroundSize={'cover'} zIndex={-2} />
            <Box position={'absolute'} width={'100%'} height={600} left={0} background={'linear-gradient(to right, rgba(10.5, 31.5, 52.5, 1) calc((50vw - 170px) - 340px), rgba(10.5, 31.5, 52.5, 0.84) 50%, rgba(10.5, 31.5, 52.5, 0.84) 100%);'} zIndex={-1} />
            <Flex width={'full'} height={600} paddingX={5} paddingY={10}>
                <Flex width={'30%'} height={'full'} justifyContent={'center'} alignItems={'center'} padding={5}>
                    <Flex width={'100%'} height={'100%'} justifyContent={'center'} alignItems={'center'}>
                        <img src={`https://image.tmdb.org/t/p/w300/${data.poster_path}`} style={{ borderRadius: 15 }} />
                    </Flex>
                </Flex>
                <Flex width={'70%'} height={'full'} padding={5}>
                    <Box>
                        <Heading color={COLORS.white} fontSize={27}>
                            {data.title} ({data.release_date.split('-')[0]})
                        </Heading>
                        <Flex marginTop={5}>
                            <Box borderRadius={5} paddingX={2} borderWidth={1}>
                                <Text color={COLORS.white} fontSize={13}>{data.release_date.split('-').join('/')}</Text>
                            </Box>
                            <Flex>
                                {
                                    data.genres.map((genre, index) => (
                                        <Box key={index} marginLeft={2} borderRadius={5} paddingX={2} borderWidth={1}>
                                            <Text color={COLORS.white} fontSize={13}>{genre.name}</Text>
                                        </Box>
                                    ))
                                }
                            </Flex>
                        </Flex>
                        <Box marginTop={10}>
                            <Heading color={COLORS.white} fontSize={25}>개요</Heading>
                            <Text color={COLORS.white} marginTop={5}>
                                {data.overview}
                            </Text>
                        </Box>
                    </Box>
                </Flex>
            </Flex>
        </Flex>
    )
}
