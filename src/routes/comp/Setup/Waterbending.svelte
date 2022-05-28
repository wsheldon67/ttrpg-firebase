<script lang='ts'>
  import Header from '$lib/c/Header.svelte'
  import Tip from '$lib/c/Tip.svelte'

  export let start: number = 1
  export let hide: boolean = false
</script>
<Header h={1} {start} {hide} title='Waterbending'>
  <p>Manipulate their element with fluidity and grace.</p>
  <ul>
    <li>Weaving water into snapping and slashing whips</li>
    <li>Manipulating one's breath into clouds of freezing ice</li>
    <li>Scultping liquid into a defensive shield</li>
    <li>Healing</li>
  </ul>
  <Header h={2} {start} title='Fighting Styles' hide>
    <ul>
      <li>Keeping feet on ever-moving puddles of water</li>
      <li>Weilding weapons made of ice</li>
      <li>Wearing a suit covered in waterskins</li>
      <li>Rapid shifting of water from liquid to gas to solid</li>
      <li>Jewelry made of ice used as projectiles</li>
    </ul>
  </Header>
</Header>