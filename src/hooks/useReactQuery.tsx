'use client'

import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'
import React, { useState } from 'react'

const useReactQuery = ({ children }: React.PropsWithChildren) => {
    const queryClient = () => {
        const client = new QueryClient({
            defaultOptions: {
                queries: {
                    refetchOnWindowFocus: false,
                    staleTime: 60 * 1000
                }
            }
        })

        return client;
    }

    return (
        <QueryClientProvider client={queryClient()}>
            {children}
            <ReactQueryDevtools initialIsOpen={false} />
        </QueryClientProvider>
    )
}

export default useReactQuery