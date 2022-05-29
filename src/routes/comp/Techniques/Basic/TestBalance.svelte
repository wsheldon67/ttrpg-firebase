<script lang='ts'>
  import Header from '$lib/c/Header.svelte'
  import Tip from '$lib/c/Tip.svelte'

  export let start: number = 1
  export let hide: boolean = false
</script>
<Header h={1} {start} {hide} title='Test Balance'>
  <p>Mark 1 <Tip text='fatigue'/></p>
  <ul>
    <li>If you know their <Tip text='principle'/>, <Tip text='shift their balance'/> away from center</li>
    <li>If you do not know their principle, learn it.</li>
  </ul>
  <p>You may guess their principle. If you guess wrong, you learn it. If you guess correctly, you shift their balance.</p>
</Header>