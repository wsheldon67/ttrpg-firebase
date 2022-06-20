<script lang='ts'>
  import Header from '$lib/c/Header.svelte'

  export let start: number = 1
  export let hide: boolean = false
</script>
<Header h={1} {start} {hide} title='The Fire Nation' is_page_title>
  <p>The Fire Nation is a series of islands to the west of the Earth 
    Kingdom with numerous volcanoes. The climate ranges from 
    pleasantly warm to scorching hot with many beautiful tropical 
    beaches to visit on the various islands. Many of the Fire Nation 
    volcanoes between the mountainous regions of the islands are 
    active in every era. The warm weather suits the nation’s Firebenders just fine and over the years inventors have developed 
    many different ships for people to navigate between the islands.</p>
</Header>