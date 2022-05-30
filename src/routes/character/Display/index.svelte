<script lang='ts'>
  import type { Data } from "$lib/data/character";
  import Header from "$lib/c/Header.svelte";
  import Balance from "./Balance.svelte";
  import Identity from "./Identity.svelte";
  import Stats from "./Stats.svelte";
  import Status from "./Status.svelte";
  import Moves from "./Moves.svelte";
import Techniques from "./Techniques.svelte";
import Growth from "./Growth.svelte";
  
  export let character:Data  = {
    playbook: 'Adamant',
    concept: 'Waterbending former fisherman turned warrior.',
    name: 'Broseph',
    training: 'Waterbending',
    fighting_style: 'wielding weapons made of ice',
    backgrounds: ['Military', 'Privileged'],
    hometown: 'Republic City',
    demeanors: ['Perfectionist', 'Chilly'],
    history: [
      `I was abandoned by my mom as a baby. Thisem ipsem lorem wacher frenwko losee intoernal.`,
      `My first lodestar was my dad, the only person that was there for me. He died.`,
      `My spiritual leader earned my grudging respect by teaching me pragmatism.`,
      `I keep a severed monkey's paw on me at all times to remind me to stay true to myself.`,
      `I was affected by the radiation fallout from the bomb.`
    ],
    look: 'A gnarly, oily tall man.',
    boosted_stats: ['Passion'],
    fatigue: 0,
    conditions: [
      {name: 'Afraid', applied: false},
      {name: 'Angry', applied: false},
      {name: 'Guilty', applied: false},
      {name: 'Insecure', applied: false},
      {name: 'Troubled', applied: false}
    ],
    balance: 0,
    center: 0,
    moves: ['This Was a Victory', "I Don't Hate You"],
    techniques: [{name: 'Pinpoint Aim', level: 2}, {name: 'Protect', level: 1}],
    connections: ['Smithbob','Janebob'],
    positive_statuses: [
      {name: 'Empowered', applied: false},
      {name: 'Favored', applied: false},
      {name: 'Inspired', applied: false},
      {name: 'Prepared', applied: false}
    ],
    negative_statuses: [
      {name: 'Doomed', applied: false},
      {name: 'Impaired', applied: false},
      {name: 'Trapped', applied: false},
      {name: 'Stunned', applied: false}
    ],
    growth_advancements: [],
    growth: 0,
    feature_settings: {}
  }
  let start = 1
</script>
<Identity {character} {start} hide/>
<Stats bind:character={character} {start} hide/>
<Status bind:character={character} {start} hide/>
<Moves {character} {start} hide/>
<Techniques {character} {start} hide/>
<Growth bind:character={character} {start} hide/>