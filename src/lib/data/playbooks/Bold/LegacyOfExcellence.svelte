<script lang='ts'>
  import Growth from "$lib/c/Growth.svelte"
  import Header from "$lib/c/Header.svelte"
  import type { Data } from "$lib/data/character"
  import LegacyCharacter from "./LegacyCharacter.svelte"


  export let character:Data
  export let start:number = 1
  export let hide:boolean = false


  let drives = [
    `successfully lead your companions in battle`, `give your affection to someone worthy`,
    `start a real fight with a dangerous master`, `do justice to a friend or mentor's guidance`,
    `take down a dangerous threat all on your own`, `openly outperform an authority figure`,
    `save a friend's life`, `get a fancy new outfit`, `earn the respect of an adult you admire`,
    `openly call out a friend's unworthy actions`, `form a strong relationship with a new master`,
    `stop a fight with calm words`, `sacrifice your pride or love for a greater good`,
    `defend an inhabited place from dire threats`, `stand up to someone who doesn't respect you`,
    `make a friend live up to a principle they have neglected`, `show mercy or forgiveness to a dangerous person`,
    `stand up to someone abusing their power`, `tame or befriend a dangerous beast or rare creature`,
    `pull off a ridiculous stunt`
  ]

</script>
<Header h={1} {start} {hide} title='Legacy of Excellence'>
  <div slot='header' class='buttons'>
    {#if character}
      <Growth bind:character={character} />
    {/if}
  </div>
  <p>You have deidcated yourself to accomplishing great, exciting deeds and becoming worthy of the trust others place in you.</p>
  {#if character}
      <LegacyCharacter bind:character={character} {drives} {start} />
  {/if}
</Header>
