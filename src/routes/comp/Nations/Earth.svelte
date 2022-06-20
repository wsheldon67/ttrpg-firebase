<script lang='ts'>
  import Header from '$lib/c/Header.svelte'

  export let start: number = 1
  export let hide: boolean = false
</script>
<Header h={1} {start} {hide} title='The Earth Kingdom' is_page_title>
  <p>The Earth Kingdom is the largest nation and has the most 
    varied landscape. From scorching deserts, to frozen mountains, 
    to rolling hills, to balmy beaches. How people in the Earth Kingdom contend with its nature is dependent on the region. Larger 
    Earth Kingdom cities are marvels of architecture and technology 
    no matter what era you visit them in. However, many areas suffer 
    from poor infrastructure; the Kingdom is too large—and the 
    leaders often too corrupt—for full oversight and development of 
    poorer regions.</p>
</Header>