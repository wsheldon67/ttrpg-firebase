<script lang='ts'>
  import { signed } from "$lib/pretty";
  import { add_note } from "$lib/notes";
  import Die from '$lib/i/die.svg'

  export let mod:number
  export let label:string
  export let stat:string
  export let class_name:string = ''

  let show_mod = false
  let user_mod = 0
  $: total_mod = mod + Number(user_mod)

  async function roll() {
    const d1 = d6()
    const d2 = d6()
    const total = d1 + d2 + total_mod
    const body = `Rolled a ${total} for ${label}.`
    add_note({
      body, type: 'roll', tags: ['chat'],
      d1, d2, total, mod: total_mod, stat, label
    })
    user_mod = 0
    show_mod = false
  }
  function d6():number {
    return Math.floor(Math.random()*6 + 1)
  }
</script>
  <div class='cont'>
    <button class={class_name ? class_name : 'p'} on:click={roll}>
      <Die /> {stat}
      <button on:click|stopPropagation={()=>{show_mod = !show_mod}} class='mod_button'>{signed(total_mod)}</button>
    </button>
    {#if show_mod}
    <label>
      Mod:
      <input type='number' bind:value={user_mod}/>
    </label>
    {/if}
  </div>
<style>
  button > :global(svg) {
    width: 1em;
    position: relative;
    top: .18em;
    padding-right: .25em;
  }
  .mod_button {
    color: inherit;
    font-weight: inherit;
    padding: 0;
    margin: 0;
  }
  .cont {
    display: flex;
    flex-direction: column;
  }
</style>