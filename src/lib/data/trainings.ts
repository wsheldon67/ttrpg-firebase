import { techniques, type Technique } from "$lib/data/techniques"
import type { Data } from "./character"

export function applicable_technqiues(character:Data, all:boolean):Technique[] {
  if (all) {
    //@ts-ignore
    return get_other_techniques({...character, techniques})
  } else {
    return techniques.filter(el => [...character.trainings, 'Universal'].includes(el.tags[0]))
  }
}

export function get_other_techniques(char:Data):any {
  return char.techniques.filter(({name}) => {
    // return true if this technique is not in my training.
    return !techniques.find(el => el.name === name).tags.some((tag) => {
      return tag === char.trainings[0] || tag === 'Universal' || tag === 'Playbook'
    })
  })
}

const bendings = ['Airbending', 'Earthbending', 'Firebending', 'Waterbending']
const other = ['Technology', 'Weapons']

export const trainings = [...bendings, ...other]

export function compatible_trainings(trainings:string[]):string[] {
  const bending = find_bending(trainings)
  if (bending) {
    return [bending, ...other].filter(training => !trainings.includes(training))
  } else {
    return [...bendings, ...other].filter(training => !trainings.includes(training))
  }
}
function find_bending(trainigs:string[]):string {
  return bendings.find(bending => trainigs.includes(bending))
}