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
<a href={`/comp/${$campaign.system}`}>Compendium</a>
<a href='/campaign'>Switch Campaign</a>