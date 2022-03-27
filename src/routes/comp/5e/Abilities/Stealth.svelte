<script lang='ts'>
  import Header from '$lib/c/Header.svelte'

  export let start: number = 1
  export let show: boolean = true
</script>
<Header h={1} {start} {show} title='Stealth'>
  <ul>
    <li>Conceal yourself from enemies</li>
    <li>Slink past guards</li>
    <li>Slip away without being noticed</li>
    <li>Sneak up on someone</li>
  </ul>
</Header>