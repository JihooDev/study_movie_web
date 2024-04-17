import { MovieTypes } from '@/types/movie';
import { QueryFunction } from '@tanstack/react-query';
import axios from 'axios';

const tmdb = axios.create({
    baseURL: 'https://api.themoviedb.org/3',
    headers: {
        Authorization: `Bearer ${process.env.NEXT_PUBLIC_TMDB_ACCESS_TOKEN}`
    },
    params: {
        api_key: process.env.NEXT_PUBLIC_TMDB_API_KEY,
        language: 'ko-KR',
    }
})

export const getTopRated = async ({ pageCount }: { pageCount: number }) => {
    const { data } = await tmdb.get(`/movie/top_rated?page=${pageCount}`);

    console.log(`/movie/top_rated?page=${pageCount}`)

    return data;
}

export const getMovieDetail: QueryFunction<MovieTypes, [_1: string, _2: string]> = async ({ queryKey }) => {
    console.log('쿼리함수')
    const [id] = queryKey;

    const { data } = await tmdb.get(`/movie/${id}`);

    return data;
}