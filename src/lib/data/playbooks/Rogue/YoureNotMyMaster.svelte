<script lang='ts'>
  import Header from '$lib/c/Header.svelte'
  import type { Data } from '$lib/data/character'
  import Tip from '$lib/c/Tip.svelte'
  import Roll from '$lib/c/Roll.svelte'
  
  export let character:Data = undefined

  export let start: number = 1
  export let hide: boolean = false
</script>
<Header h={1} {start} {hide} title="You're Not My Master!">
  <div slot='header' class='buttons'>
    {#if character}
      <Roll mod={2} stat='Roll' label='Resist Shifting Your Balance' />
    {/if}
  </div>
  <p>+2 to <Tip text='resist shifting your balance'/>.</p>
</Header>