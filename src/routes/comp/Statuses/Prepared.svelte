<script lang='ts'>
  import Header from '$lib/c/Header.svelte'
  import Tip from '../atla/_Tip.svelte'

  export let start: number = 1
  export let hide: boolean = false
</script>
<Header h={1} {start} {hide} title='Prepared'>
  <p>You're ready for what's coming. Clear Prepared to take +1 to an appropriate roll or avoid marking a <Tip text='condition'/>.</p>
  <Header h={2} {start} title='Examples' hide>
    <p>You set up resource or devices in advance of needing them:</p>
    <ul>
      <li>A Technologist standing in the crook of a giant slingshot pulling back even further</li>
      <li>A Weapons-user filling their pockets and belts with throwing knives from an armory</li>
      <li>A Waterbender taking a moment to fashion a new icy club</li>
    </ul>
  </Header>
</Header>