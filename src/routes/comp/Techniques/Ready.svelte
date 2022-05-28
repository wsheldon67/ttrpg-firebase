<script lang='ts'>
  import Header from '$lib/c/Header.svelte'
  import Tip from '../atla/_Tip.svelte'

  export let start: number = 1
  export let hide: boolean = false
</script>
<Header h={1} {start} {hide} title='Ready'>
  <p>Mark 1 <Tip text='fatigue'/> to assign or clear a <Tip text='fictionally'/> appropriate <Tip text='status'/> to nearby characters or yourself.</p>
  <Header h={2} {start} title='Examples' hide>
    <ul>
      <li>Spreading an ice sheet on the ground (<Tip text='impaired'/>)</li>
      <li>Creating your own ice weapon (<Tip text='prepared'/>)</li>
      <li>Creating a line of fire between you and the enemy (<Tip text='favored'/>)</li>
    </ul>
  </Header>
</Header>