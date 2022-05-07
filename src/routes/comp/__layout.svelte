<script lang='ts'>
  import { afterNavigate } from '$app/navigation'
  import { get_comp_promise } from './get_comp'

  let title:string = 'Compendium'

  afterNavigate(async ({to}) => {
    let split = to.pathname.split('/')
    let system = split[2]
    let path = split.slice(3).join('/')
    let promise = get_comp_promise(system, path)
    let res = await promise()
    title = res.title
  })

</script>
<style>
  div {
    background-color: var(--b1);
    padding: .5em;
  }
</style>
<svelte:head>
  <title>{title}</title>
</svelte:head>
<div>
  <slot />
</div>