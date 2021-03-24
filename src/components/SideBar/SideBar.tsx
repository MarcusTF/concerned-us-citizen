import React, { useEffect, useState, MouseEventHandler } from 'react'
import { useSpring, animated } from 'react-spring'
import { SITECONTENT } from '../../site-content'
import './SideBar.scss'

import chevron from '../../assets/chevron_right-white-18dp.svg'
import Info from '../Info/Info'

const SideBar = ({ setActive }: { setActive: any }) => {
  const [props, set] = useSpring(() => ({
    config: { mass: 3 },
    width: '0',
    minWidth: '0px',
    padding: '7.27px',
  }))

  const [sizeState, setSizeState] = useState('open') // manages the open/closed state of the sidebar

  // This renders the sidebar as closed if the window width is less than 700px
  useEffect(() => {
    if (window.innerWidth < 700) {
      setSizeState('closed')
      set({ width: '0', minWidth: '0px', padding: '7.27px' })
    } else {
      setSizeState('open')
      set({ minWidth: '80px', padding: '10px' })
    }
  }, [set])

  // this toggles opening and closing the sidebar
  const toggleSideBar: MouseEventHandler = (e: any) => {
    if (sizeState === 'open') {
      setSizeState('closed')
      set({ width: '0', minWidth: '0px', padding: '7.27px' })
    } else {
      setSizeState('open')
      set({ minWidth: '80px', padding: '10px' })
    }
  }

  return (
    <animated.nav className={`sidebar`} style={props}>
      <button
        className={`resize-btn resize-btn-${sizeState}`}
        onClick={toggleSideBar}
      >
        <img src={chevron} alt="" />
      </button>
      <ul>
        {/* Map SiteContent to sidebar buttons. */}
        {SITECONTENT.SiteContent.map(item => {
          return (
            <li
              key={item.sharedId}
              id={item.sharedId}
              onClick={setActive}
              className={`${item.sharedId}-btn btn tooltip`}
              style={item.buttonContent.style}
              tabIndex={0}
              aria-label={item.buttonContent.tooltip}
              onKeyDown={e => e.code === 'Enter' && setActive(e)}
            />
          )
        })}
      </ul>
      <hr />
      <Info />
    </animated.nav>
  )
}

export default SideBar
