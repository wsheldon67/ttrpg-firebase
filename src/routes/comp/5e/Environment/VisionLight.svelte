<script lang='ts'>
  import Header from '$lib/c/Header.svelte'
  import BrightLight from './BrightLight.svelte';
  import Darkness from './Darkness.svelte';
  import DimLight from './DimLight.svelte';
  import HeavilyObscured from './HeavilyObscured.svelte'
  import LightlyObscured from './LightlyObscured.svelte';
  export let start: number = 1
  let low = start + 1
</script>
<Header h={1} {start} title='Vision'>
  <LightlyObscured start={low} />
  <HeavilyObscured start={low} />
</Header>
<Header h={1} {start} title='Light'>
  <BrightLight start={low} />
  <DimLight start={low} />
  <Darkness start={low} />
</Header>