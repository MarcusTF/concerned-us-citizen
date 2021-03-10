import React, { useEffect, useState, MouseEventHandler } from 'react';
import './SideBar.scss'

import { SITECONTENT } from "../../site-content";
import chevron from '../../assets/chevron_right-white-18dp.svg'

const SideBar = ({ setActive }: { setActive: MouseEventHandler }) => {
    const [sizeState, setSizeState] = useState('open') // manages the active/inactive tab styling

    useEffect(() => {
        window.innerWidth < 700 ? setSizeState('closed') : setSizeState('open')
    },[])

    const toggleSideBar: MouseEventHandler = (e: any) => sizeState === 'open' ? setSizeState('closed') : setSizeState('open')

    return (
        <nav className={`sidebar sidebar-${sizeState}`}>
            <button className={`resize-btn resize-btn-${sizeState}`} onClick={toggleSideBar}><img src={chevron}/></button>
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
        </nav>
    )
}

export default SideBar