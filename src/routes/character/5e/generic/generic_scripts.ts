import type { Item } from "$lib/prereqs";
import { signed } from "$lib/pretty";
import { get_ab_mod } from "../api";
import type { Params } from "../character";
import { skills } from "../data";
import { ability_scripts } from "./abilities";



const create_skill_skeleton: Item = {
  id: 'Skill Skeleton', cats: ['skill'], pre: ['ability'],
  func: ({character}:Params) => {
    skills.forEach(({name, ab}) => {
      const mod = character.ab.find(el => el.name === ab).mod
      character.skill.push({
        name, mod: 0, adv: 0,
        comp: [{
          source: ab,
          value: mod,
          operation: signed(mod)
        }],
        adv_comp: []
      })
    })
  }
}

const create_equipped_skeleton:Item = {
  id: 'Equipped Skeleton', cats: ['combat'], pre: ['ability'],
  func: ({character, data}:Params) => {
    ['Left Hand', 'Right Hand'].forEach(slot => {
      character.equipped.push({
        slot, name: data.equipped[slot],
        melee_attack: {name: 'Melee Attack', mod: 0, adv: 0, comp: [], adv_comp:[]},
        ranged_attack: {name: 'Ranged Attack', mod: 0, adv: 0, comp: [], adv_comp:[]},
        melee_dmg: {name: 'Melee Dmg', mod: 0, adv: 0, q: 0, d: 0, comp: [], adv_comp:[]},
        ranged_dmg: {name: 'Melee Attack', mod: 0, adv: 0, q: 0, d: 0, comp: [], adv_comp:[]},
      })
    })
  }
}

const add_ab_to_attack:Item = {
  id: 'Add Ability to Attacks', pre: ['ability'],
  func: ({character}:Params) => {
    character.equipped.forEach((slot) => {
      // TODO finesse / thrown
      const str = get_ab_mod(character,'str')
      slot.melee_attack.comp.push({
        source: 'str',
        value: str,
        operation: signed(str)
      })
      const dex = get_ab_mod(character,'dex')
      slot.ranged_attack.comp.push({
        source: 'dex',
        value: dex,
        operation: signed(dex)
      })
    })
  }
}




/** A list of scripts that describe the changes that general rules make to this character. */
export const generic_scripts:Item[] = [
  ...ability_scripts, create_skill_skeleton, create_equipped_skeleton,
  add_ab_to_attack,
]