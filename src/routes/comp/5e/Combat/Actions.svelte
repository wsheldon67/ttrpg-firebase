<script lang='ts'>
  import Header from '$lib/c/Header.svelte'

  export let start: number = 1
  export let show: boolean = true
</script>
<Header h={1} {start} {show} title='Actions'>
  <Header h={2} {start} title='Offensive'>
    <p><a href='/comp/5e/Combat/RangedAttack'>Ranged Attack</a> - make an attack with a ranged weapon</p>
    <p><a href='/comp/5e/Combat/MeleeAttack'>Melee Attack</a> - make an attack with a melee weapon</p>
    <p><a href='/comp/5e/Combat/Grapple'>Grapple</a> - grab or restrain a creature</p>
    <p><a href='/comp/5e/Combat/Shove'>Shove</a> - shove a creature back or prone</p>
    <p><a href='/comp/5e/Magic/CastSpell'>Cast a Spell</a></p>
    <p><a href='/comp/5e/Combat/SimpleActions'>Hide</a> - gain advantage on attacks</p>
    <p><a href='/comp/5e/Combat/SimpleActions'>Help</a> - give someone advantage on an attack</p>
    <p><a href='/comp/5e/Combat/SimpleActions'>Ready</a> - wait to perform an action on a trigger</p>
    <p><a href='/comp/5e/Combat/SimpleActions'>Use an Object</a></p>
  </Header>
  <Header h={2} {start} title='Defensive'>
    <p><a href='/comp/5e/Combat/SimpleActions'>Dash</a> - move twice as fast</p>
    <p><a href='/comp/5e/Combat/SimpleActions'>Disengage</a> - move without provoking an attack of opportunity</p>
    <p><a href='/comp/5e/Combat/SimpleActions'>Dodge</a> - avoid attacks</p>
    <p><a href='/comp/5e/Combat/SimpleActions'>Hide</a> - avoid attacks</p>
    <p><a href='/comp/5e/Combat/SimpleActions'>Help</a> - give someone advantage on a task</p>
    <p><a href='/comp/5e/Magic/CastSpell'>Cast a Spell</a></p>
    <p><a href='/comp/5e/Combat/SimpleActions'>Ready</a> - wait to perform an action on a trigger</p>
    <p><a href='/comp/5e/Combat/SimpleActions'>Use an Object</a></p>
  </Header>
  <Header h={2} {start} title='Neutral'>
    <p><a href='/comp/5e/Combat/SimpleActions'>Search</a> - look for something</p>
    <p><a href='/comp/5e/Combat/SimpleActions'>Help</a> - give someone advantage on a task</p>
    <p><a href='/comp/5e/Magic/CastSpell'>Cast a Spell</a></p>
    <p><a href='/comp/5e/Combat/SimpleActions'>Use an Object</a></p>
    <p><a href='/comp/5e/Combat/SimpleActions'>Ready</a> - wait to perform an action on a trigger</p>
  </Header>
</Header>