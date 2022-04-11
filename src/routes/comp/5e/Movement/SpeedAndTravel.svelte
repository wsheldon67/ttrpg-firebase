<script lang='ts'>
  import Speed from './Speed.svelte'
  import Travel from './Travel.svelte'

  export let start: number = 1
  export let show: boolean = true

</script>
<Speed {start} {show} />
<Travel {start} {show} />