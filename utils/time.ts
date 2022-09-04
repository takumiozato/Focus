export function minutesToSeconds(time: number) {
  return Math.floor(time * 60)
}

export function secondsToMinutes(time: number) {
  return { minutes: Math.floor(time / 60), sec: time % 60 }
}
