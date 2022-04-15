import type { Feat } from "../character"
import type { Item } from '$lib/prereqs'
import type { API } from "../api"

const levels:{rages: number, rage_dmg: number}[] = [
  {rages: 0, rage_dmg: 0},
  {rages: 2, rage_dmg: 2}, {rages: 2, rage_dmg: 2},
  {rages: 3, rage_dmg: 2}, {rages: 3, rage_dmg: 2},
  {rages: 3, rage_dmg: 2}, {rages: 4, rage_dmg: 2},
  {rages: 4, rage_dmg: 2}, {rages: 4, rage_dmg: 3},
  {rages: 4, rage_dmg: 3}, {rages: 5, rage_dmg: 3},
  {rages: 5, rage_dmg: 3}, {rages: 5, rage_dmg: 4},
  {rages: 6, rage_dmg: 4}, {rages: 6, rage_dmg: 4},
  {rages: 6, rage_dmg: 4}, {rages: Infinity, rage_dmg: 4},
]

export function Barbarian(level:number):Item[] {
  const items:Item[] = []
  items.push({
    id: 'Barbarian',
    func: (c: API) => {
      c.info.rages = levels[level].rages
      c.info.rage_dmg = levels[level].rage_dmg
    }
  })
  return items
}

function Rage(source: string):Feat {
  return {
    title: 'Rage',
    text: `A rage function`,
    tags: [], source
  }
}
function UnarmoredDefense(source: string):Feat {
  return {
    title: 'Unarmored Defense',
    text: `An unarmored defense function`,
    tags: [], source
  }
}