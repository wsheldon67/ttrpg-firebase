<script lang='ts'>
  import { group_names, techniques } from '$lib/data/techniques'
  import Header from '$lib/c/Header.svelte'

  export let start:number = 1
  export let hide:boolean = false

  let groups = group_names.map((name) => {
    const defaults = ['Basic', 'Universal']
    return {name, include: defaults.includes(name)}
  })
  let filters = [
    {name: 'Advance & Attack', applied: false},
    {name: 'Defend & Maneuver', applied: false},
    {name: 'Evade & Observe', applied: false},
    {name: 'Rare', applied: false},
  ]
  let excludes = JSON.parse(JSON.stringify(filters))
  $: filtered_techniques = techniques.filter(({tags}) => {
    return tags.some(tag => groups.some(el => el.name === tag && el.include))
  }).filter(({tags}) => {
    for (let {name, applied} of filters) {
      if (applied) {
        return tags.includes(name)
      } else {
        continue
      }
    }
    return true
  }).filter(({tags}) => {
    for (let {name, applied} of excludes) {
      if (applied) {
        return !tags.includes(name)
      } else {
        continue
      }
    }
    return true
  })
  function include_all() {
    groups = groups.map(({name}) => {
      return {name, include: true}
    })
  }
  function include_none() {
    groups = groups.map(({name}) => {
      return {name, include: false}
    })
  }
</script>
<Header h={1} {start} {hide} title='Filters'>
  <Header h={2} {start} title='Include:'>
    <button class='p' on:click={include_all}>All</button>
    <button class='p' on:click={include_none}>None</button>
    <div class='list'>
      {#each groups as {name, include}}
        <label>
          <input type='checkbox' bind:checked={include}/>
          {name}
        </label>
      {/each}
    </div>
  </Header>
  <Header h={2} {start} title='Only show:' hide>
    <div class='list'>
      {#each filters as {name, applied}}
        <label>
          <input
            type='checkbox'
            bind:checked={applied}
            disabled={excludes.some(el => el.name === name && el.applied)}
          />
          {name}
        </label>
      {/each}
    </div>
  </Header>
  <Header h={2} {start} title='Exclude:' hide>
    <div class='list'>
      {#each excludes as {name, applied}}
        <label>
          <input
            type='checkbox'
            bind:checked={applied}
            disabled={filters.some(el => el.name === name && el.applied)}
          />
          {name}
        </label>
      {/each}
    </div>
  </Header>
</Header>
<Header h={1} {start} {hide} title='Techniques'>
  <p>Results: {filtered_techniques.length}</p>
  <div class='cardtainer'>
    {#each filtered_techniques as {component}}
    <div class='card'>
      <svelte:component this={component} start={2} hide/>
    </div>
    {/each}
  </div>
</Header>