import React from 'react';
import { useFetch } from "react-async"
import styled from 'styled-components'
import { IAll_Player_Stats } from "../libs/Interfaces";
import FontDiv from './FontDiv'

const apiKey: string | undefined = process.env.REACT_APP_BRAWL_KEY

const GeneralStatsContainer = styled.div`
    width: 100%;
`

const NameDiv = styled(FontDiv)`
    font-size: 20px;
    min-width: 400px;
`

const LevelExpContainerDiv = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    margin-top: 8px;
`

const LevelDiv = styled.div`
    min-width: 120px;
    margin-bottom: 4px;
`

const ExpDiv = styled.div`
    min-width: 170px;
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
            <NameDiv>{ name + " (" + statsData.name + ")" }</NameDiv>
            <LevelExpContainerDiv>
                <LevelDiv>{ "level: " + statsData.level }</LevelDiv>
                <ExpDiv>{ " xp: " + statsData.xp }</ExpDiv>
            </LevelExpContainerDiv>
        </GeneralStatsContainer>
    )
}

export default GeneralStatsTile