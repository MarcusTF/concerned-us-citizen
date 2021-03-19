import React, { CSSProperties } from 'react'

function CondTitleBtn({
  buttonUrl,
  btnStyling,
  tabId,
  title,
}: {
  buttonUrl?: string
  btnStyling?: CSSProperties
  tabId: string
  title?: string
}) {
  // I declared these boolean variables to help make this code as readable as possible. The logic got hard to parse without them:

  const hasTitle: boolean = !!title && title !== '' // Does the button have a title?

  const hasButtonUrl: boolean = !!buttonUrl && buttonUrl !== '' // Does the button have a url?

  const hasBtnTitle: boolean = hasTitle && hasButtonUrl // Does the button have both?

  // If the card has both a title AND button url, render the title AS a button; if the card has only a title, render a title; else, render nothing.
  return hasBtnTitle ? (
    <a
      href={buttonUrl}
      style={btnStyling}
      className={`${tabId}-cards-button cards-button`}
    >
      <h3>{title}</h3>
    </a>
  ) : hasTitle ? (
    <h2>{title}</h2>
  ) : null
}

export default CondTitleBtn
