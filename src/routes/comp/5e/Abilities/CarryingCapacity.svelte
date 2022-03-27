<script lang='ts'>
  import Header from '$lib/c/Header.svelte'

  export let start: number = 1
  export let show: boolean = true

  let strength:number = 10
  let size:string = 'Medium'

  const sizes = {
    Tiny: .5, Small: 1, Medium: 1, Large: 2, Huge: 4, Gargantuan: 8
  }

  $: carrying = strength * sizes[size] * 15
  $: push = strength * sizes[size] * 30
</script>
<Header h={1} {start} {show} title='Carrying Capacity'>
  <label>
    Strength Score:
    <input type='number' bind:value={strength} />
  </label>
  <label>
    Size:
    <select bind:value={size}>
      <option>Tiny</option>
      <option>Small</option>
      <option>Medium</option>
      <option>Large</option>
      <option>Huge</option>
      <option>Gargantuan</option>
    </select>
  </label>
  <ul>
    <li>Your carrying capaicty is {carrying} lbs.</li>
    <li>You can push, drag or lift {push} lbs.</li>
    <li>If you are pushing, dragging or lifting more than {carrying} lbs. your speed is reduced to 5 feet.</li>
  </ul>
</Header>