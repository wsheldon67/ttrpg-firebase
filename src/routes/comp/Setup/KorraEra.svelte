<script lang='ts'>
  import Header from '$lib/c/Header.svelte'

  export let start: number = 1
  export let hide: boolean = false
</script>
<Header h={1} {start} {hide} title='The Korra Era' is_page_title>
  <p>Covers a period that takes place 
    after the events of the Ruins of the Empire comic 
    trilogy, some time after the end of The Legend of 
    Korra. Play in the Korra Era if you want to deal 
    with the repercussions of imperialism and play in 
    a modernized era.</p>
</Header>