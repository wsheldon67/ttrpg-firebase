<script lang='ts'>
  import { campaign } from '$lib/campaign'
</script>
<style>
  * {
    background-color: inherit;
    padding: .25em .5em;
    border-bottom: 1px solid var(--b4);
  }
</style>

<a href='/auth/login'>Login</a>
<a href='/notes/add'>Add Note</a>
<a href='/notes/all'>All Notes</a>
<a href='/time/change'>Adjust Time</a>
<a href={`/comp`}>Compendium</a>
<a href={`/character/Character`}>Character Sheet</a>
<a href={`/character/Build`}>New Character</a>
<a href='/campaign'>Switch Campaign</a>