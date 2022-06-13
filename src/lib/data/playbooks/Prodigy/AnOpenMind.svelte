<script lang='ts'>
  import Header from '$lib/c/Header.svelte'
  import type { Data } from '$lib/data/character'
  import Tip from '$lib/c/Tip.svelte'
  import Techniques from '../../../../routes/character/Build/Techniques.svelte'
  import { get_other_techniques } from '$lib/data/trainings'
  
  export let start: number = 1
  export let hide: boolean = false
  export let character:Data = undefined

</script>
<Header h={1} {start} {hide} title="An Open Mind">
  <div slot='header'>
    <slot />
  </div>
  {#if character}
  <p>Chosen Techniques:</p>
  <ul class='list'>
  {#each get_other_techniques(character) as {name}}
    <li>{name}</li>
  {/each}
  </ul>
  <Header h={2} {start} title={'Choose Techniques (' + get_other_techniques(character).length + '/3)'} hide>
    <Techniques bind:character={character} hide_limit all_trainings/>
  </Header>
  {/if}
  <p>You can learn up to 3 techniques from other skills and trainings, as long as you have a teacher.</p>
  <ul>
    <li>Take +1 on the <Tip text='training move'/> to learn such techniques.</li>
  </ul>
  <p>If you take a technique from a 2nd bending, you must adapt it to your bending.</p>
</Header>