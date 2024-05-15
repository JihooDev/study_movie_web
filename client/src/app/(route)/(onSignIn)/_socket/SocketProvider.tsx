"use client";

import React, { useEffect } from 'react'
import { io } from 'socket.io-client';

export const socket = io(process.env.NEXT_PUBLIC_SERVER_URL as string);

export default function SocketProvider({ children }: { children: React.ReactNode }) {

    useEffect(() => {
        socket.connect();

        return () => {
            socket.disconnect();
        }
    }, [])

    return (
        <>
            {children}
        </>
    )
}
