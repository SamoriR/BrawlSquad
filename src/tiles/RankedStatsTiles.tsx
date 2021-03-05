import React from 'react';
import { useFetch } from "react-async"
import { IRanked_Player_Stats } from "../libs/Interfaces";

const apiKey: string | undefined = process.env.REACT_APP_BRAWL_KEY

interface IRankedStatsTileProps {
    id: number
}

const RankedStatsTile = (props: IRankedStatsTileProps) => {
    const { id } = props

    const { data, error } = useFetch(`https://api.brawlhalla.com/player/${id}/ranked?api_key=${apiKey}`, {
        headers: { "Content-Type": "application/x-www-form-urlencoded" }
    })

    const statsData: IRanked_Player_Stats = data as IRanked_Player_Stats

    if (error) return (<p>{error.message}</p>)
    if (!data) return (<p>loading</p>)

    return (
        <div>{ "wins: " + statsData.wins + " winrate: " + (statsData.wins / statsData.games) + " rating: " + statsData.rating + " peak rating: " + statsData.peak_rating + " tier: " + statsData.tier }</div>
    )
}

export default RankedStatsTile