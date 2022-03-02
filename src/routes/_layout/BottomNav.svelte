<script>
  import Widget from './widget.svelte'
  import TimeIcon from '$lib/i/clock.svg'
  import NoteIcon from '$lib/i/edit-3.svg'
  import BookIcon from '$lib/i/book-open.svg'
  //import Time from '../time/Time.svelte'
  //import QuickNote from '../notes/_QuickNote.svelte'

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
    position: absolute;
    bottom: 0.25em;
    height: 2em;
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: start;
    gap: .5em;
    background-color: var(--b3);
  }
</style>

<nav>
  <Widget id='time' tip='Adjust game time' on:click={click} show={open.time}>
    <TimeIcon slot='icon' />
    // TODO
  </Widget>
  <Widget id='notes' tip='Make a note' on:click={click} show={open.notes}>
    <NoteIcon slot='icon' />
    // TODO
  </Widget>
  <Widget id='rules' tip='Look up a rule' on:click={click} show={open.rules}>
    <BookIcon slot='icon' />
    //TODO rule lookup
  </Widget>
</nav>