  <script lang='ts'>
  import { campaign } from '$lib/campaign';
  import { next_day } from './current'

  export let amt:number = 1
  export let label:string = 'Next Day'

  function next() {
    next_day(amt, $campaign)
  }
</script>
<style>
  button {
    color: var(--at);
    background-color: var(--good);
    padding: .25em 1.25em;
  }
</style>
<button on:click={next}>
  {label}
</button>