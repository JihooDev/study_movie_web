import React from 'react'
import { getMovieDetail } from '@/api/movie'
import { HydrationBoundary, QueryClient, dehydrate } from '@tanstack/react-query'
import MovieDetail from '@/app/_components/MovieDetail'

interface PageProps {
    params: {
        slug: string
    }
}

export default async function Page({ params: { slug } }: PageProps) {
    const id = slug;
    const queryClient = new QueryClient();

    await queryClient.prefetchQuery({ queryKey: ['movie_detail', id], queryFn: getMovieDetail });
    const dehydratedState = dehydrate(queryClient);

    return (
        <div>
            <HydrationBoundary state={dehydratedState}>
                <MovieDetail id={id} />
            </HydrationBoundary>
        </div>
    )
}
