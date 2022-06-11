import type { Article } from './compendium.type'

export function quickie(text:string):Article {
  switch (text) {
    case 'Core/Fatigue':
      return {
        path: 'Core/Fatigue',
        quick: `PCs have 5; When out avoid more if able, mark a condition if unable`,
        description: `A representation of getting physically, mentally, or emotionally tired, stressed, and worn down.`,
        relevance: 0,
        system: 'atla',
        tags: [],
        title: 'Fatigue',
      }
    case 'Core/Condition':
      return {
        description: `An emotional state which leaves you uncomfortable and vulnerable.`,
        quick: `Causes penalties to moves; Takes unproductive actions to clear; Too many = taken out`,
        relevance: 6,
        system: 'atla',
        tags: ['afraid', 'angry', 'guilty', 'insecure', 'troubled'],
        title: 'Conditions',
        path: 'Core/Condition'
      }
    case 'Balance/Shift':
      return {
        path: 'Balance/Shift',
        description: `Shift your balance towards or away from either principle or your center.`,
        link: 'Balance',
        quick: `Shift your balance track; by 1 unless otherwise specified`,
        relevance: 0,
        system: 'atla',
        tags: [],
        title: 'Shifting Balance'
      }
    case 'Statuses':
      return {
        path: 'Statuses',
        description: `Environmental effects that aid or hinder a character, especially during a combat exchange.`,
        quick: `Doomed, Impaired, Trapped, Stunned, Empowered, Favored, Inspired, Prepared`,
        relevance: 0,
        system: 'atla',
        tags: [],
        title: 'Statuses'
      }
    case 'Core/Creativity':
      return {
        path: 'Core/Creativity',
        description: `Measures your ability to think quickly and unconventionally, to come up with surprising plans or breathtaking art.`,
        quick: `Roll 2d6 + your Creativity modifier`,
        relevance: 0,
        system: 'atla',
        tags: [],
        title: 'Creativity',
        link: 'Stats'
      }
    case 'Core/Passion':
      return {
        path: 'Core/Passion',
        description: `measures the intensity of your character's emotions and drive, and how good they are at listening to their feelings and turning them into decisive action.`,
        quick: `Roll 2d6 + your Passion modifier`,
        relevance: 0,
        system: 'atla',
        tags: [],
        title: 'Passion',
        link: 'Stats'
      }
    case 'Core/Focus':
      return {
        path: 'Core/Focus',
        description: `Measures your character's ability to perform difficult or precise tasks under pressure, to shut out distractions and work in a patient, disciplined, or stubborn manner. `,
        quick: `Roll 2d6 + your Focus modifier`,
        relevance: 0,
        system: 'atla',
        tags: [],
        title: 'Focus',
        link: 'Stats'
      }
    case 'Core/Harmony':
      return {
        path: 'Core/Harmony',
        description: `measures your character’s social sensitivity, 
        care, and empathy, their aptitude at taking into 
        account the views and feelings of others and acting 
        in an honest and compassionate way.`,
        quick: `Roll 226 + your Harmony modifier`,
        relevance: 0,
        system: 'atla',
        tags: [],
        title: 'Harmony',
        link: 'Stats'
      }
    default:
      return null
  }
}