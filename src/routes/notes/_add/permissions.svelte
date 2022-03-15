<script lang='ts'>
  import { campaign } from '$lib/campaign'
  import Adder from '$lib/c/Adder.svelte'
  import { onMount } from 'svelte'
  import { get_roles } from './roles'

  let promise = get_roles($campaign)

</script>
<!--svelte-ignore a11y-label-has-associated-control-->
<label>
  Can view this note:
  {#await promise}
    Loading...
  {:then opts}
    <Adder {opts}/>
  {/await}
</label>