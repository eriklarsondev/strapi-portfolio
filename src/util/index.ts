export function formatQueryParam(text: string): string {
  if (text) {
    text = text.replace(/[^\w\s]/gi, '')
    text = text.replace(/\s+/g, '-')

    return text.toLowerCase()
  }
  return
}
