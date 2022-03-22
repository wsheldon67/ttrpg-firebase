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
<!--
  @component
  A magic header that upgrades/downgrades its level based on its parents.
-->
<button on:click={toggle}>
{#if c===1}
  <h1>{title}</h1>
{:else if c===2}
  <h2>{title}</h2>
{:else if c===3}
  <h3>{title}</h3>
{:else if c===4}
  <h4>{title}</h4>
{:else}
  <h5>{title}</h5>
{/if}
</button>
{#if show}
  <slot />
{/if}