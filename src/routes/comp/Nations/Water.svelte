<script lang='ts'>
  import Header from '$lib/c/Header.svelte'

  export let start: number = 1
  export let hide: boolean = false
</script>
<Header h={1} {start} {hide} title='The Water Tribes' is_page_title>
  <p>The Water Tribes primarily exist in the frigid North and 
    South poles. Both poles are frozen landscapes where snow, sleet, 
    and freezing temperatures are the norm. Little grows in either 
    pole and the tribespeople hunt, forage, and trade for sustenance. 
    Snowy mountains dot both the North and South and both 
    tribes use the sea as a primary mode of transportation between 
    different towns and villages. The Foggy Swamp tribespeople are 
    an exception to their waterbending cousins, inhabiting a damp, 
    warm swamp within the Earth Kingdom where strong spiritual 
    energy (and water) ties them to the impressive flora in the area.</p>
</Header>