import type { Feat } from "../character"
import type { Item } from '$lib/prereqs'
import type { API } from "../api"
function Darkvision(distance:number, source: string):Feat {
  return {
    title: `Darkvision (${distance}')`,
    text: `Within ${distance}', can see dim as if it were bright, and darkness as if it were dim.`,
    tags: ['Passive'],
    source
  }
}

const Dwarf: Item[] = [
  {
    id: 'Dwarf', cats: ['ability'],
    func: (c: API) => {
      c.ab.con.score.push({id: 'Dwarf', value: 2})
    }
  },{
    id: 'Dwarf', cats: ['speed'],
    func: (c: API) => {
      c.info.basic.speed = 25
    }
  },{
    id: 'Dwarf',
    func: (c: API) => {
      c.feats.push(Darkvision(60, 'Dwarf'))
    }
  }
]

export const Hill_Dwarf: Item[] = [
  ...Dwarf,
  {
    id: 'Hill Dwarf', cats: ['ability'],
    func: (c: API) => {
      c.ab.wis.score.push({id: 'Hill Dwarf', value: 1})
    }
  }
]
export const Mountain_Dwarf: Item[] = [
  ...Dwarf,
  {
    id: 'Mountain Dwarf', cats: ['ability'],
    func: (c: API) => {
      c.ab.str.score.push({id: 'Mountain Dwarf', value: 2})
    }
  }
]