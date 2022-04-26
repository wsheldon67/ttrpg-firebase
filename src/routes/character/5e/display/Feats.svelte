<script lang='ts'>
import type { Character } from "../UI"
import ObjectViewer from "$lib/c/ObjectViewer.svelte"
import Tooltip from "$lib/c/Tooltip.svelte"

  export let c:Character

  let filters = [
    {name: 'Combat', enabled: false}, {name: 'Passive', enabled: false}
  ]

  function filter(c:Character, filters) {
    let res = c.passive
    filters.forEach(({name, enabled}) => {
      if (enabled) {
        res = res.filter((el) => {
          return el.tags.includes(name)
        })
      }
    })
    return res
  }
</script>
{#each filters as {name, enabled}, i}
  <label>
    <input type='checkbox' bind:checked={enabled}/>
    {name}
  </label>
{/each}
{#each filter(c, filters) as {name, text}}
  <ObjectViewer object={text} key={name} />
{/each}