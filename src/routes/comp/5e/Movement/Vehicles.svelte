<script lang='ts'>
  import Header from '$lib/c/Header.svelte'

  export let start: number = 1
  export let show: boolean = true
</script>
<Header h={1} {start} {show} title='Mounts and Vehicles'>
<ul>
  <li>A mounted galloping creature can move twice as fast, but only for an hour.</li>
  <li>Wagons, carriages, and other land vehicles move at a normal pace.</li>
  <li>Water vessels follow <a href='/comp/5e/Equipment/WaterborneVehicles'>their own rules</a>.</li>
  <li>Other special mounts may allow different travel speeds.</li>
</ul>
</Header>