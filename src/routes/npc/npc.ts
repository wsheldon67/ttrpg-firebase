
export interface NPC {
  name:string
  feature:string
  importance:string
  drive:string
  hopes:string
  fears:string
  max_fatigue:number
  fatigue:number
  conditions: {name:string, applied:boolean}[]
  principle:string
  max_balance:number
  balance:number
  notes:string
  techniques:string[]
}

export const blank:NPC = {
  name: '',
  feature: '',
  importance: 'Minor',
  drive: '',
  hopes: '',
  fears: '',
  max_fatigue: 3,
  fatigue: 0,
  conditions: [],
  principle: '',
  max_balance: 1,
  balance: 0,
  notes: '',
  techniques: [],
}