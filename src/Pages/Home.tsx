import React, { useState } from 'react'
import Main from '../components/Main/Main'
import SideBar from '../components/SideBar/SideBar'

const Home = () => {
  // this stores the state for the current selected tab. it defaults to the "home" tab.
  const [selectedTab, setSelectedTab] = useState('Home')

  // This sets the active tab based on the event.target.id of the clicked button.
  const setActive = (e: any) => {
    setSelectedTab(e.target.id)
  }

  // the selected tab state is passed to the main component for changing the view, the
  // setActive function is passed to the sidebar so that it can control which tab is active.

  return (
    <div className="App">
      <Main selectedTab={selectedTab} />
      <SideBar setActive={setActive} />
    </div>
  )
}

export default Home
