import type { Item } from '$lib/prereqs'
import { add_ability_score, add_prof_item, add_size, add_speed } from '../api'
import type { Params } from '../character'
function Darkvision(distance:number, source: string) {
  return {
    name: `Darkvision (${distance}')`,
    text: `Within ${distance}', can see dim as if it were bright, and darkness as if it were dim.`,
    tags: ['Passive'],
    source
  }
}

const Dwarf: Item[] = [
  {
    id: 'Dwarf', cats: ['ability mods'],
    func: ({character}:Params) => {
      add_ability_score(character, 'Dwarf', 'con', 2)
    }
  },{
    id: 'Dwarf', cats: ['speed'],
    func: ({character}:Params) => {
      add_speed(character, 'Dwarf', 25)
    }
  },{
    id: 'Dwarf',
    func: ({character}:Params) => {
      character.passive.push(Darkvision(60, 'Dwarf'))
      // TODO figure out feats / active feats
    }
  },{
    id: 'Dwarf', cats: ['size'],
    func: ({character}:Params) => {
      add_size(character, 'Dwarf', 3, 'Medium')
    }
  },{
    id: 'Dwarf', cats: ['profs'],
    func: ({character, data}:Params) => {
      add_prof_item(character, 'Dwarf', 'Tool', data.Dwarf.tool_proficiency)
    }
  }
]

export const Hill_Dwarf: Item[] = [
  ...Dwarf,
  {
    id: 'Hill Dwarf', cats: ['ability'],
    func: ({character}:Params) => {
      add_ability_score(character, 'Hill Dwarf', 'wis', 1)
    }
  }
]
export const Mountain_Dwarf: Item[] = [
  ...Dwarf,
  {
    id: 'Mountain Dwarf', cats: ['ability'],
    func: ({character}:Params) => {
      add_ability_score(character, 'Hill Dwarf', 'str', 2)
    }
  },{
    id: 'Mountain Dwarf', cats: ['profs'],
    func: ({character}:Params) => {
      add_prof_item(character, 'Hill Dwarf', 'Armor', 'Light')
      add_prof_item(character, 'Hill Dwarf', 'Armor', 'Medium')
    }
  }
]