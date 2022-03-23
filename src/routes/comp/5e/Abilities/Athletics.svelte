<script lang='ts'>
  import Header from '$lib/c/Header.svelte'
  export let start: number = 1
</script>
<Header h={1} {start} title='Athletics'>
  <p>A strength check made when attempting certain tasks including:</p>
  <ul>
    <li>Climbing in a difficult situation</li>
    <li>Jumping long distances</li>
    <li>Swimming in a difficult situation</li>
  </ul>
</Header>