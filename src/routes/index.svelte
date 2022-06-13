<script lang='ts'>
  import Select from "./character/select.svelte"
</script>
<h1>Welcome to Avatar Legends!</h1>
<div class='top'>
  <a href='/comp'>Explore the Compendium</a>
</div>
<h1>Your Characters</h1>
<Select />
<style>
  div {
    display: flex;
    flex-direction: column;
    gap: .5em;
  }
  h1 {
    padding-left: .25em;
  }
  .top > a {
    margin-left: .25em;
  }
</style>