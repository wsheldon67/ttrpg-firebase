<script lang='ts'>
  import Header from '$lib/c/Header.svelte'

  export let start: number = 1
  export let show: boolean = true
</script>
<Header h={1} {start} {show} title='Movement'>
  <a href='/comp/5e/Movement/SpeedAndTravel'>Speed and Travel</a>
  <a href='/comp/5e/Movement/ClimbSwimCrawl'>Climbing, Swimming, and Crawling</a>
</Header>