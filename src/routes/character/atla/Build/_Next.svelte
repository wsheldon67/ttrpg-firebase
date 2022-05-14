<script lang='ts'>
  export let to:string = undefined
  export let from:string = undefined
</script>
<style>
  .next, .back {
    position: absolute;
    bottom: 2.2em;
  }
  .next {
    right: .5em;
  }
  .back {
    left: .5em;
  }
</style>
{#if to}
  <a href={`/character/atla/Build/${to}`} class='p next'>Next</a>
{/if}
{#if from}
  <a href={'/character/atla/Build/' + from} class='p back'>Previous</a>
{/if}