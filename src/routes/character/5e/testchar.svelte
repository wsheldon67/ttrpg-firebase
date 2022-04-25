<script lang='ts'>
  import Full from './display/Full.svelte'
  import type {Data} from './User'
  
  let data:Data = {
    race: 'Dwarf',
    subrace: 'Hill_Dwarf',
    name: 'Untitled',
    class: [{name: 'Barbarian', level: 1}],
    xp: 0,
    items: [],
    equipped: {},
    spell: [],
    slot: [],
    hd_rolls: [],
    alignment: 'NG',
    ab_rolls: {
      str: 15, dex: 13, con: 14, int: 12, wis: 10, cha: 8
    },
    background: ``,
    info: {},
    wealth: 50,
    hp: 30,
    tracker: [],
    Dwarf: {
      tool_proficiency: `Smith's Tools`
    },
    script: {
      Barbarian: {
        skill_prof1: 'Animal Handling',
        skill_prof2: 'Athletics',
      }
    }
  }

</script>
<Full {data} />