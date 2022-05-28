<script lang='ts'>
  import Header from '$lib/c/Header.svelte'
  import Tip from '$lib/c/Tip.svelte'

  export let start: number = 1
  export let hide: boolean = false
</script>
<Header h={1} {start} {hide} title='Military'>
  <p>You trained to fight as a soldier in a military unit such as a mercenary company, a regional militia, or a state government's standing army.</p>
  <Header h={2} {start} title='To Ponder' hide>
    <ul>
      <li>Are you a solider, sailor, or spy?</li>
      <li>Do you still answer to your commanding officer, or have you gone rogue?</li>
    </ul>
  </Header>
  <Header h={2} {start} title='Examples' hide>
    <ul class='list'>
      <li>Kyoshi Warriors</li>
      <li>Iroh</li>
      <li>Kuvira</li>
    </ul>
  </Header>
</Header>