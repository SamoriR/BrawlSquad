import React from 'react';
import { useFetch } from "react-async"
import styled from 'styled-components'

import { IRanked_Player_Stats } from "../libs/Interfaces";

const apiKey: string | undefined = process.env.REACT_APP_BRAWL_KEY

const RankedStatsContainer = styled.div`
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
`

interface IRankedStatsTileProps {
    id: number
}

export const toPercentage = ( value: number ) => {
    if (value >= 0.0 && value <= 1.0){
        return (value * 100).toFixed(1) + "%"
    } else {
        return "0%"
    }
}

const RankedStatsTile = (props: IRankedStatsTileProps) => {
    const { id } = props

    const { data, error } = useFetch(`https://api.brawlhalla.com/player/${id}/ranked?api_key=${apiKey}`, {
        headers: { 
            "Content-Type": "application/x-www-form-urlencoded",
            Accept: "application/json"
        }
    })

    const statsData: IRanked_Player_Stats = data as IRanked_Player_Stats

    if (error) return (<p>{error.message}</p>)
    if (!data) return (<p>loading</p>)

    return (
        <RankedStatsContainer>
            <div>{ "tier: " + statsData.tier }</div>
            <div>{ "rating: " + statsData.rating }</div>
            <div>{ "peak rating: " + statsData.peak_rating }</div>
            <div>{ "wins: " + statsData.wins }</div>
            <div>{ "winrate: " + toPercentage(statsData.wins / statsData.games) }</div>
        </RankedStatsContainer>
    )
}

export default RankedStatsTile