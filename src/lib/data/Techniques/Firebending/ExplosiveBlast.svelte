<script lang='ts'>
  import Header from '$lib/c/Header.svelte'
import Tip from '$lib/c/Tip.svelte'
  import type { Data } from '$lib/data/character'
  import type { NPC } from '$lib/data/npc'
  
  export let npc:NPC = undefined
  
  export let character:Data = undefined
  
  export let start: number = 1
  export let hide: boolean = false
</script>
<Header h={1} {start} {hide} title="Explosive Blast">
  <slot slot='header' />
  <p><em>Fire a sparking, spitting beam of focused energy that explodes when it reaches its target.</em></p>
  <p>Your target must either dive for cover or take the blow:</p>
  <table>
    <tr>
      <th>Dive for Cover</th>
      <th>Take the Blow</th>
    </tr>
    <tr>
      <td>Mark 2 <Tip text='fatigue'/> and become <Tip text='impaired'/>. If they are already impaired they cannot dive for cover.</td>
      <td>Mark 4 fatigue</td>
    </tr>
  </table>
</Header>