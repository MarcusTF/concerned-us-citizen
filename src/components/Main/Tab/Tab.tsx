import React from 'react'
import { useSpring, animated } from 'react-spring'
import { MainContent } from '../../../contentInterface'
import './Tab.scss'

import Card from './Card/Card'

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
  // this is just a simple animation using react-spring to give things a little life.
  const [props, set] = useSpring(() => ({
    config: { mass: 3, friction: 35, tension: 270, precision: 0.001 },
    opacity: 0,
    transform: 'translateX(500px)',
  }))

  // tab is rendered conditionally based on the selectedTab state.
  if (tabId === selectedTab) {
    set({ opacity: 1, transform: 'translateX(0px)' }) // This sets the desired final state for the react-spring animation
    return (
      <animated.div style={props} className={`${tabId}-tab tab`}>
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
      </animated.div>
    )
  } else {
    set({ opacity: 0, transform: 'translateX(500px)' })
    return null
  }
}

export default Tab
