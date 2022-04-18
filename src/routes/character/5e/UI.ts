import type { Data } from './User'

interface Comp {
  source: string
  operation: string
  value: number
}
export interface Item {
  name: string
  weight: number
  location: string
  type?: string
  [key: string]: any
}
export interface Spell {
  name: string
  level: number
  casting_time: string
  [key: string]: any
}
export interface D20 {
  label:string, mod: number, adv: number, comp: Comp[]
}
export interface Roll extends D20 {
  q: number, d: number
}

export interface Character {
  race: string, subrace: string, name: string
  xp: number, xp_goal: number, xp_progress: number
  class: {name: string, level: number}[]
  level: number
  ab: {name: string, mod: number, adv: number, score: number, comp: Comp[], score_comp: Comp[]}[]
  skill: D20[]
  save: D20[]
  tracker: {label: string, value: number, max?:number}[]
  active: {title: string, text: string, action: Function}[]
  passive: {title: string, text: string, tags: string[]}[]
  info: {
    basic: {
      speed: {value: number, comp: Comp[]}
      size: {value: string, comp: Comp[]}
      [key: string]: any
    }
    prof: {
      [category: string]: {name: string, comp: string[]}[]
    }
    prof_bonus: number
    personality: {
      alignment: string
      background: string
      [key: string]: any
    }
    [category: string]: any
  }
  hp: number, max_hp: number
  initiative: {mod: number, comp: Comp[]}
  equipped: {
    slot: string
    name: string
    melee_attack: D20
    ranged_attack: D20
    melee_dmg: Roll
    ranged_dmg: Roll
  }[]
  armor: string
  ac: number
  equipable: {
    [slot: string]: {label: string, value: string}[]
  }

  item: Item[]

  spell: Spell[]
  slot: {remain: number, max: number}[]
  max_cantrips: number
  max_spells: number
}

/** A base character for scripts to modify. */
export function create_empty_character(data:Data):Character {
  return {
    race: data.race, subrace: data.subrace, name: data.name,
    xp: data.xp, xp_goal: 0, xp_progress: 0,
    class: data.class,
    level: 0,
    ab: [],
    skill: [],
    save: [],
    tracker: [],
    active: [],
    passive: [],
    info: {
      basic: {
        speed: {value: 0, comp: []},
        size: {value: 'undefined', comp: []}
      },
      prof: {},
      prof_bonus: 0,
      personality: {
        alignment: data.alignment,
        background: data.background
      }
    },
    hp: 0, max_hp: 0,
    initiative: {mod: 0, comp: []},
    equipped: [],
    armor: 'undefined',
    ac: 0,
    equipable: {},
    item: [],
    spell: [],
    slot: [],
    max_cantrips: 0,
    max_spells: 0
  }
}