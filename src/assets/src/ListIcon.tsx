import React from 'react'
import { COLORS } from '../colors'

interface Props {
    backgroundColor?: string
}

export default function ListIcon({ backgroundColor = COLORS.black }: Props) {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill={backgroundColor} viewBox="0 0 256 256"><path d="M84,64A12,12,0,0,1,96,52H216a12,12,0,0,1,0,24H96A12,12,0,0,1,84,64Zm132,52H96a12,12,0,0,0,0,24H216a12,12,0,0,0,0-24Zm0,64H96a12,12,0,0,0,0,24H216a12,12,0,0,0,0-24ZM56,52H40a12,12,0,0,0,0,24H56a12,12,0,0,0,0-24Zm0,64H40a12,12,0,0,0,0,24H56a12,12,0,0,0,0-24Zm0,64H40a12,12,0,0,0,0,24H56a12,12,0,0,0,0-24Z"></path></svg>
    )
}
