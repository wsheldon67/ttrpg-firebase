import type { Comp } from "../UI";

export function score_to_mod(score:number):number {
  return Math.floor((score-10)/2)
}

export function get_adv_from_comp(comp:Comp[]):number {
  let disadv = false
  let adv = false
  comp.forEach(({value}) => {
    if (value === 1) {adv = true}
    if (value === -1) {disadv = true}
  })
  if (adv && !disadv) {return 1}
  else if (disadv && !adv) {return -1}
  else {return 0}
}

export function get_mod_from_comp(comp:Comp[]):number {
  return comp.reduce((prev, curr) => {
    return prev + curr.value
  }, 0)
}