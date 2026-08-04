import { Fragment } from 'react'

const CROSS_SEPARATOR = ' × '

export function splitCrossTitle(text) {
  const parts = text.split(CROSS_SEPARATOR)

  if (parts.length === 1) {
    return { parts: [text], hasSeparator: false }
  }

  return { parts, hasSeparator: true }
}

/** @deprecated Use CrossTitle — titles now use × separators */
export function splitDotTitle(text) {
  const separator = ' · '
  const separatorIndex = text.indexOf(separator)

  if (separatorIndex === -1) {
    return { company: text, rest: '' }
  }

  return {
    company: text.slice(0, separatorIndex),
    rest: text.slice(separatorIndex),
  }
}

export function CrossTitle({ text, className = '' }) {
  const { parts, hasSeparator } = splitCrossTitle(text)

  if (!hasSeparator) {
    return <span className={`text-primary ${className}`.trim()}>{text}</span>
  }

  return (
    <>
      {parts.map((part, index) => (
        <Fragment key={`${part}-${index}`}>
          {index > 0 && <span className="text-secondary"> × </span>}
          <span className="text-primary">{part}</span>
        </Fragment>
      ))}
    </>
  )
}

/** @deprecated Use CrossTitle */
export function DotTitle({ text, className = '' }) {
  return <CrossTitle text={text.replace(/ · /g, CROSS_SEPARATOR)} className={className} />
}
