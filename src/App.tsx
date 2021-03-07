import React, { useEffect } from 'react';
import styled from 'styled-components'
import PlayerCard from './playerCard/PlayerCard'

import PlayerList, { IPlayer } from "./libs/Team";


const AppContainer = styled.div`
	background-color: #282c34;
	min-height: 100vh;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	font-size: calc(10px + 2vmin);
	color: white;
	padding-left: 32px;
	padding-right: 32px;
`

const App = () => {
	useEffect(() => {
	});

	return (
		<AppContainer>
			<div>Samori is sexy af</div>
			{ 
				PlayerList.map((player: IPlayer, index: number) => (
					<PlayerCard id={player.id} name={player.name}/>
				))
			}
		</AppContainer>
	);
}

export default App;
