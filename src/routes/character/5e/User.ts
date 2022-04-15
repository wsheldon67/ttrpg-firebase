export interface Data {
  subrace: string, name: string, xp: number
  class: {name: string, level: number}[]
  items: {
    name: string
    [key: string]: any
  }[],
  equipped: {
    [slot: string]: string
  }
  spell: {
    name: string
    [key: string]: any
  }[]
  slot: number[]
  hd_rolls: number[]
  ab_rolls: {[ability: string]: number}
  alignment: string
  background: string
  info: any
  wealth: number
  [key: string]: any,
  race: string
  hp: number
}