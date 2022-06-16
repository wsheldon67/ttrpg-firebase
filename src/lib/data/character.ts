import { playbook } from "./playbooks"

export interface Data {
  playbook: string
  concept: LongString
  name: string
  trainings: string[]
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
    settings?: any
  }[]
  moments_used: number
  growth: number
  feature_settings: any
  bonuses: {name: string, source: string}[]
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
export const stats:Stat[] = ['Creativity','Focus','Harmony','Passion']

export type Condition = 'Afraid'|'Angry'|'Guilty'|'Insecure'|'Troubled'|'Frustrated'|'Jaded'|'Remorseful'|'Shaken'|'Worried'
export const conditions:Condition[] = ['Afraid','Angry','Guilty','Insecure','Troubled']
export const technique_level = [false, 'Learned', 'Practiced', 'Mastered']
export type Status = 'Empowered'|'Favored'|'Inspired'|'Prepared'|'Doomed'|'Impaired'|'Trapped'|'Stunned'



export const blank:Data = {
  playbook: 'Adamant',
  concept: '',
  name: '',
  trainings: [],
  fighting_style: '',
  backgrounds: [],
  hometown: '',
  demeanors: [],
  history: ['','','','',''],
  look: '',
  boosted_stats: [],
  fatigue: 0,
  conditions: [
    {name: 'Afraid', applied: false},
    {name: 'Angry', applied: false},
    {name: 'Guilty', applied: false},
    {name: 'Insecure', applied: false},
    {name: 'Troubled', applied: false}
  ],
  balance: 0,
  center: 0,
  moves: [],
  techniques: [{name: playbook.Adamant.technique.name, level: 3}],
  connections: ['',''],
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
  growth_advancements: [],
  moments_used: 0,
  growth: 0,
  feature_settings: {},
  bonuses: []
}