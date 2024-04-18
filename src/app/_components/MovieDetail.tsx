import { MovieTypes } from '@/types/movie';
import { QueryClient } from '@tanstack/react-query';
import DetailHeader from '../(route)/detail/[slug]/_component/DetailHeader';
import IntroductionSection from '../(route)/detail/[slug]/_component/IntroductionSection';
import styles from './movieDetail.module.css'

interface Props {
    id: string
}

export default function MovieDetail({ id }: Props) {
    const queryClient = new QueryClient();
    const data: MovieTypes | undefined = queryClient.getQueryData(['movie_detail', id]);

    if (!data) {
        return (
            <>
            </>
        )
    }

    return (
        <div className={styles.container}>

        </div>
    )
}
