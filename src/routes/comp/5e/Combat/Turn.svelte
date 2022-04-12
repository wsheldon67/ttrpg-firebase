<script lang='ts'>
  import Header from '$lib/c/Header.svelte'
  import Tip from '../_Tip.svelte'
  import Move from './Move.svelte'
  import Regular from './Actions.svelte'

  export let start: number = 1
  export let show: boolean = true
</script>
<Header h={1} {start} {show} title='Your Turn'>
  <p>During a round, you may make one movement, one action, one reaction, and one bonus action</p>
  <Move start={start+1} show={false}/>
  <Regular start={start+1} show={false} />
  <Header h={2} {start} show={false} title='Bonus Actions'>
    <p>Creatures do not have bonus actions except as specified in their class features, spells, and other abilities.</p>
  </Header>
</Header>