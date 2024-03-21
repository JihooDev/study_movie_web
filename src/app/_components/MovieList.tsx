
import React, { ReactElement } from 'react';
import { Box, Button, Card, CardBody, CardFooter, Divider, Heading, Image, Stack, Text } from '@chakra-ui/react';
import { MovieTypes } from '@/types/movie';

interface Props {
    data: MovieTypes;
}

const MovieList = ({ data }: Props): ReactElement => {


    return (
        <Card boxShadow="md" borderRadius="md" p={2} mb={5}>
            <Image src={`https://image.tmdb.org/t/p/w200/${data.poster_path}`} width={'100%'} height={350} alt={data.title} borderRadius="md" />
            <CardBody>
                <Stack spacing={2}>
                    <Heading as="h2" size="md">{data.title}</Heading>
                    <Text>{data.overview.slice(0, 16)}...</Text>
                </Stack>
            </CardBody>
            <CardFooter>
                <Button colorScheme="blue">Watch Now</Button>
            </CardFooter>
        </Card>
    );
};



export default MovieList