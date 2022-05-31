import type { Data } from "./character";
import type { Stats } from "./playbooks";
import { playbook } from "./playbooks";
import type { Move } from "./playbooks/moves";

export const stat_positions = {
  'Creativity':0, 'Focus': 1, 'Harmony': 2, 'Passion': 3
}
export function get_stats(character:Data):Stats {
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

const condition_penalties = {
  'Intimidate': {condition: 'Afraid', mod: -2},
  'Call Someone Out': {condition: 'Afraid', mod: -2},
  'Guide and Comfort': {condition: 'Angry', mod: -2},
  'Assess a Situation':{conition: 'Angry', mod: -2},
  'Push Your Luck': {condition: 'Guilty', mod: -2},
  'Deny a Callout': {condition: 'Guilty', mod: 2},
  'Trick': {condition: 'Insecure', mod: -2},
  'Resist Shifting Your Balance': {condition: 'Insecure', mod: -2},
  'Plead': {condition: 'Troubled', mod: -2},
  'Rely on Your Skills and Training': {condition: 'Troubled', mod: -2}
}

export function get_basic_move_stat(character:Data, move: Move):number {
  const base_stat = get_stats(character)[stat_positions[move.stat]]
  const applicable_condition = condition_penalties[move.name].condition
  let condition_mod = 0
  if (applicable_condition) {
    const is_applied = character.conditions.find(el => el.name === applicable_condition).applied
    if (is_applied) {
      condition_mod = condition_penalties[move.name].mod
    }
  }
  return base_stat + condition_mod
}

export function get_unused_advancements(character:Data):number {
  const advancements_earned = Math.floor(character.growth/4)
  const advancements_taken = character.growth_advancements.length
  return advancements_earned - advancements_taken
}