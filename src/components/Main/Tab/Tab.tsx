import React from 'react'

import { MainContent } from "../../../contentInterface"

function Tab({ tabId, mainContent, selectedTab }: { tabId: string, mainContent: MainContent, selectedTab: any }) {

    if (tabId === selectedTab) {
        return (
            <div className={`${tabId}-tab tab`}>
                {mainContent.content.map(item => {
                    let hasTitle: boolean = !!item.title && item.title !== ''
                    let hasButtonUrl: boolean = !!item.buttonUrl && item.buttonUrl !== ''
                    let hasBtnTitle: Boolean = hasTitle && hasButtonUrl
                    return (
                        <div key={item.key} id={`card-${item.key.toString()}`} className={`${tabId}-cards cards`} style={item.cardStyle}>
                            {
                                item.image?.url
                                &&
                                <div
                                    className={`${tabId}-cards-img cards-img`}
                                    style={{
                                        backgroundImage: `url(${item.image?.url})`,
                                        backgroundPosition: item.image?.placement ? item.image?.placement : 'center'
                                    }}
                                />
                            }
                            {
                                hasBtnTitle
                                    ?
                                    <a href={item.buttonUrl} className={`${tabId}-cards-button cards-button`}>
                                        <h3>{item.title}</h3>
                                    </a>
                                    :
                                    hasTitle && <h2>{item.title}</h2>
                            }
                            <p>{item.description}</p>
                        </div>
                    )
                })}
            </div>
        )
    } else {
        return null
    }
}

export default Tab
