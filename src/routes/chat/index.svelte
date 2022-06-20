<script lang='ts'>
  import { get_display_name } from "$lib/display_name";
  import { onMount } from "svelte";
  import { add_note, arrayify } from "$lib/notes"
  import Chat from "./chat.svelte";
  import Roll from "./roll.svelte";
  import { name_to_color } from "$lib/name_to_color";

  const types = {
    'chat': Chat, 'roll': Roll
  }

  let message = ''
  let messages = []
  function send_message() {
    add_note({
      type: 'chat',
      tags: ['chat'],
      body: message
    })
    message = ''
  }
  function keydown(e) {
    if (e.shiftKey) {return}
    if (e.key === 'Enter') {
      send_message()
    }
  }
  onMount(async () => {
    const { onSnapshot, collection, query, where, orderBy, limit } = await import ('firebase/firestore')
    const { db } = await import ('$lib/firebase')
    const campaign = localStorage.getItem('campaignID')
    console.log(campaign)
    const q = query(
      collection(db, 'notes'),
      where('campaign', '==', campaign),
      where('tags', 'array-contains', 'chat'),
      orderBy('created', 'desc'),
      limit(100)
    )
    return onSnapshot(q, (snapshot) => {
      const forwards = arrayify(snapshot)
      forwards.reverse()
      messages = forwards
    })
  })
  // FIXME prev campaign chat sticks around until page refresh on campaign switch
</script>
<div class='chat'>
  <div class='messages'>
    {#each messages as note, index}
      <div class='cont'>
        {#if messages[index-1]?.user !== note.user}
        {#await get_display_name(note.user)}
          Loading...
        {:then name}
          <p class='user' style={`color: ${name_to_color(name)}; border-bottom: 1px solid ${name_to_color(name)};`}>{name}</p>
        {/await}
        {/if}
        <svelte:component this={types[note.type]} {note} />
      </div>
    {/each}
  </div>
  <form on:submit={send_message} on:keyup={keydown}>
    <textarea bind:value={message} placeholder="Send a message"></textarea>
  </form>
</div>
<style>
  .chat {
    display: flex;
    flex-direction: column;
    height: 100%;
    box-shadow: -.5em 0em .25em -.25em var(--b3);
  }
  .messages {
    flex: 1 1 auto;
    overflow-y: auto;
    min-height: 0px;
    background-color: var(--b3);
    
  }
  textarea {
    width: 100%;
    height: 100%;
  }
  .user {
    font-size: smaller;
    margin-top: 1em;
  }
  @media only screen and (max-width: 48em) {
    .chat {
      width: 90vw;
      height: 80vh;
    }
    form {
      height: 20%;
    }
    .cont {
      height: max-content;
    }
  }
</style>