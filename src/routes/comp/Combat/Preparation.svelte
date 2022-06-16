<script lang='ts'>
  import Header from '$lib/c/Header.svelte'
import Tip from '$lib/c/Tip.svelte'
import Engaged from './Engaged.svelte'

  export let start: number = 1
  export let hide: boolean = false
</script>
<Header h={1} {start} {hide} title='Preparation' is_page_title>
  <p>The GM makes sure everyone in the fight is clear on the situation.</p>
  <Header h={2} {start} title='What is the environment like?' hide>
    <ul>
      <li>Describe obvious features of the environment</li>
      <li>Players can <Tip text='assess the situation'/> to discover less obvious features that are tactically relevant.</li>
    </ul>
  </Header>
  <Header h={2} {start} title='Who is present?' hide>
    <ul>
      <li>Who is fighting?</li>
      <li>Who is present, but not fighting?</li>
      <li>Where in the environment are they located?</li>
    </ul>
  </Header>
  <Engaged start={start+1} hide/>
</Header>