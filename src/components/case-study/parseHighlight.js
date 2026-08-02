export function parseHighlight(text = '') {
  if (!text) {
    return { label: '', body: '' }
  }

  const dotIndex = text.indexOf('.')
  if (dotIndex === -1) {
    return { label: '', body: text }
  }

  return {
    label: text.slice(0, dotIndex + 1),
    body: text.slice(dotIndex + 1).trim(),
  }
}
