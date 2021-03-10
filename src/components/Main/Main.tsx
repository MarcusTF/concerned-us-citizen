import React from 'react'
import './Main.scss'

import { SITECONTENT } from '../../site-content'
import Tab from './Tab/Tab'


function Main({ selectedTab }: { selectedTab: string }) {
    return (
        <div className='main'>
            {SITECONTENT.SiteContent.map(item => {
            return <Tab selectedTab={selectedTab} tabId={item.sharedId} key={item.sharedId} mainContent={item.mainContent} />
            })}
        </div>
    )
}

export default Main
