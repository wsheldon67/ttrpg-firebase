<script>
  import Search from '$lib/c/Search.svelte'

  let data = [
    {label: 'cow', value: 0},
    {label: 'dog', value: 1},
    {label: 'rat', value: 2}
  ]
  function click(e) {
    console.log(e.detail)
  }
</script>
<Search opts={data} on:click={click}/>