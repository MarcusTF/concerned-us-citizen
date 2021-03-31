import React, { useState } from 'react'
import Input from '../components/Admin/Input/Input'
import Preview from '../components/Admin/Preview/Preview'
import { ContentBox } from '../contentInterface'

import './Admin.scss'

const Admin = () => {
  const initialState: ContentBox = { key: 1, description: 'placeholder' }
  const [previewState, setPreviewState] = useState(initialState)

  //
  const updateDescription = (desc: string) =>
    setPreviewState({ ...previewState, description: desc })
  const updateCardColor = (color: string) =>
    setPreviewState({
      ...previewState,
      cardStyle: { ...previewState.cardStyle, backgroundColor: color },
    })
  const updateTitle = (title: string) =>
    setPreviewState({ ...previewState, title: title })

  // COMPONENT
  return (
    <div className="Admin">
      <Input
        previewState={previewState}
        updateTitle={updateTitle}
        updateDescription={updateDescription}
        updateCardColor={updateCardColor}
      />
      <Preview previewState={previewState} />
    </div>
  )
}

export default Admin
