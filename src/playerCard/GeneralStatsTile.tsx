import React from 'react';
import { useFetch } from "react-async"
import styled from 'styled-components'
import { IAll_Player_Stats } from "../libs/Interfaces";

const apiKey: string | undefined = process.env.REACT_APP_BRAWL_KEY

const GeneralStatsContainer = styled.div`
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
`


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

    return (
        <GeneralStatsContainer>
            <div>{ name + " (" + statsData.name + ")" }</div>
            <div>{ "level: " + statsData.level }</div>
            <div>{ " xp: " + statsData.xp }</div>
        </GeneralStatsContainer>
    )
}

export default GeneralStatsTile