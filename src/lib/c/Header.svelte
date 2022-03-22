<script lang='ts'>
  export let h: number
  export let start: number = 1
  export let title: string
  export let show: boolean = true

  let c:number = start + h - 1

  function toggle() {
    show = !show
  }
</script>
<style>
  button {
    width: 100%;
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
{#if c===1}
  <h1><button on:click={toggle}>{title}</button></h1>
{:else if c===2}
  <h2><button on:click={toggle}>{title}</button></h2>
{:else if c===3}
  <h3><button on:click={toggle}>{title}</button></h3>
{:else if c===4}
  <h4><button on:click={toggle}>{title}</button></h4>
{:else}
  <h5><button on:click={toggle}>{title}</button></h5>
{/if}

{#if show}
  <slot />
{/if}