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
  import { technique, group_names, techniques } from "$lib/data/techniques";
  import Technique from "$lib/data/techniques/Technique.svelte";

  export let group:string
  export let start:number = 1
  export let hide:boolean = false
  $: is_group = group_names.includes(group)
  $: url_technique = techniques.find(el => el.name === group)
  const blurbs = {}
</script>
{#if is_group}
<Header h={1} {start} {hide} title={group + ' Techniques'} is_page_title>
  {#if blurbs[group]}
    <p>{blurbs[group]}</p>
  {/if}
  {#each technique[group] as {component}}
    <svelte:component this={component} start={start+1} hide/>
  {/each}
</Header>
{:else if url_technique}
  <Technique technique={url_technique} />
{:else}
Not Found.
{/if}