import { title } from 'node:process'
import React, { useState } from 'react'
import { ContentBox } from '../../../contentInterface'

import './Input.scss'

/**
 * 
 *  cardStyle,
  btnStyling,
  image,
  title,
  description,
  buttonUrl,
  tabId,
  cardId,
 */

const Input = ({
  updateTitle,
  updateDescription,
  updateCardColor,
  previewState,
}: {
  updateTitle: Function
  updateDescription: Function
  updateCardColor: Function
  previewState: ContentBox
}) => {
  // update card title
  const titleHandler = (e: any) => {
    updateTitle(e.target.value)
  }

  const descriptionHandler = (e: any) => {
    updateDescription(e.target.value)
  }

  const cardColorHandler = (e: any) => {
    updateCardColor(e.target.value)
  }

  return (
    <form className="Input">
      <input
        value={previewState.title}
        type="text"
        name="Title"
        id="Title"
        onChange={titleHandler}
      />
      <textarea
        value={previewState.description}
        name="description"
        id="description"
        cols={30}
        rows={10}
        onChange={descriptionHandler}
      ></textarea>
      <input
        value={previewState?.cardStyle?.backgroundColor || '#ffffff'}
        type="color"
        name="cardstyle-color"
        id="cardstyle-color"
        onChange={cardColorHandler}
      />
    </form>
  )
}

export default Input
