import { signed } from "$lib/pretty"
import type { Ability } from "./data"
import type { Character } from "./UI"
import type { Data } from "./User"

export function add_ability_score(character:Character, source: string, ability:Ability, value:number) {
  const ability_object = character.ab.find(el => el.name === ability)
  ability_object.score_comp.push({
    source, value,
    operation: signed(value)
  })
}

export function add_speed(character:Character, source:string, value:number) {
  character.info.basic.speed.comp.push({
    source, value,
    operation: signed(value)
  })
}

export function add_size(character:Character, source:string, value:number) {
  character.info.basic.size.comp.push({
    source, value,
    operation: signed(value)
  })
}

export function add_prof_item(character:Character, source:string, category:string, name:string){
  if (!character.info.prof[category]) {
    character.info.prof[category] = []
  }
  if (!character.info.prof[category].find(el => el.name === name)) {
    character.info.prof[category].push({name, comp:[]})
  }
  const prof_object = character.info.prof[category].find(el => el.name === name)
  prof_object.comp.push(source)
}

export function add_info(character:Character, cat:string, key:string, value:any) {
  if (!character.info[cat]) {character.info[cat] = {}}
  character.info[cat][key] = value
}