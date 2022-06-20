<script lang='ts'>
  import Header from '$lib/c/Header.svelte'

  export let start: number = 1
  export let hide: boolean = false
</script>
<Header h={1} {start} {hide} title='The Air Nombads' is_page_title>
  <p>The Air Nomads (or Air Nation in the Korra Era) are a 
    nomadic people, but have four temples located at the edges of 
    the map, each named after the four cardinal directions: north, 
    south, east, and west. Most Air Nomad temples are located in 
    high, rocky locations that are hard to reach for anyone except 
    Airbenders, sky bison, and other flying creatures. Though the 
    temples are built in mountainous areas, they are far from devoid 
    of life, with many pockets of beautiful greenery and ancient trees 
    welcoming any number of local species.</p>
</Header>