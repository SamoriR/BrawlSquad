import React, { useState, useEffect } from 'react';
import styled from 'styled-components'

import { GetPlayerStats, GetPlayerRankedStats } from "./libs/BrawlAPI";
import { IAll_Player_Stats, IRanked_Player_Stats, IBrawlSquadPlayer } from "./libs/Interfaces";


import PlayerList, { IPlayer } from "./libs/Team";

import logo from './logo.svg';
import './App.css';

const initPlayerState : IBrawlSquadPlayer = {
  name: '',
  username: '',
  xp: 0,
  level: 0,
  wins: 0,
  winrate: 0,
  games: 0,
  brawlhalla_id: 0,
  rating: 0,
  peak_rating: 0,
  tier: ''
}

function App() {
  const [squad, setSquad] = useState([initPlayerState]);

  const Init = async () => {
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
        
        console.log(brawlSquadPlayerStats);
        // squadArray.push(brawlSquadPlayerStats)
      }
    });

    setSquad(squadArray)
    console.log(squad)
  }

  useEffect(() => {
    Init();
  });

  return (
    <div className="App">
      <header className="App-header">
        {
          squad.map((squadMember: IBrawlSquadPlayer, index: number) =>
            <p> name: { squadMember.name } username: { squadMember.username } winrate: { squadMember.winrate } rating: { squadMember.rating } peak rating: { squadMember.peak_rating }</p>
          )
        }
      </header>
    </div>
  );
}

export default App;
