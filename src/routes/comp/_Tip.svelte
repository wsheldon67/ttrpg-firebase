<script lang='ts'>
  import Tooltip from '$lib/c/Tooltip.svelte'
import { get_comp_promise } from './get_comp';
  export let text:string
  export let path:string = text
  export let system:string

  let promise = get_comp_promise(system, path)
</script>
{#await promise()}
<Tooltip tip='loading...'>
  {text}
</Tooltip>
{:then res}
<Tooltip tip={res.quick}>
  <a href={`/comp/${system}/${res.link||path}`}>{text}</a>
</Tooltip>
{/await}