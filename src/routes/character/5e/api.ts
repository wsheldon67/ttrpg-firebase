import { signed } from "$lib/pretty"
import type { Ability } from "./data"
import type { Character, Item } from "./UI"
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
export function add_save_prof(character:Character, source:string, ability:Ability) {
  const comp = character.save.find(el => el.name === ability).comp
  const comp_has_prof = comp.some(el => el.source.includes('Prof'))
  if (!comp_has_prof) {
    const prof_bonus = character.prof_bonus
    comp.push({
      source: 'Prof (' + source + ')',
      value: prof_bonus,
      operation: signed(prof_bonus)
    })
  }
}
export function add_skill_prof(character:Character, source:string, skill:string) {
  const comp = character.skill.find(el => el.name === skill).comp
  const comp_has_prof = comp.some(el => el.source.includes('Prof'))
  if (!comp_has_prof) {
    const prof_bonus = character.prof_bonus
    comp.push({
      source: 'Prof (' + source + ')',
      value: prof_bonus,
      operation: signed(prof_bonus)
    })
  }
}

export function get_ab_mod(character:Character, ability:Ability) {
  return character.ab.find(el => el.name === ability).mod
}

export function add_speed(character:Character, source:string, value:number) {
  character.info.Basic.Speed.comp.push({
    source, value,
    operation: signed(value)
  })
}

export function add_size(character:Character, source:string, value:number, operation?:string) {
  character.info.Basic.Size.comp.push({
    source, value,
    operation: operation || signed(value)
  })
}

export function add_prof_item(character:Character, source:string, category:string, name:string){
  if (!character.info.Proficiencies[category]) {
    character.info.Proficiencies[category] = []
  }
  if (!character.info.Proficiencies[category].find(el => el.name === name)) {
    character.info.Proficiencies[category].push({name, comp:[]})
  }
  const prof_object = character.info.Proficiencies[category].find(el => el.name === name)
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

export interface AttackMod {
  slot: any, type: 'melee'|'ranged',
  weapon: Item 
}
const blank_weapon = {
  name: 'None', weight: 0, location: 'Inventory', type: 'Weapon'
}
export function add_attack_mod(character:Character, func:Function) {
  character.equipped.forEach((slot) => {
    ['melee', 'ranged'].forEach((type) => {
      const params = {
        slot, type,
        weapon: character.item.find(el => el.name === slot.name) || blank_weapon
      }
      const comp = func(params)
      if (comp) {slot[type + '_attack'].comp.push(comp)}
    })
  })
}