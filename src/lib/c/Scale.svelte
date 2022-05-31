<script lang='ts'>
  import { createEventDispatcher } from 'svelte'
  const dispatch = createEventDispatcher()

  export let value:number = 0
  export let min
  export let max
  export let optimum
  export let low
  export let high
  export let reverse:boolean = false

  function add() {
    dispatch('change', 1)
    if (value < Number(max)) {
      value++
      dispatch('input', value)
    }
  }
  function subtract(){
    dispatch('change', -1)
    if (value > Number(min)) {
      value--
      dispatch('input', value)
    }
  }

</script>
  <button
    on:click={subtract}
    class={reverse ? 'good' : 'bad'}
  >-</button>
  <meter {value} {min} {max} {optimum} {low} {high}></meter>
  <button
    on:click={add}
    class={reverse ? 'bad' : 'good'}
  >+</button>
<style>
  button {
    color: var(--at);
  }
  .bad {
    background-color: var(--bad);
  }
  .good {
    background-color: var(--good);
  }
  meter {
    width: 90%;
  }
</style>