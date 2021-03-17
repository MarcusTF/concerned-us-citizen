import React, { useEffect, useState, MouseEventHandler } from 'react'
import { SITECONTENT } from '../../site-content'
import './SideBar.scss'

import chevron from '../../assets/chevron_right-white-18dp.svg'

const SideBar = ({ setActive }: { setActive: MouseEventHandler }) => {
  const [sizeState, setSizeState] = useState('open') // manages the open/closed state of the sidebar

  // This renders the sidebar as closed if the window width is less than 700px
  useEffect(() => {
    window.innerWidth < 700 ? setSizeState('closed') : setSizeState('open')
  }, [])

  // this toggles opening and closing the sidebar
  const toggleSideBar: MouseEventHandler = (e: any) =>
    sizeState === 'open' ? setSizeState('closed') : setSizeState('open')

  return (
    <nav className={`sidebar sidebar-${sizeState}`}>
      <button
        className={`resize-btn resize-btn-${sizeState}`}
        onClick={toggleSideBar}
      >
        <img src={chevron} />
      </button>
      <ul>
        {/* Map SiteContent to sidebar buttons. */}
        {SITECONTENT.SiteContent.map(item => {
          return (
            <li
              key={item.sharedId}
              id={item.sharedId}
              onClick={setActive}
              className={`${item.sharedId}-btn btn`}
              style={item.buttonContent.style}
            />
          )
        })}
      </ul>
    </nav>
  )
}

export default SideBar
