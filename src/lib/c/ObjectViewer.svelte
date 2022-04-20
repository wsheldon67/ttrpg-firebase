<script>
  import { defaults } from './ObjectViewerDefaults'
  import Collapse from './Collapse.svelte'
  import Tooltip from './Tooltip.svelte'
  import { comp_to_words } from '$lib/pretty';
  // TODO collapse long text, overridable

  export let object = {}
  export let attributes = {}
  export let debug = false
  let comboAttr = {...defaults, ...attributes}

  $: entries = arrayify(object)

  function arrayify(object) {
    const res = []
    for (let key in object) {
      if (!comboAttr[key]){
        res.push({key, value: object[key]})
        continue
      }
      if (comboAttr[key] === 'ignore'){continue}
      const value = comboAttr[key](object[key])
      res.push({key, value})
    }
    return res
  }
  function label(entry) {
    if (!Number.isNaN(Number(entry.key))) {
      return entry.value.name || entry.value.label || entry.key
    } else {
      return entry.key
    }
  }
  // Tooltip
</script>
<style>
  .reg {
    display: grid;
    grid-template-columns: 6em max-content;
  }
</style>
{#if debug}
  <button on:click={()=> console.log(object)}>See Object</button>
{/if}

{#each entries as entry}
  {#if entry.value.comp}
    <div class='reg'>
      <span>{entry.key}</span>
      <Tooltip tip={comp_to_words(entry.value.comp)}>{entry.value.value}</Tooltip>
    </div>
  {:else if typeof(entry.value) === 'object'}
    <Collapse label={label(entry)}>
      <svelte:self object={entry.value} />
    </Collapse>
  {:else if typeof(entry.value) === 'function' || typeof(entry.value) === 'undefined'}
    {''}
  {:else if entry.value.length > 50}
    <Collapse label={label(entry)}>
      {entry.value}
    </Collapse>
  {:else}
  <div class='reg'>
    <span>{entry.key}</span>
    <span>{entry.value}</span>
  </div>
  {/if}
{/each}