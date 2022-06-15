<script lang='ts'>
  import { get_display_name } from "$lib/display_name";
  import { onMount } from "svelte";
  import { add_note, arrayify } from "$lib/notes"
  import Chat from "./chat.svelte";
  import Roll from "./roll.svelte";

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
</script>
<div class='chat'>
  <div class='messages'>
    {#each messages as note}
      <div class='cont'>
        <p class='user'>
          {#await get_display_name(note.user)}
            Loading...
          {:then name} 
            {name}
          {/await}
        </p>
        <svelte:component this={types[note.type]} {note} />
      </div>
    {/each}
  </div>
  <form on:submit={send_message} on:keyup={keydown}>
    <textarea bind:value={message}></textarea>
  </form>
</div>
<style>
  .chat {
    display: grid;
    grid-template-rows: auto 4em;
  }
  .messages {
    background-color: var(--b2);
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    overflow-y: auto;
  }
  textarea {
    width: 100%;
    height: 100%;
  }
  .user {
    font-size: smaller;
    filter: brightness(.8) saturate(.8);
  }
</style>