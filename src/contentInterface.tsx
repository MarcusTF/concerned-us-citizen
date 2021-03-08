// shared id
// buttonContent
// >> key
// >> styling
// mainContent
// >> key
// >> styling
// >> ContentBoxes[]
// >> >> key
// >> >> styling
// >> >> title
// >> >> description
// >> >> buttonUrl

import { Url } from "node:url";

export interface Content {
    sharedId: string,
    buttonContent: ButtonContent,
    mainContent: MainContent
}

export interface ButtonContent {
    key: number,
    style?: {
        backgroundImage?: string,
        backgroundPosition?: 
        'top' | 'center' | 'bottom' |
        'left top' | 'left' | 'left bottom' |
        'right top' | 'right' | 'right bottom' |
        'center top' | 'center center' | 'center bottom',
        backgroundSize?: 'contain' | 'cover'
        backgroundColor?: string,
    },
    styling?: any
}

export interface MainContent {
    key: number,
    styling?: any,
    content: ContentBox[]
}

export interface ContentImage {
    url: string,
    placement: 'top' | 'center' | 'bottom' |
    'left top' |
    'left' |
    'left bottom' |
    'right top' |
    'right' |
    'right bottom' |
    'center top' |
    'center center' |
    'center bottom'
}

export interface ContentBox {
    key: number,
    cardStyle?: any,
    btnStyling?: any,
    image?: ContentImage,
    title?: string,
    description: string,
    buttonUrl?: string
}