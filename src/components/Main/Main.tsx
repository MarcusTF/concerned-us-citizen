import React from 'react'
import './Main.scss'
import { SITECONTENT } from '../../site-content' // Importing the content from site-content.tsx

import Tab from './Tab/Tab'

/**
 * The site content is mapped to the Tab component to create each view or tab of the app.
 * The state for showing and hiding these is in the App.tsx component because it must interact
 * with the sidebar buttons to select the appropriate tab. The logic for showing/hiding
 * is inside the tab component.
 **/
function Main({ selectedTab }: { selectedTab: string }) {
  return (
    <div className="main">
      {SITECONTENT.SiteContent.map(item => {
        return (
          <Tab
            selectedTab={selectedTab}
            tabId={item.sharedId}
            key={item.sharedId}
            mainContent={item.mainContent}
          />
        )
      })}
    </div>
  )
}

export default Main
