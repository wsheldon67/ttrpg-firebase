<script>
  import SiteNav from './SiteNav.svelte'
  import Menu from '$lib/i/menu.svg'
  import Search from './Search.svelte'

  let isOpen = false
  function toggle() {isOpen = !isOpen}

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
  .siteNav {
    display: flex;
    flex-direction: column;
    position: sticky;
    top: 1.8em;
    width: 100vw;
    max-width: var(--break1);
    background-color: var(--b3);
    z-index: 12;
  }
  a {
    height: 1.7em;
    margin-left: .5em;
    margin-right: .25em;
  }
</style>

<div class='nav'>
  <button on:click={toggle} class='vertCenter'>
    <Menu />
  </button>
  <Search />
  <a href='/'><img src='/favicon-32x32.png' alt='logo'/></a>
</div>
{#if isOpen}
<div class='siteNav' on:click={()=>isOpen = false}>
  <SiteNav />
</div>
{/if}