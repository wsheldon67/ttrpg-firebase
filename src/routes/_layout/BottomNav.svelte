<script lang='ts'>
  import Widget from './widget.svelte'
  import TimeIcon from '$lib/i/clock.svg'
  import NoteIcon from '$lib/i/edit-3.svg'
  import BookIcon from '$lib/i/book-open.svg'
  import BellIcon from '$lib/i/bell.svg'

  import CompSearch from '../comp/Search.svelte'
  import Change from '../time/change.svelte'
  import Note from '../notes/quick.svelte'

  export let small:boolean

  const open = {
    time: false,
    notes: false,
    rules: false
  }
  let lastOpen

  function click(e) {
    const {id, show} = e.detail
    if (lastOpen && show){open[lastOpen] = false}
    if (show){
      lastOpen = id
      open[id] = true
    }
  }
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
  <Widget id='notes' tip='Make a note' on:click={click} show={open.notes}>
    <NoteIcon slot='icon' />
    <Note />
  </Widget>
  <Widget id='rules' tip='Look up a rule' on:click={click} show={open.rules}>
    <BookIcon slot='icon' />
    <CompSearch />
  </Widget>
  {#if small}
    <a href='/chat'><BellIcon /></a>
  {/if}
</nav>