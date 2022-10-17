<script lang='ts'>
  import Widget from './Widget.svelte'
  import TimeIcon from '$lib/i/clock.svg'
  import NoteIcon from '$lib/i/edit-3.svg'
  import BookIcon from '$lib/i/book-open.svg'
  import BellIcon from '$lib/i/bell.svg'
  import GMIcon from '$lib/i/command.svg'
  import IdeaIcon from '$lib/i/cloud-lightning.svg'
  import YingYangIcon from '$lib/i/yin-yang.svg'

  import CompSearch from '../comp/Search.svelte'
  import Change from '../time/change.svelte'
  import Note from '../notes/quick.svelte'
  import GMNote from '../notes/gm-add.svelte'
  import { onMount } from 'svelte';
  import { isGM } from '$lib/display_name';
  import { campaign } from '$lib/campaign';
  import Chat from '../chat/index.svelte'
  import SuggestMove from '$lib/data/gm_moves/SuggestMove.svelte'
  import Principles from '../admin/characters.svelte'

  export let small:boolean

  const open = {
    time: false,
    notes: false,
    rules: false,
    gmnote: false,
    chat: false,
    move_idea: false,
    principles: false,
  }
  let lastOpen
  let gm:boolean = false

  function click(e) {
    const {id, show} = e.detail
    if (lastOpen && show){open[lastOpen] = false}
    if (show){
      lastOpen = id
      open[id] = true
    }
  }
  onMount(isGM($campaign, res => gm =res))
</script>
<style>
  nav {
    position: fixed;
    bottom: 0em;
    height: 2em;
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: start;
    gap: .5em;
    background-color: var(--b3);
    z-index: 12;
  }
</style>

<nav>
  <!--Widget id='time' tip='Adjust game time' on:click={click} show={open.time}>
    <TimeIcon slot='icon' />
    <Change />
  </Widget-->
  {#if gm}
    <Widget id='move_idea' tip='Suggest a GM Move' on:click={click} show={open.move_idea}>
      <IdeaIcon slot='icon' />
      <SuggestMove />
    </Widget>
    <Widget id='gmnote' tip='Make a GM only note' on:click={click} show={open.gmnote}>
      <GMIcon slot='icon' />
      <GMNote />
    </Widget>
  {/if}
  <Widget id='notes' tip='Make a note' on:click={click} show={open.notes}>
    <NoteIcon slot='icon' />
    <Note />
  </Widget>
  <Widget id='rules' tip='Look up a rule' on:click={click} show={open.rules}>
    <BookIcon slot='icon' />
    <CompSearch />
  </Widget>
  <Widget id='principles' tip='View player Principles' on:click={click} show={open.principles}>
    <YingYangIcon slot='icon' />
    <Principles />
  </Widget>
  {#if small}
  <Widget id='chat' tip='Open the chat' on:click={click} show={open.chat}>
    <BellIcon slot='icon' />
    <Chat />
  </Widget>
  {/if}
</nav>