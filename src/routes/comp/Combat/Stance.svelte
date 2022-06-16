<script lang='ts'>
  import Header from '$lib/c/Header.svelte'
  import FullResult from '$lib/c/FullResult.svelte'
  import Tip from '$lib/c/Tip.svelte'
  import type { Data } from '$lib/data/character'
  import Roll from '$lib/c/Roll.svelte'
  import { condition_is_applied, get_stat_object } from '$lib/data/calc_character'
  import Tooltip from '$lib/c/Tooltip.svelte';

  export let start: number = 1
  export let hide: boolean = false
  export let character:Data = undefined
  $: stats = character ? get_stat_object(character) : null
  $: remorse = character ? condition_is_applied(character, 'Remorseful') : false
  $: remorse_mod = remorse ? -2 : 0
</script>
<Header h={1} {start} {hide} title='The Stance Move' is_page_title>
  <div slot='header' class='buttons'>
    {#if character}
      <Roll mod={stats.Focus + remorse_mod} stat='D&M' label='Defend & Maneuver' class_name='D p'/>
      <Roll mod={stats.Passion + remorse_mod} stat='A&A' label='Advance & Attack' class_name='A p'/>
      <Tooltip tip='Using Creativity'>
        <Roll mod={stats.Creativity + remorse_mod} stat='E&O' label='Evade & Observe' class_name='E p'/>
      </Tooltip>
      <Tooltip tip='Using Harmony'>
        <Roll mod={stats.Harmony + remorse_mod} stat='E&O' label='Evade & Observe' class_name='E p'/>
      </Tooltip>
    {/if}
  </div>
  <p>Roll, based on your <Tip text='approach'/>:</p>
  <ul>
    <li><Tip text='Defend and maneuver'/> = Focus</li>
    <li><Tip text='Advance and attack'/> = Passion</li>
    <li><Tip text='Evade and observe'/> = choice of Creativity or Harmony</li>
  </ul>
  <FullResult>
    <tr>
      <td>Can choose to <Tip text='shift your balance'/> away from center to use 1 <Tip text='basic'/> technique.</td>
      <td>Use 1 basic or <Tip text='mastered'/> technique</td>
      <td>
        Choose one:
        <ul>
          <li>Mark 1 <Tip text='fatigue'/> to use a <Tip text='learned'/> technique</li>
          <li>Use 1 <Tip text='practiced'/> technique</li>
          <li>Use 2 different basic or mastered techniques</li>
        </ul>
      </td>
    </tr>
  </FullResult>
</Header>
