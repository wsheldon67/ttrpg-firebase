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
export function add_ability_adv(character:Character, source: string, ability:Ability, value:number) {
  const ability_object = character.ab.find(el => el.name === ability)
  ability_object.adv_comp.push({
    source, value,
    operation: value === 1 ? '+adv' : '+disadv'
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

export function add_resistance(character:Character, name:string, source:string) {
  if (!character.resistance.find(el => el.name === name)) {
    character.resistance.push({name, comp: []})
  }
  const resistance_object = character.resistance.find(el => el.name === name)
  resistance_object.comp.push(source)
}

export function add_tracker(
  character:Character, label:string, value:number,
  max?:number, reset?:Function
  ) {
  character.script_tracker.push({
    label, value, max, reset
  })
}

export function run_reset(character:Character, data:Data, type:string) {
  const new_data:Data = JSON.parse(JSON.stringify(data))
  character.script_tracker.forEach(({reset}) => {
    reset(new_data, type)
  })
  new_data.tracker.forEach((el) => {
    if (el.reset_on.includes(type)) {
      el.value = el.reset_to
    }
  })
  return new_data
}