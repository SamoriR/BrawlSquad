import React from 'react';
import { useFetch } from "react-async"
import { IAll_Player_Stats } from "../libs/Interfaces";

const apiKey: string | undefined = process.env.REACT_APP_BRAWL_KEY

interface IGeneralStatsTileProps {
    id: number
    name: string
}

const GeneralStatsTile = (props: IGeneralStatsTileProps) => {
    const { id, name } = props

    const { data, error } = useFetch(`https://api.brawlhalla.com/player/${id}/stats?api_key=${apiKey}`, {
        headers: { 
            "Content-Type": "application/x-www-form-urlencoded",
            Accept: "application/json"
        }
    })

    const statsData: IAll_Player_Stats = data as IAll_Player_Stats

    if (error) return (<p>{error.message}</p>)
    if (!data) return (<p>loading</p>)

    console.log(data)

    return (
        <div>{ "name: " + name + " username: " + statsData.name + " level: " + statsData.level + " xp: " + statsData.xp }</div>
    )
}

export default GeneralStatsTile