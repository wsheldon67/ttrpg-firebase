<script lang='ts'>
  import Header from '$lib/c/Header.svelte'
  import Tip from '$lib/c/Tip.svelte'
  import type { Data } from '$lib/data/character'
  
  export let character:Data = undefined
  
  export let start: number = 1
  export let hide: boolean = false
</script>
<Header h={1} {start} {hide} title="Taking Care of Business">
  <p>When you <Tip text='lose your balance'/> in battle, you may instead sacrafice yourself for your companions.</p>
  <ul>
    <li>Your companions have a chance to get away without issue</li>
    <li>You are <Tip text='taken out'/> and possibly captured</li>
  </ul>
  <p>You also choose 1:</p>
  <ul>
    <li>Leave a clue your companions can follow</li>
    <li>Throw your companions one vulnerable object</li>
    <li>Provoke an opponent, <Tip text='shift their balance'/> twice</li>
  </ul>
</Header>