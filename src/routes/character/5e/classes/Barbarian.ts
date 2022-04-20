import type { Item } from '$lib/prereqs'
import { add_ability_adv, add_info, add_resistance, add_tracker } from '../api'
import type { Params } from '../character'
import RageComp from './Rage.svelte'

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
    id: 'Barbarian Rage',
    func: ({character, data}:Params) => {
      if (!data.script.Rage) {data.script.Rage = {
        rages: rages
      }}
      add_info(character, 'Rage', 'Rages', rages)
      add_info(character, 'Rage', 'Rage Damage', rage_dmg)
      add_tracker(character, 'Rages', data.script.Rage.rages, rages, rages, ['Long Rest'])
      if (data.script.Rage.active) {
        add_ability_adv(character, 'Rage', 'str', 1)
        add_resistance(character, 'Bludgeoning', 'Rage')
        add_resistance(character, 'Piercing', 'Rage')
        add_resistance(character, 'Slashing', 'Rage')
        /*
        if (weapon.type === 'melee' && attack.ability === 'str') {
          dmg_mod = rage_dmg
        }
        */
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
    id: 'Barbarian',
    func: ({character}:Params) => {
      character.info.basic.hit_dice.push({
        class: 'Barbarian',
        dice: level + 'd12'
      })
    }
  })
  return items
}