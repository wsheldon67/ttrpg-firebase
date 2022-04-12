<script lang='ts'>
  import Header from '$lib/c/Header.svelte'
  import Tip from '../_Tip.svelte'
  export let start: number = 1
  export let show: boolean = true
</script>
<Header h={1} {start} {show} title='Climbing, Swimming, and Crawling'>
  <ul>
    <li>Distance cost is doubled. (1' = 2')</li>
    <li>Distance cost is tripled in difficult terrain.</li>
    <li>Climbing or swimming may require an <Tip text='Athletics' path='Abilities/Athletics'/> check.</li>
  </ul>
</Header>