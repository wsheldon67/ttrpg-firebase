<script lang='ts'>
  export let value:number = 0
  export let min
  export let max
  export let optimum
  export let low
  export let high

</script>
  <button
    on:click={()=> value--}
    disabled={value <= 0}
    class='down'
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
    class='up'
  >+</button>
<style>
  button {
    color: var(--at);
  }
  .up {
    background-color: var(--bad);
  }
  .down {
    background-color: var(--good);
  }
  meter {
    width: 90%;
  }
</style>