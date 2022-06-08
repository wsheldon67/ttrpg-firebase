import { techniques, type Technique } from "$lib/data/techniques"
import type { Data } from "./character"

export function applicable_technqiues(character:Data, all:boolean):Technique[] {
  if (all) {
    const compatible = compatible_trainings(character.trainings)
    return techniques.filter(el => compatible.includes(el.tags[0]))
  } else {
    return techniques.filter(el => [...character.trainings, 'Universal'].includes(el.tags[0]))
  }
}

const bendings = ['Airbending', 'Earthbending', 'Firebending', 'Waterbending']
const other = ['Universal', 'Technology', 'Weapons']

export function compatible_trainings(trainings:string[]):string[] {
  const bending = find_bending(trainings)
  if (bending) {
    return [bending, ...other]
  } else {
    return [...bendings, ...other]
  }
}
function find_bending(trainigs:string[]):string {
  return bendings.find(bending => trainigs.includes(bending))
}