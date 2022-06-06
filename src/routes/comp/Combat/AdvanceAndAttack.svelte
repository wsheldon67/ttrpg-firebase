<script lang='ts'>
  import Header from '$lib/c/Header.svelte'
  import Tip from '$lib/c/Tip.svelte'

  export let start: number = 1
  export let hide: boolean = false
</script>
<Header h={1} {start} {hide} title='Advance and Attack' is_page_title>
  <Header h={2} {start} title='Examples' hide>
    <ul>
      <li>Throwing punches, fireballs, water whips, etc</li>
      <li>Pressing your opponent and trying to inflict harm</li>
      <li>Sticking close to your foes to ensure you can strike</li>
    </ul>
  </Header>
  <Header h={2} {start} title='Techniques'>
    <ol>
      <li><Tip text='Strike'/></li>
      <li><Tip text='Pressure'/></li>
      <li><Tip text='Smash'/></li>
    </ol>
  </Header>
</Header>