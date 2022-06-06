<script lang='ts'>
  import { onMount } from "svelte";

  import Down from '../i/chevron-down.svg'
  import Right from '../i/chevron-right.svg'

  export let h: number
  export let start: number = 1
  export let title: string
  export let show: boolean = undefined
  export let hide: boolean = undefined
  export let is_page_title:boolean = false

  let loaded = !hide

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
  .header {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
  }
  .header > .header_content {
    height: 100%;
    width: max-content;
    display: flex;
    flex-direction: row;
  }
  .header_content :global(button) {
    margin-right: 1px;
  }
  .content {
    max-width: 36rem;
  }
  .header {
    max-width: 36rem;
  }
</style>
<!--
  @component
  A magic header that upgrades/downgrades its level based on its parents.
-->
<svelte:head>
  {#if is_page_title}
    <title>{title}</title>
  {/if}
</svelte:head>
<svelte:element this={'h'+c} class='header'>
  <button on:click={toggle}>
    {#if hide}
      <Right />
    {:else}
      <Down />
    {/if}
    {title}
  </button>
  <div class='header_content'><slot name="header"/></div>
</svelte:element>

{#if loaded}
  <div class:hidden={hide} class={'content panel'+c}>
    <slot />
  </div>
{/if}