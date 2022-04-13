<script lang='ts'>
  import Header from '$lib/c/Header.svelte'

  export let start: number = 1
  export let show: boolean = true
</script>
<Header h={1} {start} {show} title='Temporary Hit Points'>
  <p>Awarded by spells and special abilities</p>
  <ul>
    <li>Damage is taken from temporary HP first</li>
    <li>Can exceed max HP</li>
    <li>Cannot heal temporary HP</li>
    <li>Temporary HP from multiple sources are not added</li>
    <li>Does not restore <a href='/comp/5e/Combat/ZeroHP'>conciousness</a>.</li>
    <li>Goes away after a long rest (unless otherwise stated)</li>
  </ul>
</Header>