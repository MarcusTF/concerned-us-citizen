import React, { useState } from 'react'
import './App.scss';

import SideBar from "./components/SideBar/SideBar";
import Main from "./components/Main/Main"

function App() {

  const [selectedTab, setSelectedTab] = useState('Home')

  const setActive = (e: any) => {
    setSelectedTab(e.target.id)
  }

  // selectedTab !== 'BLM' && setTab('BLM')

  return (
    <div className="App">
      <Main selectedTab={selectedTab} />
      <SideBar setActive={setActive} />
    </div>
  );
}

export default App;
