<script lang='ts'>
  import Header from '$lib/c/Header.svelte'
  import Tip from '$lib/c/Tip.svelte'
  import Playbook from '../_Playbook.svelte'

  import { Adamant } from '$lib/data/playbooks/Adamant'
  import moves from '$lib/data/playbooks/Adamant/moves'

  export let start: number = 1
  export let hide: boolean = false
</script>
<Playbook {start} {hide} playbook={Adamant} {moves}>

  <Header h={2} {start} title='The Lodestar' hide>
    <p>The one person you listen to who can rein you in; often the only person you let past your emotional walls.</p>
    <ul>
      <li>Cannot resist your lodestar when they <Tip text='shift your balance'/> or <Tip text='call you out'/></li>
      <li>//TODO finish lodestar</li>
    </ul>
  </Header>
</Playbook>