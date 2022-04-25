import type { Data, Tracker } from './User'

export interface Comp {
  source: string
  operation: string
  value: number
}
export interface ScriptTracker {
  label: string, value: number, max?: number, reset?:Function
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
  name:string, mod: number, adv: number, comp: Comp[], adv_comp:Comp[]
}
export interface Roll extends D20 {
  q: number, d: number
}
export interface Feat {
  name: string, text: any, tags: string[]
}

export interface Character {
  race: string, subrace: string, name: string
  xp: number, xp_goal: number, xp_progress: number
  class: {name: string, level: number}[]
  level: number
  ab: {
    name: string, mod: number, adv: number, score: number,
    comp: Comp[], score_comp: Comp[], adv_comp: Comp[]
  }[]
  skill: D20[]
  save: D20[]
  tracker: Tracker[]
  script_tracker: ScriptTracker[]
  active: any[]
  passive: Feat[]
  prof_bonus: number
  info: {
    Basic: {
      Speed: {value: number, comp: Comp[]}
      Size: {value: string, comp: Comp[]}
      'Hit Dice': string[]
      'Proficiency Bonus': string
      Race: string,
      Class: {[class_name: string]: number}
      [key: string]: any
    }
    Proficiencies: {
      [category: string]: {name: string, comp: string[]}[]
    }
    Personality: {
      Alignment: string
      Background: string
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
  resistance: {name: string, comp: string[]}[]

  item: Item[]

  spell: Spell[]
  slot: {remain: number, max: number}[]
  max_cantrips: number
  max_spells: number
  script: any
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
    script_tracker: [],
    active: [],
    passive: [],
    prof_bonus: 0,
    info: {
      Basic: {
        Speed: {value: 0, comp: []},
        Size: {value: 'undefined', comp: []},
        'Hit Dice': [],
        'Proficiency Bonus': '',
        Race: data.subrace,
        Class: {}
      },
      Proficiencies: {},
      Personality: {
        Alignment: data.alignment,
        Background: data.background
      }
    },
    hp: 0, max_hp: 0,
    initiative: {mod: 0, comp: []},
    equipped: [],
    armor: 'undefined',
    ac: 0,
    equipable: {},
    resistance: [],
    item: [],
    spell: [],
    slot: [],
    max_cantrips: 0,
    max_spells: 0,
    script: {}
  }
}