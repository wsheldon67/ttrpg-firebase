<script lang='ts'>
  import Header from '$lib/c/Header.svelte'
  export let start: number = 1
  export let show: boolean = true
</script>
<Header h={1} {start} {show} title='Restrained'>
  <p>For a restrained creature:</p>
  <ul>
    <li>It's speed becomes 0.</li>
    <li>Attacks against it have advantage.</li>
    <li>It has disadvantage on attacks.</li>
    <li>It has disadvantage on Dex saving throws.</li>
  </ul>
</Header>