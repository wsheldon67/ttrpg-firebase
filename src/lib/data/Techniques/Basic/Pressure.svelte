<script lang='ts'>
  import Header from '$lib/c/Header.svelte'
  import Tip from '$lib/c/Tip.svelte'

  export let start: number = 1
  export let hide: boolean = false
</script>
<Header h={1} {start} {hide} title='Pressure'>
  <p>Choose an <Tip text='approach'/> that your foe cannot use in the next <Tip text='exchange'/>.</p>
  <Header h={2} {start} title='Examples' hide>
    <p>You impress or intimidate a foe.</p>
    <ul>
      <li>Back your foe into a corner (evade and observe)</li>
      <li>Keep them constantly moving, unable to find their footing (advance and attack)</li>
      <li>Lay heavy blows on them, so they can barely keep their guard up (defending and maneuvering)</li>
    </ul>
  </Header>
</Header>