<script lang='ts'>
  import Header from '$lib/c/Header.svelte'
  
  export let start: number = 1
  export let hide: boolean = false
</script>
<Header h={1} {start} {hide} title="Pin A Fly To A Tree">
  
</Header>