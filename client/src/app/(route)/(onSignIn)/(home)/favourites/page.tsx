import React from 'react'
import styles from './_css/favourite.module.css';
import { HydrationBoundary, QueryClient, dehydrate } from '@tanstack/react-query';
import { getLikeMovie } from '@/api/user';
import { auth } from '@/auth';
import MovieSection from './_component/MovieSection';

export default async function page() {

    const queryClient = new QueryClient();
    const session = await auth();
    await queryClient.prefetchQuery({ queryKey: ['favourite_movie', session.user.id as string], queryFn: getLikeMovie });

    const dehydratedState = dehydrate(queryClient);

    return (
        <div className={styles.container}>
            <h1>좋아하는 영화</h1>
            <HydrationBoundary state={dehydratedState}>
                <MovieSection />
            </HydrationBoundary>
        </div>
    )
}
