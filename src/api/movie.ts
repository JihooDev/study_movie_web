import axios from 'axios';

const tmdb = axios.create({
    baseURL: 'https://api.themoviedb.org/3',
    headers: {
        Authorization: `Bearer ${process.env.NEXT_PUBLIC_TMDB_ACCESS_TOKEN}`
    },
    params: {
        api_key: process.env.NEXT_PUBLIC_TMDB_API_KEY,
        language: 'ko-KR'
    }
})

export const getTopRated = async () => {
    const { data } = await tmdb.get(`/movie/top_rated`);

    return data;
}