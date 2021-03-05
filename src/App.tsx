import React, { useEffect } from 'react';
import styled from 'styled-components'

import { GetPlayerStats, GetPlayerRankedStats } from "./libs/BrawlAPI";
import { IAll_Player_Stats, IRanked_Player_Stats, IBrawlSquadPlayer } from "./libs/Interfaces";


import PlayerList, { IPlayer } from "./libs/Team";

import logo from './logo.svg';
import './App.css';


const AppContainer = styled.div`
  background-color: #282c34;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: calc(10px + 2vmin);
  color: white;
`


function App() {
  useEffect(() => {
  });

  let squadArray: IBrawlSquadPlayer[] = []

  PlayerList.forEach( async (player: IPlayer) => {
    const playerStats : IAll_Player_Stats | null = await GetPlayerStats(player.id)
    const playerRankedStats : IRanked_Player_Stats | null = await GetPlayerRankedStats(player.id)

    if (playerStats != null && playerRankedStats != null) {
      let brawlSquadPlayerStats : IBrawlSquadPlayer = {
        name: player.name,
        username: playerStats.name,
        xp: playerStats.xp,
        level: playerStats.level,
        wins: playerRankedStats.wins,
        winrate: playerRankedStats.wins / playerRankedStats.games,
        games: playerRankedStats.games,
        brawlhalla_id: player.id,
        rating: playerRankedStats.rating,
        peak_rating: playerRankedStats.peak_rating,
        tier: playerRankedStats.tier
      }
      
      squadArray.push(brawlSquadPlayerStats)
    }
  });

  console.log(squadArray)

  return (
    <AppContainer>
      <header className="App-header">
        { squadArray.map((squadMember: IBrawlSquadPlayer, index: number) => (
            <div key={index}> name: { squadMember.name } username: { squadMember.username } winrate: { squadMember.winrate } rating: { squadMember.rating } peak rating: { squadMember.peak_rating }</div>
        ))}
      </header>
    </AppContainer>
  );
}

export default App;
