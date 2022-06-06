<script lang='ts'>
  import Header from '$lib/c/Header.svelte'
  import Tip from '$lib/c/Tip.svelte'

  export let start: number = 1
  export let hide: boolean = false
</script>
<Header h={1} {start} {hide} title='Inspired' is_page_title>
  <p>You're ready to stand for something. Clear Inspired to <Tip text='shift your balance'/> toward a principle of your choice.</p>
  <Header h={2} {start} title='Examples' hide>
    <p>Your character is bolstered emotionally:</p>
    <ul>
      <li>A friend gives you the confidence to keep fighting onward</li>
      <li>You're invigorated after seeing an ally fighting against impossible odds but winning</li>
      <li>You're inspired by seeing the people you're fighting for</li>
    </ul>
  </Header>
</Header>