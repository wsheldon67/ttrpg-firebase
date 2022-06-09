<script lang='ts'>
  import { signed } from "$lib/pretty";

  export let mod:number
  export let label:string
  export let stat:string
  export let class_name:string = ''

</script>
<button class={class_name ? class_name : 'p'}>
  {stat} {signed(mod)}
</button>