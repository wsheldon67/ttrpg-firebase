<script lang='ts'>
  import { get_display_name } from "$lib/display_name";
  import { add_note } from "$lib/notes"
  import Chat from "./chat.svelte";
  import Roll from "./roll.svelte";
  import { name_to_color } from "$lib/name_to_color";
  import { chat } from "$lib/chat";
  import { afterUpdate } from "svelte";

  const types = {
    'chat': Chat, 'roll': Roll
  }

  let message = ''
  $: messages = [...$chat].reverse()
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
  let last_scroll_top:number = 0
  afterUpdate(() => {
    const el = document.querySelector('.messages')
    if (el.scrollTop < last_scroll_top - 30) {return}
    if (document.querySelector('.messages').lastElementChild) {
      document.querySelector('.messages').lastElementChild.scrollIntoView()
    }
    last_scroll_top = el.scrollTop
  })
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
  <form on:submit|preventDefault={send_message} on:keyup={keydown}>
    <button type='submit' class='p'>Send</button>
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
    padding-bottom: .5em;
  }
  textarea {
    width: 100%;
    height: 100%;
  }
  .user {
    font-size: smaller;
    margin-top: 1em;
  }
  button.p {
    width: 100%;
    height: 1.5em;
    display: none;
  }
  form {
    border-top: 1px solid black;
  }
  @media only screen and (max-width: 48em) {
    .chat {
      width: 90vw;
      height: 76vh;
    }
    form {
      height: 25%;
    }
    textarea {
      height: 80%;
    }
    .cont {
      height: max-content;
    }
    button.p {
      display: block;
    }
  }
</style>