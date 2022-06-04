<script lang='ts'>
  import Header from '$lib/c/Header.svelte'
  import Tip from '$lib/c/Tip.svelte'
  import type { Data } from '$lib/data/character'
  
  export let character:Data = undefined

  export let start: number = 1
  export let hide: boolean = false
</script>
<Header h={1} {start} {hide} title='Help'>
  <p>Mark 1 <Tip text='fatigue'/> to give a companion +1 to a roll they just made.</p>
  <ul>
    <li>Cannot be used in a combat exchange</li>
    <li>Must describe how you are helping</li>
    <li>Each player may spend only 1 fatigue to help a particular action</li>
  </ul>
  <Header h={2} {start} title='Examples' hide>
    <p>Any time you step in and assisst another PC's actions:</p>
    <ul>
      <li>Airbending wind into the sails as your companion steers your ship.</li>
      <li>Putting on a dramatic performance to help sell your companion's con.</li>
    </ul>
  </Header>
</Header>