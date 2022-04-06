<script lang='ts'>
  import { add } from './current'
  import { campaign } from '$lib/campaign'
  import type { Unit } from '$lib/time/time.type'
  
  export let amt:number = 1
  export let label:string = '1 Second'
  export let unit:Unit = 'second'

  function plus() {
    add(amt, unit, $campaign)
  }
  function minus() {
    add(-amt, unit, $campaign)
  }
</script>

<style>
  .cont {
    display: grid;
    grid-template-columns: 1.5em auto 1.5em;
    min-width: 12em;
    max-width: 36em;
    padding-top: 1px;
  }
  .minus, .plus {
    color: var(--at);
    font-weight: bold;
  }
  .minus {
    background-color: var(--bad);
  }
  .plus {
    background-color: var(--good);
  }
  .label {
    text-align: center;
    background-color: inherit;
  }
</style>
<div class='cont'>
  <button class='minus' color='danger' on:click={minus}>-</button>
  <div class='label'>
    {label}
  </div>
  <button class='plus' color='success' on:click={plus}>+</button>
</div>