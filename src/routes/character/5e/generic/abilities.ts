import { abilities } from "../data";
import { signed } from "$lib/pretty";
import { score_to_mod, get_mod_from_comp, get_adv_from_comp } from "./helpers";
import type { Item } from "$lib/prereqs";
import type { Params } from "../character";

const create_ability_skeleton: Item = {
  id: 'Ability Skeleton', cats: ['setup'],
  func: ({character}:Params) => {
    abilities.forEach((ability) => {
      character.ab.push({
        name: ability, mod: 0, adv: 0, score: 0, comp: [], score_comp: [], adv_comp: []
      })
    })
  }
}

const create_save_skeleton:Item = {
  id: 'Save Skeleton',
  func: ({character}:Params) => {
    abilities.forEach((ability) => {
      character.save.push({
        name: ability, mod: 0, adv: 0, comp: [], adv_comp: []
      })
    })
  }
}

const add_ability_rolls:Item = {
  id: 'Add Initial Ability Rolls', cats: ['ability mods'],
  func: ({character, data}:Params) => {
    abilities.forEach((ability) => {
      const ability_object = character.ab.find(el => el.name === ability)
      ability_object.score_comp.push({
        source: 'Initial Roll',
        value: data.ab_rolls[ability],
        operation: signed(data.ab_rolls[ability])
      })
    })
  }
}

const compile_ab_score:Item = {
  id: 'Compile Abilities', cats: ['ability'], pre: ['ability mods'],
  func: ({character}:Params) => {
    abilities.forEach((ability) => {
      const ability_object = character.ab.find(el => el.name === ability)
      ability_object.score = get_mod_from_comp(ability_object.score_comp)
      ability_object.comp.push({
        source: 'Score (' + ability_object.score + ')',
        value: score_to_mod(ability_object.score),
        operation: signed(score_to_mod(ability_object.score))
      })
      ability_object.mod = get_mod_from_comp(ability_object.comp)
      ability_object.adv = get_adv_from_comp(ability_object.adv_comp)
    })
  }
}

export const ability_scripts = [
  create_ability_skeleton, create_save_skeleton, add_ability_rolls,
  compile_ab_score
]