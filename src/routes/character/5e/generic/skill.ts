import type { Item } from "$lib/prereqs";
import type { Params } from "../character";
import { get_adv_from_comp, get_mod_from_comp } from "./helpers";

const compile_skills:Item = {
  id: 'Compile Skills', pre: ['skill', 'ability', 'prof'],
  func: ({character}:Params) => {
    character.skill.forEach((skill) => {
      skill.mod = get_mod_from_comp(skill.comp)
      skill.adv = get_adv_from_comp(skill.adv_comp)
    })
  }
}

export const skill_scripts:Item[] = [
  compile_skills
]