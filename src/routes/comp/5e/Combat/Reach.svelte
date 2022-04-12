<script lang='ts'>
  import Header from '$lib/c/Header.svelte'

  export let start: number = 1
  export let show: boolean = true

  const sizes:{size:string, space:number}[] = [
    {size: 'Tiny', space: 2.5}, {size: 'Small', space: 5},
    {size: 'Medium', space: 5}, {size: 'Large', space: 10},
    {size: 'Huge', space: 15}, {size: 'Gargantuan', space: 20}
  ]
</script>
<Header h={1} {start} {show} title='Creature Size'>
  <p>The amount of space a creature controls.</p>
  <table>
    <tr>
      <th>Size</th>
      <th>Space Controlled</th>
    </tr>
    {#each sizes as {size, space}}
      <tr>
        <td>{size}</td>
        <td>{space}' x {space}'</td>
      </tr>
    {/each}
  </table>
</Header>