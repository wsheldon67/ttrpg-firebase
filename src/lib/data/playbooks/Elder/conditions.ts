import type { Data } from "$lib/data/character";

export function set_alt_conditions(character:Data) {
  if (character.conditions[0].name === 'Afraid') {
    character.conditions = [
      {name: 'Frustrated', applied: false},
      {name: 'Jaded', applied: false},
      {name: 'Remorseful', applied: false},
      {name: 'Shaken', applied: false},
      {name: 'Worried', applied: false}
    ]
  }
}