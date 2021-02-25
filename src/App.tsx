import React, { useState, useEffect } from 'react';
import styled from 'styled-components'

import { GetPlayerStats, GetPlayerRankedStats } from "./libs/BrawlAPI";
import { IAll_Player_Stats, IRanked_Player_Stats, IBrawlSquadPlayer } from "./libs/Interfaces";


import PlayerList, { IPlayer } from "./libs/Team";

import logo from './logo.svg';
import './App.css';

function App() {
  const Init = async () => {
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
          games: playerRankedStats.games,
          brawlhalla_id: player.id,
          rating: playerRankedStats.rating,
          peak_rating: playerRankedStats.peak_rating,
          tier: playerRankedStats.tier
        }
        
        console.log(brawlSquadPlayerStats);
      }
    });
  }

  useEffect(() => {
    Init();
  });

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
