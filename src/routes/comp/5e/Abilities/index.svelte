<script lang='ts'>
  import Header from '$lib/c/Header.svelte'

  export let start: number = 1
  export let show: boolean = true
  const low = start + 1
</script>
<Header h={1} {start} {show} title='Abilities'>
  <a href='/comp/5e/Abilities/Strength'>Strength</a>
  <a href='/comp/5e/Abilities/Dexterity'>Dexterity</a>
  <a href='/comp/5e/Abilities/Constitution'>Constitution</a>
  <a href='/comp/5e/Abilities/Intelligence'>Intelligence</a>
  <a href='/comp/5e/Abilities/Wisdom'>Wisdom</a>
  <a href='/comp/5e/Abilities/Charisma'>Charisma</a>
  <hr />
  <a href='/comp/5e/Abilities/Advantages'>Advantage and Disadvantage</a>
  <a href='/comp/5e/Abilities/DC'>Difficulty Class</a>
  <a href='/comp/5e/Abilities/Modifiers'>Ability Modifiers</a>
  <a href='/comp/5e/Abilities/Proficiency'>Proficiency</a>
</Header>