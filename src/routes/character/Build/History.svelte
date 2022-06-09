<script lang='ts'>
import type { Data } from "$lib/data/character";
import { playbook as playbooks } from "$lib/data/playbooks";

  export let character:Data
  $: playbook = playbooks[character.playbook]
  $: full_questions = [
    ...playbook.history_questions, 'Why are you committed to this group or purpose?'
  ]
  $: full_history = get_full_history(playbook.history)

  function get_full_history(playbook_history:string[]):string[] {
    let res = JSON.parse(JSON.stringify(playbook_history))
    res[res.length-1] += ' I am committed to this group and purpose because '
    return res
  }
</script>
<p>Use the template below to answer these questions:</p>
<ul>
{#each full_questions as question}
  <li>{question}</li>
{/each}
</ul>

<p class='history'>
{#each full_history as text, index}
  {text}
  <span class='input-wrap'>
    <span class='width-machine' aria-hidden="true">
      {character.history[index]?.length < 8 ? '12345678' : character.history[index]}
    </span>
    <input bind:value={character.history[index]}/>
  </span>
{/each}
</p>

<style>
  .input-wrap {
    position: relative;
    margin-right: .5em;
  }
  .input-wrap input {
    position: absolute;
    width: 100%;
    left: 0;
  }
  .width-machine {
    /*   Sort of a magic number to add extra space for number spinner */
    padding: 0 .25rem;
  }
  .history {
    line-height: 1.5em;
  }
</style>