import type { Item } from "$lib/prereqs";
import type { Params } from "../character";
import { sizes } from "../data";
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

export const info_scripts:Item[] = [
  compile_speed, compile_size
]