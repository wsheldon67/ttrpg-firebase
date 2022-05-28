<script lang='ts'>
  import Header from '$lib/c/Header.svelte'
  import Tip from '../_Tip.svelte'

  export let start: number = 1
  export let hide: boolean = false
</script>
<Header h={1} {start} {hide} title='Evade and Observe'>
  <Header h={2} {start} title='Examples' hide>
    <ul>
      <li>Slipping around blows and twisting just out of reach</li>
      <li>Taking in your opponent, watching them learning how they fight</li>
      <li>Exchanging verbal barbs</li>
    </ul>
  </Header>
  <Header h={2} {start} title='Techniques'>
    <ol>
      <li><Tip text='Test Balance'/></li>
      <li><Tip text='Bolster or Hinder'/></li>
      <li><Tip text='Commit'/></li>
    </ol>
  </Header>
</Header>