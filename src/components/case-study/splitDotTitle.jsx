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

export function DotTitle({ text, className = '' }) {
  const { company, rest } = splitDotTitle(text)

  if (!rest) {
    return <span className={`text-primary ${className}`.trim()}>{company}</span>
  }

  return (
    <span className={`text-primary ${className}`.trim()}>
      {company}
      {rest}
    </span>
  )
}
