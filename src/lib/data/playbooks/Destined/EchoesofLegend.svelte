<script lang='ts'>
  import Header from '$lib/c/Header.svelte'
  import Tip from '$lib/c/Tip.svelte';
  import type { Data } from '$lib/data/character'
  
  export let character:Data = undefined
  
  export let start: number = 1
  export let hide: boolean = false
</script>
<Header h={1} {start} {hide} title='Echoes of Legend'>
  <slot slot='header'/>
  <p><Tip text='Rely on your skills and training'/> to mirror an act from a legend, myth, or story.</p>
  <ul>
    <li>Treat as if you had rolled a 10+</li>
    <li>The GM <Tip text='shifts your balance'/> twice toward the principle best embodied by the lore and stories.</li>
  </ul>
</Header>