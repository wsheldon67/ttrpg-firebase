<script lang='ts'>
  import type { Technique } from ".";
  import Tooltip from "$lib/c/Tooltip.svelte";
  import Sword from '$lib/i/sword.svg?src'
  import Shield from '$lib/i/shield.svg?src'
  import Eye from '$lib/i/eye.svg?src'
  import Star from '$lib/i/star.svg?src'
  import Water from '$lib/i/droplet.svg?src'
  import Air from '$lib/i/wind.svg?src'
  import Fire from '$lib/i/fire2.svg?src'
  import Earth from '$lib/i/earth2.svg?src'
  import Weapons from '$lib/i/weapon2.svg?src'
  import Technology from '$lib/i/settings.svg?src'
  import Group from '$lib/i/group.svg?src'

  export let technique:Technique

  interface Tag {
    text:string
    _class:string
    icon:any
  }

  const tag_data = {
    'Advance & Attack': {_class: 'A', icon: Sword},
    'Defend & Maneuver': {_class: 'D', icon: Shield},
    'Evade & Observe': {_class: 'E', icon: Eye},
    'Rare': {_class: 'Rare', icon: Star},
    'Waterbending': {_class: 'Water', icon: Water},
    'Airbending': {_class: 'Air', icon: Air},
    'Firebending': {_class: 'Fire', icon: Fire},
    'Earthbending': {_class: 'Earth', icon: Earth},
    'Weapons': {_class: 'Weapons', icon: Weapons},
    'Technology': {_class: 'Technology', icon: Technology},
    'Group': {_class: 'Group', icon: Group},
  }

  function get_tags(tags:string[]):Tag[] {
    return tags.filter(tag => tag_data[tag]).map((tag) => {
      return {text: tag, ...tag_data[tag]}
    })
  }
</script>
{#each get_tags(technique.tags) as {text, _class, icon}}
  <Tooltip tip={text} block>
    <div class={'cont '+_class}>{@html icon}</div>
  </Tooltip>
{/each}
<style>
  .cont {
    height: 1.6em;
    border-radius: .5rem;
    padding: .25rem;
  }
  .cont > :global(svg) {
    height: 100%;
    width: auto;
  }
</style>