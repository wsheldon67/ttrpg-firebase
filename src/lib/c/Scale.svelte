<script lang='ts'>
  export let value:number = 0
  export let min
  export let max
  export let optimum
  export let low
  export let high
  export let reverse:boolean = false

</script>
  <button
    on:click={()=> value--}
    disabled={value <= 0}
    class={reverse ? 'good' : 'bad'}
  >-</button>
  <meter
    value={value}
    {min}
    {max}
    {optimum}
    {low}
    {high}
  ></meter>
  <button
    on:click={()=> value++}
    disabled={value >= 5}
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