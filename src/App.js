import React from 'react';
import TabNav from './components/TabNav.js';
import Header from './components/Header.js';
import AppRouter from './components/AppRouter.js';

import CharacterList from "./components/CharacterList";
import CharacterCard from "./components/CharacterCard";
import LocationsList from "./components/LocationsList";
import EpisodeList from "./components/EpisodeList";

export default function App() {
  return <main>
    <Header />
    <TabNav />
    <AppRouter />
  </main>
}