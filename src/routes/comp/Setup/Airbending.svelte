<script lang='ts'>
  import Header from '$lib/c/Header.svelte'

  export let start: number = 1
  export let hide: boolean = false
</script>
<Header h={1} {start} {hide} title='Airbending' is_page_title>
  <p>Use their element to defend themselves and redirect hostile energy.</p>
  <ul>
    <li>Swiping air upwards to deflect incoming arrows</li>
    <li>Pulling air around a weapon to disarm someone</li>
    <li>Decreasing air resistance to outmaneuver a foe</li>
    <li>Employing bursts of wind to control the battlefield</li>
  </ul>
  <Header h={2} {start} title='Fighting Styles' hide>
    <ul>
      <li>Defying gravity (running up  walls, never touching the ground on a cushion of air)</li>
      <li>Summoning imprecise gale force winds</li>
      <li>Throwing miniature tornadoes</li>
      <li>Deployable glider</li>
      <li>Using wind to move at high velocity</li>
    </ul>
  </Header>
</Header>