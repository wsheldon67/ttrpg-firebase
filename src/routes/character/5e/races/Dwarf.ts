import type { Character } from "../character"

export function Dwarf(c:Character) {
  c.ab.con.c_score.push({id: 'Dwarf', value: 2})
  c.info.basic.speed = 25
  // TODO your speed is not reduced by wearing heavy armor
}

export function HillDwarf(c:Character) {
  Dwarf(c)
  c.ab.wis.c_score.push({id: 'Hill Dwarf', value: 1})
}