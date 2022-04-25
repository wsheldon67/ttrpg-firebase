import type { Item } from '$lib/prereqs'
import { add_ability_adv, add_attack_mod, add_info, add_prof_item, add_resistance, add_save_prof, add_skill_prof, add_tracker, type AttackMod } from '../api'
import type { Params } from '../character'
import RageComp from './Rage.svelte'
import type { Data } from '../User'
import type { Comp } from '../UI'
import { signed } from '$lib/pretty'

const levels:{rages: number, rage_dmg: number}[] = [
  {rages: 0, rage_dmg: 0},
  {rages: 2, rage_dmg: 2}, {rages: 2, rage_dmg: 2},
  {rages: 3, rage_dmg: 2}, {rages: 3, rage_dmg: 2},
  {rages: 3, rage_dmg: 2}, {rages: 4, rage_dmg: 2},
  {rages: 4, rage_dmg: 2}, {rages: 4, rage_dmg: 3},
  {rages: 4, rage_dmg: 3}, {rages: 5, rage_dmg: 3},
  {rages: 5, rage_dmg: 3}, {rages: 5, rage_dmg: 4},
  {rages: 6, rage_dmg: 4}, {rages: 6, rage_dmg: 4},
  {rages: 6, rage_dmg: 4}, {rages: Infinity, rage_dmg: 4},
]

export function Barbarian(level:number):Item[] {
  const items:Item[] = []
  const {rage_dmg, rages} = levels[level]
  items.push({
    id: 'Barbarian Rage', pre: ['Add Ability to Attacks'], cats: ['attack'],
    func: ({character, data}:Params) => {
      if (!data.script.Rage) {data.script.Rage = {
        rages: rages
      }}
      add_info(character, 'Rage', 'Rages', rages)
      add_info(character, 'Rage', 'Rage Damage', rage_dmg)
      add_tracker(character, 'Rages', data.script.Rage.rages, rages, (new_data:Data, type:string) => {
        if (type === 'Long Rest') {
          new_data.script.Rage.rages = rages
        }
      })
      if (data.script.Rage.active) {
        add_ability_adv(character, 'Rage', 'str', 1)
        add_resistance(character, 'Bludgeoning', 'Rage')
        add_resistance(character, 'Piercing', 'Rage')
        add_resistance(character, 'Slashing', 'Rage')
        add_attack_mod(character, ({type, slot}:AttackMod):Comp => {
          const uses_str = slot.melee_attack.comp.some(el => el.source === 'str')
          if (type === 'melee' && uses_str) {
            return {
              source: 'Rage',
              value: rage_dmg,
              operation: signed(rage_dmg)
            }
          }
        })
      }
    }
  })
  items.push({
    id: 'Barbarian Rage',
    func: ({character}:Params) => {
      character.active.push(RageComp)
      character.passive.push({
        name: 'Rage',
        tags: ['Combat'],
        text: {
          'Bonus Action': `Advantage on str checks and saves; Melee attacks using str get +${rage_dmg}; You have resistance to bludgeoning, piercing, and slashing dmg.`,
          'Rules': `Cannot be wearing heavy armor; Cannot cast or concentrate spells; Ends if you are knocked unconcious; Ends if you have not attacked a hostile or taken dmg since your last turn; You can end your rage as a bonus action;`,
          'Duration': `1 minute`,
          'Uses': `${rages} uses recharged on a long rest.`
        }
      })
    }
  })
  items.push({
    id: 'Barbarian Hit Dice',
    func: ({character}:Params) => {
      character.info.Basic['Hit Dice'].push(`Barbarian: ${level}d12`)
      // FIXME this wont be great when we need to access hit dice later
    }
  })
  items.push({
    id: 'Barbarian Proficiency',
    func: ({character}:Params) => {
      add_prof_item(character, 'Barbarian', 'Armor', 'Light')
      add_prof_item(character, 'Barbarian', 'Armor', 'Medium')
      add_prof_item(character, 'Barbarian', 'Armor', 'Shield')

      add_prof_item(character, 'Barbarian', 'Weapon', 'Simple')
      add_prof_item(character, 'Barbarian', 'Weapon', 'Martial')
    }
  })
  items.push({
    id: 'Barbarian Save Prof', pre: ['Save Skeleton'],
    func: ({character}:Params) => {
      add_save_prof(character, 'Barbarian', 'str')
      add_save_prof(character, 'Barbarian', 'con')
    }
  })
  items.push({
    id: 'Barbarian Skill Prof', pre: ['Skill Skeleton'],
    func: ({character, data}:Params) => {
      add_skill_prof(character, 'Barbarian', data.script.Barbarian.skill_prof1)
      add_skill_prof(character, 'Barbarian', data.script.Barbarian.skill_prof2)
    }
  })
  return items
}