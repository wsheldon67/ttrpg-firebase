<script context='module'>
  /** @type {import('./__types/[slug]').Load} */
  export async function load({params}) {
    return {
      props: {tag: params.tag}
    }
  }
</script>
<script lang='ts'>
  import { campaign } from "$lib/campaign";
  import { isGM } from "$lib/display_name";
  import { onMount } from "svelte";
  import ByTag from "./_by_tag.svelte";

  export let tag:string
  let gm:boolean

  onMount(isGM($campaign, res => gm = res))
</script>
<a href='/notes'>All Tags</a>
<h1>{tag}</h1>
<ByTag {tag} />
{#if gm}
  <h1>GM Notes</h1>
  <ByTag {tag} {gm} />
{/if}