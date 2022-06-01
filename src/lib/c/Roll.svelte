<script lang='ts'>
  import { signed } from "$lib/pretty";

  export let mod:number
  export let label:string
  export let stat:string

</script>
<button class='p'>
  {stat} {signed(mod)}
</button>
<style>
  button {
    height: 100%;
    width: 100%;
  }
</style>