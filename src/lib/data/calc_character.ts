import type { Data } from "./character";
import type { Stats } from "./playbooks";
import { playbook } from "./playbooks";

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