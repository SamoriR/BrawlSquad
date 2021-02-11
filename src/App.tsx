import React, { useState, useEffect } from 'react';
import styled from 'styled-components'

import { GetPlayerStats, GetPlayerRankedStats } from "./libs/BrawlAPI";
import PlayerList, { IPlayer } from "./libs/Team";

import logo from './logo.svg';
import './App.css';

function App() {
  const Init = async () => {
    PlayerList.forEach( async (player: IPlayer) => {
      const playerStats = await GetPlayerStats(player.id);
      console.log(playerStats);
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
