<script lang='ts'>
  import Header from '$lib/c/Header.svelte'
  import { signed } from '$lib/pretty'
  import Tip from '../_Tip.svelte'

  type Creativity = number
  type Harmony = number
  type Focus = number
  type Passion = number

  export let start:number
  export let stats:[Creativity, Focus, Harmony, Passion]
</script>
<Header h={2} {start} title='Starting Stats'>
  <table>
    <tr>
      <td><Tip text='Creativity'/> {signed(stats[0])}</td>
      <td><Tip text='Focus'/> {signed(stats[1])}</td>
    </tr>
    <tr>
      <td><Tip text='Harmony'/> {signed(stats[2])}</td>
      <td><Tip text='Passion'/> {signed(stats[3])}</td>
    </tr>
  </table>
</Header>