import React, { CSSProperties } from 'react'
import { ContentImage } from '../../../../contentInterface'
import './Card.scss'
import CondTitleBtn from './CardComponents/CondTitleBtn'
import CardImage from './CardComponents/CardImage'

// HERE is the real meat of the app. The Card components. Each one is both rendered and styled based on the given inputs from site-content.tsx.
function Card({
  cardStyle,
  btnStyling,
  image,
  title,
  description,
  buttonUrl,
  tabId,
  cardId, // this is the key for the card, used to define ids for individual cards, just in case they need to be uniquely selected for whatever reason
}: {
  cardStyle?: any
  btnStyling?: CSSProperties
  image?: ContentImage
  title?: string
  description: string
  buttonUrl?: string
  tabId: string
  cardId: string
}) {
  // this component just conditionally wraps the component in an <a> if it has a link and a <div> if it doesn't have one.
  const ConditionalTag = ({
    link,
    children,
  }: {
    link?: string
    children: any
  }) =>
    link ? (
      <a
        href={link}
        id={`card-${cardId}`}
        className={`${tabId}-cards cards`}
        style={cardStyle}
      >
        {children}
      </a>
    ) : (
      <div
        id={`card-${cardId}`}
        className={`${tabId}-cards cards`}
        style={cardStyle}
      >
        {children}
      </div>
    )

  // The card image and button/title have logic inside that changes how they're rendered based on the attributes passed into them from the site-content.tsx
  return (
    <ConditionalTag link={buttonUrl}>
      <CardImage tabId={tabId} image={image} />
      <CondTitleBtn
        buttonUrl={buttonUrl}
        btnStyling={btnStyling}
        title={title}
        tabId={tabId}
      />
      <p>{description}</p>
    </ConditionalTag>
  )
}

export default Card
