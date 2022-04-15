import type { Character } from "./UI"
import type { Data } from "./User"
import type { API } from './api'
import * as races from './races/_all'
import * as classes from './classes/_all'
import { api } from './api'
import { run } from "$lib/prereqs"
import { compile } from "./compile"

export function display(data:Data):Character {
  const built = build(data)
  return compile(built, data)
}

// compile a summary of everything that needs accounted for
export function build(d:Data):API {
  const mods = [...races[d.subrace]]
  d.class.forEach(({name, level})=> {
    mods.push(...classes[name](level))
  })
  const c = JSON.parse(JSON.stringify(api))
  run(mods, c)
  return c
}
