<script lang='ts'>
  import Military from '../../../comp/atla/Setup/Military.svelte'
  import Monastic from '../../../comp/atla/Setup/Monastic.svelte'
  import Outlaw from '../../../comp/atla/Setup/Outlaw.svelte'
  import Privileged from '../../../comp/atla/Setup/Privileged.svelte'
  import Urban from '../../../comp/atla/Setup/Urban.svelte'
  import Wilderness from '../../../comp/atla/Setup/Wilderness.svelte'
import Next from './_Next.svelte'

  let options = [Military, Monastic, Outlaw, Privileged, Urban, Wilderness]
</script>
<style>
  .cont {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
  }
</style>
<div class='cont'>
  {#each options as option}
    <button class='card'>
      <svelte:component this={option} start={2}/>
    </button>
  {/each}
</div>
<Next from='Training' to='Touches' />