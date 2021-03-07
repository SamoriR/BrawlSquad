import React from 'react';
import styled from 'styled-components'
import GeneralStatsTile from "./GeneralStatsTile"
import RankedStatsTile from "./RankedStatsTiles"

const CardContainer = styled.div`
    width: 100%;
    background-color: #292932;
    margin-bottom: 16px;
`

interface IPlayerCardProps {
    id: number
    name: string
}

const PlayerCard = (props: IPlayerCardProps) => {
    const { id, name } = props

    return (
        <CardContainer>
            <GeneralStatsTile id={id} name={name} />
			<RankedStatsTile id={id} />
        </CardContainer>
    )
}

export default PlayerCard