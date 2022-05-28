<script lang='ts'>
  import Header from '$lib/c/Header.svelte'
  import Tip from '$lib/c/Tip.svelte'

  export let start: number = 1
  export let hide: boolean = false
</script>
<Header h={1} {start} {hide} title="I Don't Hate You">
  <p><Tip text='Guide and comfort'/> someone in an awkward, understated, or idiosyncratic fashion:</p>
  <ul>
    <li>Mark <Tip text='insecure'/> if it is not already marked.</li>
    <li>Roll with <Tip text='Passion'/> instead of <Tip text='Harmony'/>.</li>
  </ul>
</Header>