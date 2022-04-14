import type { ICharacter } from "../character";

export function Barbarian(c:ICharacter) {
  c.levels[1].feats.push(Rage, UnarmoredDefense)
  c.levels[1].rages = 2
  c.levels[1].rage_dmg = 2
}

function Rage() {
  return {
    title: 'Rage',
    desc: `A rage function`
  }
}
function UnarmoredDefense() {
  return {
    title: 'Unarmored Defense',
    desc: `An unarmored defense function`
  }
}