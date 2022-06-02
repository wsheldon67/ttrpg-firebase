import type { Move } from "../moves";
import AWarriorsHeart from "./AWarriorsHeart.svelte";
import FightingLikeDancing from "./FightingLikeDancing.svelte";
import OutOfUniform from "./OutOfUniform.svelte";
import TakingCareOfBusiness from "./TakingCareOfBusiness.svelte";
import UnderstandingMien from "./UnderstandingMien.svelte";

const moves:Move[] = [
  {
    name: 'Understanding Mien',
    component: UnderstandingMien,
    stat: 'Harmony',
    tags: ['Pillar', '+Harmony']
  },{
    name: `A Warrior's Heart`,
    component: AWarriorsHeart,
    stat: 'Principle',
    tags: ['Pillar']
  },{
    name: 'Out of Uniform',
    component: OutOfUniform,
    stat: 'Creativity',
    tags: ['Pillar']
  },{
    name: 'Fighting Like Dancing',
    component: FightingLikeDancing,
    stat: 'Harmony',
    tags: ['Pillar']
  },{
    name: 'Taking Care of Business',
    component: TakingCareOfBusiness,
    stat: '',
    tags: ['Pillar']
  },
]
export default moves