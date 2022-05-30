
export interface Data {
  playbook: string
  concept: LongString
  name: string
  training: string
  fighting_style: string
  backgrounds: string[]
  hometown: string
  demeanors: string[]
  history: LongString[]
  look: LongString
  boosted_stats: Stat[]
  fatigue: number
  conditions: {name: Condition, applied:boolean}[]
  balance: number
  center: number
  moves: string[]
  techniques: {
    name: string
    level: number
  }[]
  connections: [string, string]
  positive_statuses: {name: Status, applied:boolean}[]
  negative_statuses: {name: Status, applied:boolean}[]
  growth_advancements: {
    name: string
    settings: any
  }[]
  growth: number
  feature_settings: any
}

export interface UI {
  stats: { // playbook
    name: Stat
    mod: number
  }[]
  principles: [string, string] // playbook
  moment_of_balance: any //playbook
  feature: any // playbook + decisions
  growth_question: LongString // playbook
}

type LongString = string
export type Stat = 'Creativity'|'Focus'|'Harmony'|'Passion'
export type Condition = 'Afraid'|'Angry'|'Guilty'|'Insecure'|'Troubled'
export const technique_level = [false, 'Learned', 'Practiced', 'Mastered']
export type Status = 'Empowered'|'Favored'|'Inspired'|'Prepared'|'Doomed'|'Impaired'|'Trapped'|'Stunned'