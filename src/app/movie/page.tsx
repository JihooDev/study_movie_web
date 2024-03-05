'use client';

import { getTopRated } from '@/api/movie';
import { useQuery } from '@tanstack/react-query';
import React, { useEffect } from 'react'

const page = () => {

    const { data } = useQuery({
        queryKey: ['top_rated'],
        queryFn: getTopRated,
    })

    useEffect(() => {
        console.log(data);
    }, [data])

    return (
        <div>Movie</div>
    )
}

export default page