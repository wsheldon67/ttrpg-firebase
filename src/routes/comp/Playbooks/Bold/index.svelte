<script lang='ts'>
  import Playbook from '../_Playbook.svelte'
  import { Bold } from '$lib/data/playbooks/Bold'
  import moves from '$lib/data/playbooks/Bold/moves'

  export let start: number = 1
  export let hide: boolean = false
</script>
<Playbook {start} {hide} playbook={Bold} {moves}>

</Playbook>