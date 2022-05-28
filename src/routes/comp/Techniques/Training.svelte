<script lang='ts'>
  import Header from '$lib/c/Header.svelte'
import { signed } from '$lib/pretty'
import FullResult from '$lib/c/FullResult.svelte'
  import Tip from '$lib/c/Tip.svelte'

  export let start: number = 1
  export let hide: boolean = false

  let balance:boolean = false
  let conditions:boolean = false
  let background:boolean = false
  let reasons:boolean = false
  let easy:boolean = false


  $: mod = (
    +(balance || conditions)
    + +background
    - +!reasons
    - +!easy
  )

</script>
<style>
  .rows {
    display: flex;
    flex-direction: column;
  }
</style>
<Header h={1} {start} {hide} title='The Training Move'>
  <p>Check all that apply:</p>
  <div class='rows'>
  <label>
    <input type='checkbox' bind:checked={balance}/>
    Your <Tip text='balance'/> is in line with your center
  </label>
  <label>
    <input type='checkbox' bind:checked={conditions}/>
    You are free of <Tip text='conditions'/>
  </label>
  <label>
    <input type='checkbox' bind:checked={background}/>
    You and your teacher share at least one <Tip text='background'/>
  </label>
  <label>
    <input type='checkbox' bind:checked={reasons}/>
    Your teacher agrees with your reasons for training
  </label>
  <label>
    <input type='checkbox' bind:checked={easy}/>
    The technique is easy to grasp based on your current training, experience and skills
  </label>
  </div>
  <Header h={2} {start} title={'Roll ' + signed(mod)}>
    <FullResult>
      <tr>
        <td>Undertake a task assigned by your teacher</td>
        <td>Take longer than average, or mark 2 conditions</td>
        <td>-</td>
      </tr>
    </FullResult>
    <p>You then learn the technique.</p>
  </Header>
</Header>