<script lang='ts'>
  import Header from '$lib/c/Header.svelte'
  import AssessSituation from './AssessSituation.svelte'
  import GuideAndComfort from './GuideAndComfort.svelte'
  import Help from './Help.svelte'
  import Intimidate from './Intimidate.svelte'
  import Plead from './Plead.svelte'
  import PushYourLuck from './PushYourLuck.svelte';
  import RelyOnSkillsAndTraining from './RelyOnSkillsAndTraining.svelte'
  import Trick from './Trick.svelte'

  export let start: number = 1
  export let hide: boolean = false
</script>
<svelte:head><title>Basic Moves</title></svelte:head>
<Header h={1} {start} {hide} title='Basic Moves' is_page_title>
  <slot slot="header"/>
  <AssessSituation start={start+1} hide/>
  <GuideAndComfort start={start+1} hide/>
  <Intimidate start={start+1} hide/>
  <Plead start={start+1} hide/>
  <PushYourLuck start={start+1} hide/>
  <RelyOnSkillsAndTraining start={start+1} hide/>
  <Trick start={start+1} hide/>
  <Help start={start+1} hide/>
</Header>