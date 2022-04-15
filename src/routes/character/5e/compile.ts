import type { Character } from "./UI"
import type { Data } from "./User"
import type { API } from './api'

import { xp, skills } from "./data"
import { signed } from "$lib/pretty"

function add_comps(list:any[], key='value'):number {
  return list.map(el => el[key]).reduce((prev, curr) => prev + curr, 0)
}
function add_adv(list:any[], key='value'):number {
  let adv = false
  let disadv = false
  list.forEach((v)=>{
    if (v[key] === 1){adv = true}
    if (v[key] === -1){disadv = true}
  })
  if (adv && disadv) {return 0}
  else if (adv) {return 1}
  else if (disadv) {return -1}
}

function score_to_mod(score) {return Math.floor((score - 10)/2)}

export function compile(a: API, d:Data):Character {
  // save, tracker, active
  // passive, info, initiative, equipped, ac, equipable, item, spell,
  // max_cantrips, max_spells
  const c:any = {
    race: d.race, subrace: d.subrace, name: d.name, xp: d.xp, class: d.class, hp: d.hp,
    armor: d.equipped.armor
  }
  c.level = d.class.map(el => el.level).reduce((prev, curr) => prev + curr, 0)
  c.xp_goal = xp[c.level+1] - xp[c.level]
  c.xp_progress = d.xp - xp[c.level]

  // abilities
  c.ab = []
  for (let name in d.ab_rolls) {
    const ab:any = {name}
    const all_score = [{id: 'Initial', value: d.ab_rolls[name]}, ...a.ab[name].score]
    ab.score = add_comps(all_score)
    const score_mod = {id: 'Score', value: score_to_mod(ab.score)}
    ab.mod = add_comps([...a.ab[name].mod, score_mod])
    ab.adv = add_adv(a.ab[name].adv)
    ab.comp = [
      {id: 'Score', operation: signed(score_mod.value)},
      ...a.ab[name].mod.map(({id, value})=>{return{id, value: signed(value)}}),
      ...a.ab[name].adv.map(({id, value})=>{return{id, value: value === 1 ? '+adv':'+disadv'}}),
    ]
    ab.score_comp = all_score.map(({id, value})=>{return{id, value: signed(value)}})
    c.ab.push(ab)
  }

  // skillz
  c.skill = []
  for (let label in a.skill) {
    const {mod, adv, ab} = a.skill[label]
    const skill:any = {label}
    const ab_mod = {id: ab, value: c.ab.find(el => el.name === ab).mod}
    skill.mod = add_comps([ab_mod, ...mod])
    skill.adv = add_adv(adv)
    skill.comp = [ab_mod, ...mod, ...adv]
    c.skill.push(skill)
  }

  // saves
  c.save = []
  for (let label in a.save) {
    const {mod, adv} = a.save[label]
    const save: any = {label}
    const ab_mod = {id: label, value: c.ab.find(el => el.name === label).mod}
    save.mod = add_comps([ab_mod, ...mod])
    save.adv = add_adv(adv)
    save.comp = [ab_mod, ...mod, ...adv]
    c.save.push(save)
  }
  return c
}