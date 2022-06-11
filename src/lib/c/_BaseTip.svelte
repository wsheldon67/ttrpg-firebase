<script lang='ts'>
  import Tooltip from '$lib/c/Tooltip.svelte'
  import { onMount } from 'svelte'
  import type { Article } from './compendium.type';
  import { get_comp_promise } from './get_comp'
  import Popover from './Popover.svelte'
  export let text:string
  export let path:string = text

  onMount(() => {
    mobile = matchMedia('(hover: none)').matches
  })

  let promise = get_comp_promise('atla', path)
  let mobile:boolean

</script>
{#await promise()}
<Tooltip tip='loading...'>
  {text}
</Tooltip>
{:then res}
{#if mobile}
<span class='popover'>
  <Popover>
    <span slot='button'>{text}</span>
    <p slot='content' class='content'>
      {res.quick} 
      <a href={`/comp/${res.link||path}`}> Go to article</a>
    </p>
  </Popover>
</span>
{:else}
<Tooltip tip={res.quick}>
  <a href={`/comp/${res.link||path}`}>{text}</a>
</Tooltip>
{/if}
{/await}

<style>
  .popover > :global(.tip) {
    padding: .25em;
    background-color: var(--t);
    font-weight: var(--at-weight);
    color: var(--at);
    filter: opacity(96%);
    max-width: 16em;
    width: max-content;
    height: min-content;
  }
  .content {
    background-color: var(--t);
    color: var(--at);
  }
  span {
    text-decoration: underline dotted var(--t) 8%;
    padding: 0em;
    margin: 0em;
  }
  span > :global(button) {
    padding: 0em;
  }
</style>