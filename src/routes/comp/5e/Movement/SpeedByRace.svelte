<script lang='ts'>
  import Header from '$lib/c/Header.svelte'
import { array_to_words } from '$lib/pretty';
  import Tip from '../_Tip.svelte'

  export let start: number = 1
  export let show: boolean = true
  
  let promise = async()=>{
    const res = await fetch('/comp/5e/Movement/RaceSpeeds')
    return res.json()
  }

  function texify(data:{name:string, speed: number}[], speed:number):string {
    const filtered = data.filter(el => el.speed === speed)
    const list_of_names = filtered.map(el => el.name)
    return  array_to_words(list_of_names)
  }

</script>
<Header h={1} {start} {show} title='Speed by Race'>
  {#await promise()}
    Loading...
  {:then {speeds}}
    <p>25 - {texify(speeds, 25)}</p>
    <p>30 - {texify(speeds, 30)}</p>
  {/await}
</Header>