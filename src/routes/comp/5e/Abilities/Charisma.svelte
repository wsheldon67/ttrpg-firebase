<script lang='ts'>
  import Header from '$lib/c/Header.svelte'

  export let start: number = 1
  export let show: boolean = true
</script>
<Header h={1} {start} {show} title='Charisma'>
  <Header h={2} {start} title='Deception'>
    <ul>
      <li>Lie, including lies of omission</li>
      <li>Impersonate or disguise yourself</li>
      <li>Any deceptive actions</li>
    </ul>
  </Header>
  <Header h={2} {start} title='Intimidation'>
    <p>Influence someone using threats, hostile action, or physical violence.</p>
  </Header>
  <Header h={2} {start} title='Performance'>
    <p>Delight an audience with music, dance, acting, storytelling, etc.</p>
  </Header>
  <Header h={2} {start} title='Persuasion'>
    <p>Influence someone using tact, social graces, or good nature.</p>
  </Header>
  <Header h={2} {start} title='Other'>
    <ul>
      <li>Find the best person to talk to for gaining information</li>
      <li>Blend into a crowd and get the sense of key topics of conversation</li>
    </ul>
  </Header>
</Header>