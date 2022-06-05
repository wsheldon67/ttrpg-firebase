import Airbending from "./Airbending"
import Basic from "./Basic"
import Earthbending from "./Earthbending"
import Firebending from "./Firebending"
import Group from "./Group"
import Playbook from "./Playbook"
import Technology from "./Technology"
import Universal from "./Universal"
import Waterbending from "./Waterbending"
import Weapons from "./Weapons"

export interface Technique {
  name: string
  component: any
  tags: string[]
}
// TODO make all techniques static imports
// Sort these into index.ts in their folders
// Replace URL with component
// Fix the Display, Build, and anything else that uses this.
export const techniques: Technique[] = [
  ...Airbending, ...Basic, ...Earthbending, ...Firebending, ...Group, ...Playbook, ...Technology,
  ...Universal, ...Waterbending, ...Weapons
]