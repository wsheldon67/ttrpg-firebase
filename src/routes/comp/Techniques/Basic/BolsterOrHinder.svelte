<script lang='ts'>
  import Header from '$lib/c/Header.svelte'
  import Tip from '$lib/c/Tip.svelte'

  export let start: number = 1
  export let hide: boolean = false
</script>
<Header h={1} {start} {hide} title='Bolster or Hinder'>
  <p>Apply a <Tip text='status'/> to another character or NPC group.</p>
  <Header h={2} {start} title='Examples' hide>
    <ul>
      <li>Lighting a foe on fire to inflict <Tip text='Doomed'/></li>
      <li>Airbending an ally past the ice below them to remove <Tip text='impaired'/></li>
    </ul>
  </Header>
</Header>