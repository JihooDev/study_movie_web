import React from 'react'
import { getMovieDetail } from '@/api/movie'
import { HydrationBoundary, QueryClient, dehydrate } from '@tanstack/react-query'
import DetailHeader from './_component/DetailHeader'
import IntroductionSection from './_component/IntroductionSection'

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
            <DetailHeader />
            <HydrationBoundary state={dehydratedState}>
                <IntroductionSection id={id} />
            </HydrationBoundary>
        </div>
    )
}
