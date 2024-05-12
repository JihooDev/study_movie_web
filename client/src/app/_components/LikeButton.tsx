import { addLikeMovie } from '@/api/user'
import { COLORS } from '@/assets/colors'
import LikeIcon from '@/assets/src/LikeIcon'
import { MovieTypes } from '@/types/movie'
import { Box, Button } from '@chakra-ui/react'
import { useMutation } from '@tanstack/react-query'
import { useSession } from 'next-auth/react'
import React from 'react'
import { toast } from 'react-toastify'

interface Props {
    movie: MovieTypes,
    liked: boolean
}

export default function LikeButton({ movie, liked }: Props) {
    const { mutate, isPending, isSuccess } = useMutation({
        mutationKey: ['like_movie', movie?.id],
        mutationFn: addLikeMovie,
        onSuccess(data) {
            toast(`좋아하는 영화에 추가되었습니다`, { type: 'success' });
            console.log(data);
        },
        onError(error) {
            toast(`좋아하는 영화 추가에 실패했습니다`, { type: 'error' });
            console.log(error);
        }
    })

    const session = useSession();

    const user_id = session.data?.user.id;

    const onLikeMovie = (e: React.MouseEvent) => {
        e.stopPropagation();

        mutate({ user_id, movie });
    }

    return (
        <Button onClick={onLikeMovie} p={0} backgroundColor={liked ? COLORS.pupple : COLORS.white}>
            <LikeIcon size={18} color={liked ? COLORS.white : COLORS.pupple} />
        </Button>
    )
}
