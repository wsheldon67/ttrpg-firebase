<script lang='ts'>
  import Header from '$lib/c/Header.svelte'
  import { backgrounds } from '$lib/data/backgrounds'

  export let start: number = 1
  export let hide: boolean = false
</script>
<Header h={1} {start} {hide} title='Outlaw' is_page_title>
  <slot slot='header' />
  <p>{backgrounds.Outlaw}</p>
  <Header h={2} {start} title='To Ponder' hide>
    <ul>
      <li>Were you born into a lawless life, or did you come into it later on?</li>
      <li>Did you choose the outlaw life, or did the outlaw life choose you?</li>
      <li>Do you work alone or with a gang?</li>
      <li>Whom have you hurt just to stay alive?</li>
    </ul>
  </Header>
  <Header h={2} {start} title='Examples' hide>
    <ul class='list'>
      <li>Flying Opera Company</li>
      <li>Jet and the Freedom Fighters</li>
      <li>Tokuga</li>
    </ul>
  </Header>
</Header>