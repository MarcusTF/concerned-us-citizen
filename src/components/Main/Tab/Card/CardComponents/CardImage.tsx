import React from 'react'
import { ContentImage } from '../../../../../contentInterface'

// if the image has a url property, render a div to put the image into, otherwise render nothing.
function CardImage({ image, tabId }: { image?: ContentImage; tabId: String }) {
  return image?.url ? (
    <div
      className={`${tabId}-cards-img cards-img`}
      style={{
        backgroundImage: `url(${image?.url})`,
        backgroundPosition: image?.placement ? image?.placement : 'center',
        backgroundSize: image?.size ? image?.size : 'fill',
        backgroundRepeat: 'no-repeat',
      }}
    />
  ) : null
}

export default CardImage
