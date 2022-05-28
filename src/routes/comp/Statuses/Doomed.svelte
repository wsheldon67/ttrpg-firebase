<script lang='ts'>
  import Header from '$lib/c/Header.svelte'
  import Tip from '$lib/c/Tip.svelte'

  export let start: number = 1
  export let hide: boolean = false
</script>
<Header h={1} {start} {hide} title='Doomed'>
  <p>You're in grave danger. Mark 1 <Tip text='fatigue'/> each <Tip text='exchange'/> or every few seconds.</p>
  <Header h={2} {start} title='Examples' hide>
    <ul>
      <li>Drowning</li>
      <li>On Fire</li>
      <li>Being crushed</li>
    </ul>
  </Header>
</Header>