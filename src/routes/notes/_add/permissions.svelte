<script lang='ts'>
  import { campaign } from '$lib/campaign'
  import Adder from '$lib/c/Adder.svelte'
  import { get_roles } from './roles'
  import { onMount } from 'svelte'

  export let change_permissions = (event) => {}
  export let note = undefined
  
  let isGM
  onMount(async () => {
    const { isSignedIn } = await import ('$lib/firebase')
    let user = await isSignedIn()
    isGM = user.uid === $campaign.uid
  })

  let promise = get_roles($campaign, note, change_permissions)
</script>
<style>
  .cont {
    display: grid;
    grid-template-areas:
    "head head"
    "evry indv";
    background-color: var(--b2);
  }
  label {
    background-color: var(--b3);
    margin: .0em .25em;
  }
  .individuals :global(button) {
    grid-area: indv;
    background-color: var(--b4);
  }
  .everyone {
    grid-area: evry;
  }
  .head {
    grid-area: head;
    text-align: center;
    margin: .25em;
  }
</style>
<!--svelte-ignore a11y-label-has-associated-control-->
<div class='cont'>
  <p class='head'>Can view this note:</p>
  {#await promise}
    Loading...
  {:then {opts, selected}}
    <label class='everyone'>
      <input
        type='radio'
        value='Everyone'
        name='permissions_style'
        checked={!isGM}
      />
      Everyone
    </label>
    <label class='individuals'>
      <input type='radio' value='Individual' name='permissions_style' checked={isGM}/>
      Individuals:
      <Adder {opts} on:change={change_permissions} {selected}/>
    </label>
  {/await}
  </div>