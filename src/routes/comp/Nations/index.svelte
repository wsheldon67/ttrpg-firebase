<script lang="ts">
  import Header from "$lib/c/Header.svelte";
  import Fire from '$lib/i/Fire.svg?src';
  import Water from '$lib/i/water.svg?src'
  import Air from '$lib/i/air.svg?src'
  import Earth from '$lib/i/earth.svg?src'
  import { locations as data } from './locations'


  export let start: number = 1;
  export let hide: boolean = false;

  let locations = data.map((el, index) => {
    return {...el, selected: false, key_number: index+1, url: false} // url: false removes the links, bc they are not done yet
  })
  //TODO location articles

  const icons = {Fire, Water, Air, Earth}
  $: selected = locations.filter(el => el.selected)
  $: unselected = locations.filter(el => !el.selected)

  function click(index) {
    locations[index].selected = !locations[index].selected
  }
  function select_by_name(name:string, select?:boolean) {
    locations = locations.map((el) => {
      if (el.name === name) {
        return {...el, selected: select}
      } else {
        return {...el}
      }
    })
  }

</script>

<Header h={1} {start} {hide} title="The Four Nations" is_page_title>
  <svg
    viewBox="0 0 781.71429 622.85712"
    version="1.1"
    id="SVGRoot"
    xml:space="preserve"
    xmlns:xlink="http://www.w3.org/1999/xlink"
    xmlns="http://www.w3.org/2000/svg"
  ><defs id="defs22132">
    <radialGradient id="g">
      <stop stop-color="hsla(207, 100%, 50%, 1)" offset="20%"/>
      <stop stop-color="hsla(207,100%,50%, 0.8)" offset="100%"/>
    </radialGradient>
    <filter id="sofGlow" width="300%" height="300%" x="-100%" y="-100%">
      <!-- Use a gaussian blur to create the soft blurriness of the glow -->
      <feGaussianBlur in="thicken" stdDeviation="6" result="blurred" />
    </filter>
  </defs>
  <g
    id="layer1"
    transform="translate(341.12418,342.16537)"
  >
    <image
      width="781.71429"
      height="622.85712"
      preserveAspectRatio="none"
      xlink:href="/atla/world.png"
      id="image138"
      x="-341.12418"
      y="-342.16537"
    />
    {#each locations as {cx, cy, selected}, index}
      <circle {cx} {cy} r="24"
        class:map_selected={selected}
        filter="url(#sofGlow)"
      />
      <circle {cx} {cy} r="12"
        on:click={()=>{click(index)}}
      />
    {/each}
  </g>
  </svg>
  <div class='cardtainer'>
    {#each selected as {name, nation, blurb, key_number, url}}
      <button class='card selected' on:click={()=>{select_by_name(name)}}>
        <h2>{key_number}: {name}<span class={nation || ''}>{@html icons[nation] || ''}</span></h2>
        <p>{blurb || ''}</p>
        {#if url}
          <a href={`/comp/Nations/${url}`}>More Info</a>
        {/if}
      </button>
    {/each}
  </div>
  <div class='cardtainer'>
    {#each unselected as {name, nation, blurb, key_number, url}}
      <button class='card' on:click={()=>{select_by_name(name, true)}}>
        <h2>{key_number}: {name}<span class={nation || ''}>{@html icons[nation] || ''}</span></h2>
        <p>{blurb || ''}</p>
        {#if url}
          <a href={`/comp/Nations/${url}`}>More Info</a>
        {/if}
      </button>
    {/each}
  </div>
</Header>

<style>
  circle {
    fill: rgba(0,0,0,0);
  }
  .map_selected {
    stroke: url(#g);
    stroke-width: 1em;
  }
  svg {
    max-height: 60vh;
  }
  circle {
    cursor: pointer;
  }
  h2 {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
  }
  span > :global(svg) {
    height: 100%;
  }
  span {
    height: 1.6em;
  }
</style>
