import React from 'react'
import { MainContent } from '../../../contentInterface'

import Card from './Card'

// The tab component receives the sharedId mapped to tabId. This same id is passed to the appropriate button in the sidebar component.
// It also receives the the mainContent for the tab and the selectedTab state from the top level App component.
function Tab({
  tabId,
  mainContent,
  selectedTab,
}: {
  tabId: string
  mainContent: MainContent
  selectedTab: any
}) {
  // tab is rendered conditionally based on the selectedTab state.
  if (tabId === selectedTab) {
    return (
      <div className={`${tabId}-tab tab`}>
        {/* the actual meat of the app, 'SITECONTENT.siteContent.mainContent.content', is mapped to Card components. */}
        {mainContent.content.map(item => (
          <Card
            tabId={tabId}
            key={item.key}
            cardId={String(item.key)}
            cardStyle={item.cardStyle}
            btnStyling={item.btnStyling}
            image={item.image}
            title={item.title}
            description={item.description}
            buttonUrl={item.buttonUrl}
          />
        ))}
      </div>
    )
  } else {
    return null
  }
}

export default Tab
