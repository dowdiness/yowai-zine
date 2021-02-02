const isWhiteSpace = (character: number | string) => {
  return /\s/.test(
    typeof character === "number"
      ? String.fromCharCode(character)
      : character.charAt(0)
  )
}

export default isWhiteSpace
