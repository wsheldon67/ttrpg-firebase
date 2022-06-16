<script lang='ts'>
  import Header from '$lib/c/Header.svelte'
import Advancement from './Advancement.svelte'

  export let start: number = 1
  export let hide: boolean = false
</script>
<Header h={1} {start} {hide} title='Growth' is_page_title>
  <p>At the end of each session, each player answers the following questions:</p>
  <ul>
    <li>Did you learn something challenging, exciting, or complicated about the world?</li>
    <li>Did you stop a dangerous threat or solve a community problem?</li>
    <li>Did you guide a character towards balance or end the session at your center?</li>
    <li>(Each playbook has a unique 4th growth question)</li>
  </ul>
  <p>For each "yes", mark growth. When you have marked 4 growth, take an advancement.</p>
  <Advancement start={start+1} />
</Header>