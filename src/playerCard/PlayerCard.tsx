import React from 'react';
import styled from 'styled-components'
import GeneralStatsTile from "./GeneralStatsTile"
import RankedStatsTile from "./RankedStatsTiles"

const PlayerCardContainer = styled.div`
    width: 100%;
    background-color: #292932;
    margin-bottom: 16px;
    padding: 16px;

    border-radius: 8px;
`

interface IPlayerCardProps {
    id: number
    name: string
}

const PlayerCard = (props: IPlayerCardProps) => {
    const { id, name } = props

    return (
        <PlayerCardContainer>
            <GeneralStatsTile id={id} name={name} />
			<RankedStatsTile id={id} />
        </PlayerCardContainer>
    )
}

export default PlayerCard