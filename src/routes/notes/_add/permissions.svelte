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

  let promise = get_roles($campaign, note)

</script>
<!--svelte-ignore a11y-label-has-associated-control-->
<label>
  Can view this note:
  {#await promise}
    Loading...
  {:then {opts, selected}}
    <label>
      Everyone
      <input
        type='radio'
        value='Everyone'
        name='permissions_style'
        checked={!isGM}
      />
    </label>
    <label>
      Individuals
      <input type='radio' value='Individual' name='permissions_style' checked={isGM}/>
    </label>
    <Adder {opts} on:change={change_permissions} {selected}/>
  {/await}
</label>