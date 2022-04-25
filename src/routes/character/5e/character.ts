import type { Data } from "./User"
import { create_empty_character, type Character } from "./UI"
import { run, type Item } from "$lib/prereqs"

import * as races from './races/_all'
import * as classes from './classes/_all'
import { generic_scripts } from "./generic/generic_scripts"

/** Combine user-defined storable data with game rules to derive a display-ready character. */
export function process_character(data:Data):Character {
  const race_scripts = gather_race_scripts(data)
  const class_scripts = gather_class_scripts(data)
  add_prereq_to_scripts(race_scripts, 'setup')
  add_prereq_to_scripts(class_scripts, 'setup')
  const scripts = [...race_scripts, ...class_scripts, ...generic_scripts]

  const character = create_empty_character(data)

  run(scripts, {character, data})
  return character
}

export type Params = {character:Character, data:Data}

/** A list of scripts that describe the changes races makes to this character. */
function gather_race_scripts(data:Data):Item[] {
  return [...races[data.subrace]]
}

/** A list of scripts that describe the changes levels in classes make to this character. */
function gather_class_scripts(data:Data):Item[] {
  const class_scripts = []

  data.class.forEach(({name, level}) => {
    class_scripts.push(...classes[name](level))
  })

  return class_scripts
}

/** Apply a prerequsite to a list of scripts. */
function add_prereq_to_scripts(scripts:Item[], prereq: string):void {
  scripts.forEach((item) => {
    if (!item.pre) {item.pre = []}
    item.pre.push(prereq)
  })
}

/*
 # State
 * Literally everything is either in the rules, or stored in user data.
    * There is no state besides what is described by the user data.
    * Push a button = change user data.
    * So active, etc, are just lists of components, which modify user data
    * Feats run every time, whether they 'run' is determined by user data

 # Prereq Categories
 * setup - all class, race things run AFTER setup.
*/