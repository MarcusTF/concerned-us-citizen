import { CSSProperties } from 'react'

// this defines the interface for the content from the sidebar buttons, to the tabs, all the way down to the cards.

export interface Content {
  sharedId: string
  buttonContent: ButtonContent
  mainContent: MainContent
}

export interface ButtonContent {
  key: number
  style?: {
    backgroundImage?: string
    backgroundPosition?:
      | 'top'
      | 'center'
      | 'bottom'
      | 'left top'
      | 'left'
      | 'left bottom'
      | 'right top'
      | 'right'
      | 'right bottom'
      | 'center top'
      | 'center center'
      | 'center bottom'
    backgroundSize?: 'contain' | 'cover'
    backgroundColor?: string
  }
  styling?: CSSProperties
}

export interface MainContent {
  key: number
  styling?: CSSProperties
  content: ContentBox[]
}

export interface ContentImage {
  url: string
  placement:
    | 'top'
    | 'center'
    | 'bottom'
    | 'left top'
    | 'left'
    | 'left bottom'
    | 'right top'
    | 'right'
    | 'right bottom'
    | 'center top'
    | 'center center'
    | 'center bottom'
  size?: 'cover' | 'fill' | 'contain'
}

export interface ContentBox {
  key: number
  cardStyle?: any
  btnStyling?: CSSProperties
  image?: ContentImage
  title?: string
  description: string
  buttonUrl?: string
}
