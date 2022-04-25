import type { Item } from "$lib/prereqs";
import { signed } from "$lib/pretty";
import type { Params } from "../character";
import { profs, sizes } from "../data";
import { get_mod_from_comp } from "./helpers";

const compile_speed:Item = {
  id: 'Compile Speed', pre: ['speed'],
  func: ({character}:Params) => {
    const speed = character.info.Basic.Speed
    speed.value = get_mod_from_comp(speed.comp)
  }
}

const compile_size:Item = {
  id: 'Compile Size', pre: ['size'],
  func: ({character}:Params) => {
    const size = character.info.Basic.Size
    size.value = sizes[get_mod_from_comp(size.comp)]
  }
}

const calculate_level:Item = {
  id: 'Calculate Level',
  func: ({character}:Params) => {
    character.class.forEach(({name, level}) => {
      character.level += level
      character.info.Basic.Class[name] = level
    })
    character.info.Basic['Proficiency Bonus'] = signed(profs[character.level])
    character.prof_bonus = profs[character.level]
  }
}

export const info_scripts:Item[] = [
  compile_speed, compile_size, calculate_level
]