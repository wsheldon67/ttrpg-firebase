<script lang='ts'>
  import Header from '$lib/c/Header.svelte'
import AssessSituation from './AssessSituation.svelte'
import GuideAndComfort from './GuideAndComfort.svelte'

  export let start: number = 1
  export let hide: boolean = false
</script>
<Header h={1} {start} {hide} title='Basic Moves'>
  <AssessSituation start={start+1} hide/>
  <GuideAndComfort start={start+1} />
</Header>