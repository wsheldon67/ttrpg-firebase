<script context='module'>
  /** @type {import('./__types/[slug]').Load} */
  export async function load({params}) {
    return {
      props: {group: params.group}
    }
  }
</script>
<script lang='ts'>
  import Header from "$lib/c/Header.svelte";
  import { technique } from "$lib/data/techniques";

  export let group:string
  export let start:number = 1
  export let hide:boolean = false
  const blurbs = {}
</script>
<Header h={1} {start} {hide} title={group + ' Techniques'} is_page_title>
  {#if blurbs[group]}
    <p>{blurbs[group]}</p>
  {/if}
  {#each technique[group] as {component}}
    <svelte:component this={component} start={start+1} hide/>
  {/each}
</Header>