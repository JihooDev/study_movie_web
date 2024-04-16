"use client"

import { useQueryClient } from '@tanstack/react-query';
import React, { useEffect } from 'react'

interface Props {
    id: string
}

export default function MovieDetail({ id }: Props) {

    const queryClient = useQueryClient();
    // const detail = queryClient.getQueryData(['movie_detail', id]);
    // useEffect(() => {
    //     console.log(data, '쿼리데이터');
    // }, [data])

    return (
        <div>MovieDetail</div>
    )
}
