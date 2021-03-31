import React, { CSSProperties } from 'react'
import { ContentBox } from '../../../contentInterface'
import Card from '../../Main/Tab/Card/Card'
import './Preview.scss'

const Preview = ({ previewState }: { previewState: ContentBox }) => {
  const { description, cardStyle, title } = previewState
  return (
    <div className="preview">
      <Card
        title={title}
        tabId="preview"
        cardId="preview"
        description={description}
        cardStyle={cardStyle}
      />
    </div>
  )
}

export default Preview
