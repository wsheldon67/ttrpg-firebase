<script>
  export let data
  let state = 'ready'
  let disabled = false
  function click() {
    const new_Rage = {...data.script.Rage}
    new_Rage.active = !new_Rage.active
    // TODO toggle button appearance based on value of data.script.Rage.active
    if (new_Rage.active) {
      new_Rage.rages--
      state = 'active'
    }
    if (new_Rage.rages === 0 && !new_Rage.active) {
      disabled = true
    }
    data.script.Rage = new_Rage
  }
</script>

<button on:click={click} class={state} {disabled}>Rage {data.script.Rage.rages}</button>