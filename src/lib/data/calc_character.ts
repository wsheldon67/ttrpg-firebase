import type { Condition, Data, Stat } from "./character";
import type { Stats } from "./playbooks";
import { playbook } from "./playbooks";
import { all_moves, type Move } from "./playbooks/moves";

export const stat_positions = {
  'Creativity':0, 'Focus': 1, 'Harmony': 2, 'Passion': 3
}
export function get_stats(character:Data):Stats {
  console.trace('Depreciated: get_stats')
  const {stats} = playbook[character.playbook]
  const {boosted_stats} = character
  const res:Stats = [...stats]
  boosted_stats.forEach((stat) => {
    res[stat_positions[stat]]++
    if (res[stat_positions[stat]] > 2) {
      res[stat_positions[stat]] = 2
    }
  })
  return res
}
export function get_all_stats(character:Data):{name: Stat, mod: number}[] {
  const {stats} = playbook[character.playbook]
  const {boosted_stats} = character
  const res:any = stats.map((mod, index) => {
    return {name: ['Creativity','Focus','Harmony','Passion'][index], mod}
  })
  boosted_stats.forEach((stat_name) => {
    res[stat_positions[stat_name]].mod++
    if (res[stat_positions[stat_name]].mod > 2) {
      res[stat_positions[stat_name]].mod = 2
    }
  })
  character.moves.forEach((move_name) => {
    const move = all_moves.find(el => el.name === move_name)
    const stats = ['Creativity','Focus','Harmony','Passion']
    stats.forEach((stat) => {
      if (move.tags.includes('+'+stat)) {
        res[stat_positions[stat]].mod++
      }
      if (res[stat_positions[stat]].mod > 3) {
        res[stat_positions[stat]].mod = 3
      }
    })
  })
  return res
}
interface StatObject {[stat:string]: number}
export function get_stat_object(character:Data):StatObject {
  const all_stats = get_all_stats(character)
  const res = {}
  all_stats.forEach(({name, mod}) => {
    res[name] = mod
  })
  return res
}

export function condition_is_applied(character:Data, condition:Condition):boolean {
  return character.conditions.some(el => el.name === condition && el.applied)
}
export function apply_condition(character:Data, move: Move):number {
  if (!move.conditions){ return 0 }

  let condition_mod = 0
  move.conditions.forEach(({name, mod}) => {
    if (condition_is_applied(character, name)) {
      condition_mod += mod
    }
  })
  return condition_mod
}

export function get_basic_move_stat(character:Data, move: Move):number {
  const base_stat = get_stat_object(character)[move.stat] || 0
  return base_stat + apply_condition(character, move)
}

export function get_unused_advancements(character:Data):number {
  const advancements_earned = Math.floor(character.growth/4)
  const advancements_taken = character.growth_advancements.length
  return advancements_earned - advancements_taken
}