<script lang='ts'>
  import type { Technique } from "."
  import Tags from "./Tags.svelte"

  export let technique:Technique
  export let start:number = 1
  export let hide:boolean = false

</script>
<svelte:component this={technique.component} {start} {hide}>
  <Tags {technique} />
</svelte:component>