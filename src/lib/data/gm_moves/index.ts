import type { Theme } from "../eras/themes"
import { Kyoshi_Themes } from "../eras/Kyoshi/themes"
import { basic } from "./basic"

export type GM_Move = {
  text:string
  tags:string[]
  cat:string
  context:string
}

export const gm_moves:GM_Move[] = [
  ...basic,
  ...themes_to_moves(Kyoshi_Themes, 'Kyoshi')
]

export function themes_to_moves(themes:Theme[], era:string):GM_Move[] {
  const res:GM_Move[] = []
  for (let theme of themes) {
    for (let move of theme.gm_moves) {
      res.push({
        text: move,
        tags: [era],
        cat: theme.name,
        context: theme.text
      })
    }
  }
  return res
}