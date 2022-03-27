<script lang='ts'>
  import Header from '$lib/c/Header.svelte'

  export let start: number = 1
  export let show: boolean = true
</script>
<Header h={1} {start} {show} title='Sleight of Hand'>
  <ul>
    <li>Legerdemain or manual trickery</li>
    <li>Planting something on someone else</li>
    <li>Concealing an object your person</li>
    <li>Pick pocketing</li>
  </ul>
</Header>