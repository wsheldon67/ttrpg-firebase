<script>
  import Popover from '$lib/c/Popover.svelte'
  import Tooltip from '$lib/c/Tooltip.svelte'
  import { createEventDispatcher } from 'svelte'
  const dispatch = createEventDispatcher()

  export let id
  export let tip
  export let show = false

  function click(e) {
    dispatch('click',{id, show: e.detail})
  }
</script>


<div class='descHeight100'>
  <Popover on:click={click} {show}>
    <Tooltip slot='button' placement='right' {tip} block>
      <slot name='icon' />
    </Tooltip>
    <svelte:fragment slot='content'>
      <slot />
    </svelte:fragment>
  </Popover>
</div>