import * as races from './races/_all'
import * as classes from './classes/_all'
import { abilities } from './data'

export interface Feat {
  title: string, text: string, tags: string[], source: string
}
export interface Item {
  name: string
  weight: number
  location: string
  type?: string
  [key: string]: any
}

export interface Data {
  race: string, class: string, level: number, name: string
  items: Item[],
  equipped: {
    [slot: string]: Item
  }
}

export interface Character extends Data {
  ab: {
    [ability: string]: {
      c_score:{id: string, value: number}[]
      c_mod:{id: string, value: number}[]
    }
  }
  levels: {
    prof: number
  }
  info: {
    basic: {
      size: string
      speed: number
      [key: string]: any
    }
    proficiencies: {
      [category: string]: string[]
    }
    [key: string]: any
  }
  feats: Feat[]
}

const base = create_base()
function create_base():Character {
  const b:any = {}

  b.ab = {}
  abilities.forEach((ab)=>{
    b.ab[ab] = {
      c_score: [], c_mod: []
    }
  })

  b.levels = Array(21).fill(true)
  b.levels = b.levels.map((_,i)=>{
    return {
      prof: Math.floor((i+1)/4)+2,
      feats: []
    }
  })

  b.info = {
    basic: {size: 'Medium', speed: 30},
    proficiencies: {}
  }

  b.feats = []

  return b
}

export function character(data:Data):Character {
  const c = {...data, ...base}
  races[c.race](c)
  classes[c.class](c)

  return c
}