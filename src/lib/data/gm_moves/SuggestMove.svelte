<script lang='ts'>
  import { campaign } from '$lib/campaign'
  import { onMount } from 'svelte';
  import { gm_moves, type GM_Move } from '.'

  let available_moves = gm_moves.filter(({tags}) => {
    return tags.some(tag => tag === 'Basic' || tag === $campaign.era)
  })
  let suggestion:GM_Move = {
    text: '', tags: [], cat: '', context: ''
  }

  function suggest() {
    const index = Math.floor(Math.random() * available_moves.length)
    suggestion = available_moves[index]
  }
  onMount(suggest)
</script>
<p>{suggestion.text}</p>
<details>
  <summary>Context</summary>
  <h1>{suggestion.cat}</h1>
  <p>{suggestion.context}</p>
</details>
<button class='p' on:click={suggest}>Suggest</button>