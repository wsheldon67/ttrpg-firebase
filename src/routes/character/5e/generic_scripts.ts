import type { Item } from "$lib/prereqs";
import { signed } from "$lib/pretty";
import type { Params } from "./character";
import { abilities, skills } from "./data";

const create_ability_skeleton: Item = {
  id: 'Ability Skeleton', cats: ['setup'],
  func: ({character}:Params) => {
    abilities.forEach((ability) => {
      character.ab.push({
        name: ability, mod: 0, adv: 0, score: 10, comp: [], score_comp: [], adv_comp: []
      })
    })
  }
}

const create_skill_skeleton: Item = {
  id: 'Skill Skeleton', cats: ['skill'], pre: ['ability'],
  func: ({character}:Params) => {
    skills.forEach(({name, ab}) => {
      const mod = character.ab.find(el => el.name === ab).mod
      character.skill.push({
        label: name, mod: 0, adv: 0,
        comp: [{
          source: ab,
          value: mod,
          operation: signed(mod)
        }]
      })
    })
  }
}

/** A list of scripts that describe the changes that general rules make to this character. */
export const generic_scripts:Item[] = [
  create_ability_skeleton, create_skill_skeleton
]