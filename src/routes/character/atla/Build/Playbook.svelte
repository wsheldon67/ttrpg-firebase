<script lang='ts'>
import Tooltip from "$lib/c/Tooltip.svelte"
import Adamant from "../../../comp/atla/Playbooks/Adamant/index.svelte"
import Nav from "./_Nav.svelte";
import Next from "./_Next.svelte"

  const playbooks = [
    {name: 'Adamant', text: `will fix the world, even if it means breaking all the rules.`, motivation: `contend with what "doing right" means in a complicated world.`, selected: 'selected'},
    {name: 'Bold', text: `fights to live up to their self-image and earn others' trust and confidence.`, motivation: `build your reputation and leadership skills.`},
    {name: 'Guardian', text: `defends someone close to them, steadfast and watchful.`, motivation: `be the first to see danger coming and the last line of defense.`}
  ]
</script>
<style>
  .card :global(div) {
    width: 12em;
  }
  .card {
    background-color: var(--b1);
  }
  .cont {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    gap: .5em;
    padding: .5em;
  }
  .selected {
    border: 1px solid var(--bad);
  }
</style>
<Nav />
<Adamant start={1} hide/>
<h1>Playbooks</h1>
<div class='cont'>
{#each playbooks as {name, text, motivation, selected}}
  <button class={'card ' + selected}>
    <Tooltip tip={`Play the ${name} if you want to ${motivation}`} block>
      <h2>{name}</h2>
      <p>The {name} {text}</p>
    </Tooltip>
  </button>
{/each}
</div>
<Next to='Details'/>