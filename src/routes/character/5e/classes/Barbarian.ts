import type { Item } from '$lib/prereqs'
import { add_info } from '../api'
import type { Params } from '../character'
import RageComp from './Rage.svelte'

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
    func: ({character}:Params) => {
      add_info(character, 'Rage', 'Rages', levels[level].rages)
      add_info(character, 'Rage', 'Rage Damage', levels[level].rage_dmg)
    }
  })
  return items
}

export const feats = [RageComp]

function Rage(source: string) {
  return {
    title: 'Rage',
    text: `A rage function`,
    tags: [], source
  }
}


function UnarmoredDefense(source: string) {
  return {
    title: 'Unarmored Defense',
    text: `An unarmored defense function`,
    tags: [], source
  }
}