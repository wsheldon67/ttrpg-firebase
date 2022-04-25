<script>
import { signed } from "$lib/pretty";

  export let q = 1
  export let d = 20
  export let m = 0
  export let a = 0

  $: adv = {'-1': 'disadv', '0': '', '1': 'adv'}[a]

  export let label = undefined

  function roll() {
    // TODO send_roll_to_chat(q, d, m, a, label)
    console.log(q,d,m,a,label)
  }
</script>
<style>
  .adv {
    background-color: var(--g);
  }
  .disadv {
    background-color: var(--b);
  }
  button {
    min-width: 5em;
  }
</style>
<button
  class={adv + ' p'}
  on:click={roll}
>
  {q}d{d} {signed(m)}
</button>