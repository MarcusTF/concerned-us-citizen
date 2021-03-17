import React, { CSSProperties } from 'react'
import { ContentImage } from '../../../contentInterface'

// HERE is the real meat of the app. The Card components. Each one is both rendered and styled based on the given inputs from site-content.tsx.
function Card({
  cardStyle,
  btnStyling,
  image,
  title,
  description,
  buttonUrl,
  tabId,
  cardId, // this is the key for the card, used to define ids for individual cards, just in case they need to be uniquely selected.
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
  // I declared these boolean variables to help make this code as readable as possible. The logic got hard to parse without them:

  const hasTitle: boolean = !!title && title !== '' // Does the button have a title?

  const hasButtonUrl: boolean = !!buttonUrl && buttonUrl !== '' // Does the button have a url?

  const hasBtnTitle: boolean = hasTitle && hasButtonUrl // Does the button have both?

  return (
    <div
      id={`card-${cardId}`}
      className={`${tabId}-cards cards`}
      style={cardStyle}
    >
      {/* if the card has an image URL, render a div with that image. Might make this a separate component later. */}
      {image?.url && (
        <div
          className={`${tabId}-cards-img cards-img`}
          style={{
            backgroundImage: `url(${image?.url})`,
            backgroundPosition: image?.placement ? image?.placement : 'center',
            backgroundSize: image?.size ? image?.size : 'fill',
            backgroundRepeat: 'no-repeat',
          }}
        />
      )}
      {/* this is the logic for rendering either to title OR a title/button combo. Might also make this a separate component later. */}
      {hasBtnTitle ? (
        <a
          href={buttonUrl}
          style={btnStyling}
          className={`${tabId}-cards-button cards-button`}
        >
          <h3>{title}</h3>
        </a>
      ) : (
        hasTitle && <h2>{title}</h2>
      )}
      <p>{description}</p>
    </div>
  )
}

export default Card
