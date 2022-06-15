<script>
  import SiteNav from './SiteNav.svelte'
  import Menu from '$lib/i/menu.svg'
  import Search from './Search.svelte'
  import Popover from '$lib/c/Popover.svelte';
  import { beforeNavigate } from '$app/navigation';

  let show = false
  beforeNavigate(() => {
    show = false
  })

</script>
<style>
  .nav {
    display: grid;
    grid-template-columns: min-content auto min-content;
    width: 100%;
    position: fixed;
    top: 0;
    background-color: var(--b4);
    height: 1.8em;
    z-index: 12;
  }
  a {
    height: 1.7em;
    margin-left: .5em;
    margin-right: .25em;
  }
</style>

<div class='nav'>
  <Popover bind:show={show}>
    <Menu slot='button' />
    <SiteNav slot='content' />
  </Popover>
  <Search />
  <a href='/'><img src='/favicon-32x32.png' alt='logo'/></a>
</div>