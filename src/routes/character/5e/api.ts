import { abilities, skills } from "./data"

export interface Feat {
  title: string, text: string, tags: string[]
}

export interface API {
  ab: {
    [ability: string]: {
      score:{id: string, value: number}[]
      mod:{id: string, value: number}[]
      adv:{id: string, value: number}[]
    }
  }
  skill: {
    [skill: string]: {
      mod: {id: string, value: number}[]
      adv: {id: string, value: number}[]
      ab: string
    }
  }
  save: {
    [save: string]: {
      mod: {id: string, value: number}[]
      adv: {id: string, value: number}[]
    }
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
function create_base():API {
  const b:any = {}

  b.ab = {}
  abilities.forEach((ab)=>{
    b.ab[ab] = {
      score: [], mod: [], adv: []
    }
  })

  b.skill = {}
  skills.forEach(({name}) => {
    const ab = skills.find((el) => el.name === name).ab
    b.skill[name] = {
      mod: [], adv: [], ab
    }
  })

  b.save = {}
  abilities.forEach((ab)=>{
    b.save[ab] = {
      mod: [], adv: []
    }
  })

  b.info = {
    basic: {size: 'Medium', speed: 30},
    proficiencies: {}
  }

  b.feats = []

  return b
}
export const api = create_base()

// prof: Math.floor((i+1)/4)+2,