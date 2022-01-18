export const displayTime = (second: number): string => {
  const roundedSecond = Math.floor(second)
  // 3600秒以上の場合に対応してません
  if (roundedSecond < 10) {
    return `0:0${roundedSecond}`
  } else if (roundedSecond < 60) {
    return `0:${roundedSecond}`
  } else {
    return `${Math.floor(roundedSecond / 60)}:${roundedSecond % 60 < 10 ? `0${roundedSecond % 60}` : roundedSecond % 60}`
  }
}
