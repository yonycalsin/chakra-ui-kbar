/**
 * Return a slugified copy of a string.
 *
 * @param {string} value The string to be slugified
 * @return {string} The slugified string.
 */
export function toSlug(value: string): string {
  let newValue = value

  if (!newValue) {
    return ''
  }

  newValue = newValue.toLowerCase().trim()

  newValue = newValue.replace(/ & /g, ' and ')

  newValue = newValue.replace(/[ ]+/g, '-')

  newValue = newValue.replace(/[-]+/g, '-')

  newValue = newValue.replace(/[^a-z0-9-]+/g, '')

  return newValue
}
