<script lang='ts'>
  import type { Data } from "$lib/data/character";
  import { playbook } from "$lib/data/playbooks";
  import Header from "$lib/c/Header.svelte";
  import Popover from "$lib/c/Popover.svelte";

  export let character:Data
  export let start:number = 1
  export let hide:boolean = false
  let show:boolean = false

  function do_it() {
    character.moments_used++
  }
</script>
<Header h={1} {start} title='Moment of Balance' {hide}>
  <Popover slot='header' bind:show={show}>
    <span slot='button' class='p'>Do it</span>
    <svelte:fragment slot='content'>
      <p>This will expend one of your very limited uses of this move, removing it from your character sheet. Are you sure?</p>
      <button class='p' on:click={()=>{show = false}}>No, take me back</button>
      <button class='p' on:click={do_it}>Yes, do it</button>
    </svelte:fragment>
  </Popover>
  <p><strong>{playbook[character.playbook].moment_of_balance}</strong></p>
  <p>This is a special and extremely powerful move that resolves an entire scene of conflict.</p>
  <ul>
    <li>This move must be unlocked prior to each use, and can only be unlocked twice.</li>
  </ul>
</Header>