<script lang='ts'>
  import { defaults } from './ObjectViewerDefaults'
  import Collapse from './Collapse.svelte'
  import Tooltip from './Tooltip.svelte'
  import { comp_to_words } from '$lib/pretty';
  // TODO collapse long text, overridable

  export let object:any = {}
  export let key = undefined
  export let attributes = {}
  export let debug = false
  let comboAttr = {...defaults, ...attributes}

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

  function too_long(ob) {
    switch (typeof(ob)) {
      case 'number':
        return false
      case 'string':
        return ob.length > 50
      default:
        return true
    }
  }
</script>
<style>
  .reg {
    display: grid;
    grid-template-columns: 6em max-content;
    padding: .25em;
  }
</style>
{#if debug}
  <button on:click={()=> console.log(object)}>See Object</button>
{/if}

{#if key}
  {#if object.comp}
    <div class='reg'>
      <span>{key}</span>
      <Tooltip tip={comp_to_words(object.comp)}>{object.value}</Tooltip>
    </div>
  {:else if too_long(object)}
  <Collapse label={key}>
    <svelte:self object={object} />
  </Collapse>
  {:else}
    <div class='reg'>
      <span>{key}</span>
      <span>{object}</span>
    </div>
  {/if}
{:else}
  {#if object.comp}
    <Tooltip tip={object.comp.join('; ')} block>{object.name}</Tooltip>
  {:else if Array.isArray(object)}
    {#each object as item}
      <svelte:self object={item} />
    {/each}
  {:else if typeof(object) === 'string' || typeof(object) === 'number'}
    <div>{object}</div>
  {:else if typeof(object) === 'object'}
    {#each arrayify(object) as entry}
      <svelte:self key={entry.key} object={entry.value} />
    {/each}
  {/if}
{/if}