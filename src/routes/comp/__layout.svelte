<script lang='ts'>
  import { page } from '$app/stores'
  import { get_comp_promise } from './get_comp'

  let split = $page.routeId.split('/')
  let system = split[1]
  let path = split.slice(2).join('/')
  let promise = get_comp_promise(system, path)

</script>
<style>
  div {
    background-color: var(--b1);
    padding: .5em;
  }
</style>
<svelte:head>
  {#await promise() then res}
    <title>{res.title}</title>
  {/await}
</svelte:head>
<div>
  <slot />
</div>