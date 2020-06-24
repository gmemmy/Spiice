export const checkOddEvenNumber = (number: number) => {
  return !!(number % 2)
}

export const stringBreak = (str: string) => {
  const splitChar = str.split('')
  if (splitChar.length >= 19) {
    const formattedString = splitChar.slice(0, 27).join('')
    return formattedString.concat('...')
  }
  return splitChar.join('')
}
