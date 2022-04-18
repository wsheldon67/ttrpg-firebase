export type Ability = 'str'|'dex'|'con'|'int'|'wis'|'cha'
export const abilities = ['str', 'dex', 'con', 'int', 'wis', 'cha']

export const xp = [0,0,300,900,2700,6500,14000,23000,34000,48000,64000,85000,100000,120000,140000,165000,195000,225000,265000,305000,355000, Infinity]

export const skills = [
  {name: 'Athletics', ab: 'str'}, {name: 'Acrobatics', ab: 'dex'},
  {name: 'Sleight of Hand', ab: 'dex'}, {name: 'Stealth', ab: 'dex'},
  {name: 'Arcana', ab: 'int'}, {name: 'History', ab: 'int'},
  {name: 'Investigation', ab: 'int'}, {name: 'Nature', ab: 'int'},
  {name: 'Religion', ab: 'int'}, {name: 'Animal Handling', ab: 'wis'},
  {name: 'Insight', ab: 'wis'}, {name: 'Medicine', ab: 'wis'},
  {name: 'Perception', ab: 'wis'}, {name: 'Survival', ab: 'wis'},
  {name: 'Deception', ab: 'cha'}, {name: 'Intimidation', ab: 'cha'},
  {name: 'Performance', ab: 'cha'}, {name: 'Persuasion', ab: 'cha'}
]

export const sizes = ['Tiny', 'Fine', 'Small', 'Medium', 'Large', 'Giant', 'Gargantuan']