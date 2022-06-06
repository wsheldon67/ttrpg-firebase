<script lang='ts'>
  import Header from '$lib/c/Header.svelte'
  import Tip from '$lib/c/Tip.svelte'

  export let start: number = 1
  export let hide: boolean = false
</script>
<Header h={1} {start} {hide} title='Shifting Your Balance' is_page_title>
  <ul>
    <li>Move 1 unless otherwise specified</li>
    <li>Towards center means where your center is currently</li>
    <li>If on center and must move away, you choose the direction</li>
  </ul>
</Header>