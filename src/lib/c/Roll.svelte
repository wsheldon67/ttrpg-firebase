<script lang='ts'>
  import { signed } from "$lib/pretty";
  import { add_note } from "$lib/notes";
  import Die from '$lib/i/die.svg'

  export let mod:number
  export let label:string
  export let stat:string
  export let class_name:string = ''

  async function roll() {
    const d1 = d6()
    const d2 = d6()
    const total = d1 + d2 + mod
    const body = `Rolled a ${total} for ${label}.`
    add_note({
      body, type: 'roll', tags: ['chat'],
      d1, d2, total, mod, stat, label
    })
  }
  function d6():number {
    return Math.floor(Math.random()*6 + 1)
  }
</script>
<button class={class_name ? class_name : 'p'} on:click={roll}>
  <Die />{stat} {signed(mod)}
</button>
<style>
  button > :global(svg) {
    width: 1em;
    position: relative;
    top: .18em;
    padding-right: .25em;
  }
</style>