<script>
  import { onMount } from 'svelte'
  import { campaign } from '$lib/campaign'
  import ObjectViewer from '$lib/c/ObjectViewer.svelte'
  import { get_notes_where } from './_all/get';

  let notes = []

  onMount(async () => {
    notes = await get_notes_where($campaign, 'type', '==', 'npc')
  })
</script>
{#each notes as note}
  <ObjectViewer object={note} attributes={{body: undefined}}/>
{/each}