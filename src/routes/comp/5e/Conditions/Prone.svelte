<script lang='ts'>
  import Header from '$lib/c/Header.svelte'
  import Tip from '../_Tip.svelte'
  export let start: number = 1
  export let show: boolean = true
</script>
<Header h={1} {start} {show} title='Prone'>
  <ul>
    <li>Only movement option is <Tip text='crawl' path='Movement/ClimbSwimCrawl'/></li>
    <li>Disadvantage on attack rolls</li>
    <li>Flying creatures knocked prone fall.</li>
  </ul>
  <p>Attacks against a prone creature have:</p>
  <table>
    <tr>
      <td><Tip text='Advantage'/> if the attacker within 5 feet.</td>
      <td><Tip text='Disadvantage'/> if the attacker is further than 5 feet.</td>
    </tr>
  </table>
</Header>