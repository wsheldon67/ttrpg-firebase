
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
  positive_statuses: {name:string, applied:boolean}[]
  negative_statuses: {name: string, applied:boolean}[]
  feature_settings: any
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
  positive_statuses: [
    {name: 'Empowered', applied: false},
    {name: 'Favored', applied: false},
    {name: 'Inspired', applied: false},
    {name: 'Prepared', applied: false}
  ],
  negative_statuses: [
    {name: 'Doomed', applied: false},
    {name: 'Impaired', applied: false},
    {name: 'Trapped', applied: false},
    {name: 'Stunned', applied: false}
  ],
  feature_settings: {},
}