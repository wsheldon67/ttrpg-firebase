<script lang='ts'>
  import { onMount } from "svelte";

  import Down from '../i/chevron-down.svg'
  import Right from '../i/chevron-right.svg'

  export let h: number
  export let start: number = 1
  export let title: string
  export let show: boolean = undefined
  export let hide: boolean = undefined

  let loaded = !hide

  $: className = hide ? 'hidden' : ''

  onMount(() => {
    if (typeof(show) === 'undefined') {
      show = !hide
    } else {
      console.warn('Show is being depreciated, please switch to hide.')
    }
  })

  let c:number = start + h - 1

  function toggle() {
    show = !show
    hide = !hide
    loaded = true
  }
</script>
<style>
  button {
    width: 100%;
    padding: .25em 0em;
    text-align: left;
    color: inherit;
    font-weight: inherit;
    font-size: inherit;
  }
</style>
<!--
  @component
  A magic header that upgrades/downgrades its level based on its parents.
-->

<svelte:element this={'h'+c}>
  <button on:click={toggle}>
    {#if hide}
      <Right />
    {:else}
      <Down />
    {/if}
    {title}
  </button>
</svelte:element>

{#if loaded}
  <div class={className}>
    <slot />
  </div>
{/if}