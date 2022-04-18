import type { Item } from "$lib/prereqs";
import type { Params } from "./character";
import { abilities } from "./data";

const create_ability_skeleton: Item = {
  id: 'Ability Skeleton', cats: ['setup'],
  func: ({character}:Params) => {
    abilities.forEach((ability) => {
      character.ab.push({
        name: ability, mod: 0, adv: 0, score: 10, comp: [], score_comp: []
      })
    })
  }
}

/** A list of scripts that describe the changes that general rules make to this character. */
export const generic_scripts:Item[] = [
  create_ability_skeleton
]