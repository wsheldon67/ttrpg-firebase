<script lang='ts'>
import Tooltip from "$lib/c/Tooltip.svelte";
import { name_to_color } from "$lib/name_to_color";
import { blank, type NPC } from "$lib/data/npc";
import { createEventDispatcher } from 'svelte'
import Techniques from '../comp/Techniques/index.svelte'
import Header from "$lib/c/Header.svelte";
import { character_names } from "$lib/data/names";
const dispatch = createEventDispatcher()

export let npc:NPC = JSON.parse(JSON.stringify(blank))

let current_condition = ''

const importances = {
  Minor: `A side character of low importance to the story. 3 fatigue, 1 condition, 1 balance, 0 techniques`,
  Major: `Important to the overall story. 5 fatigue, 3 conditions, 2 balance, 1-2 techniques`,
  Master: `Powerful or very important to the story. 10 fatigue, 5 conditions, 3 balance, 2-5 techniques`,
  Legendary: `Important paragons of the whole setting. 15 fatigue, 8 conditions, 4 balance, 3+ techniques`
}
let nation = 'Air Nomad'

function add_condition() {
  npc.conditions = [
    {name: current_condition, applied: false},
    ...npc.conditions
  ]
  current_condition = ''
}
function remove_condition(name:string) {
  npc.conditions = npc.conditions.filter(el => el.name !== name)
}
function save() {
  dispatch('save', npc)
}
function technqiue_click(technique) {
  npc.techniques = [technique.name, ...npc.techniques]
}
function remove_technique(name) {
  npc.techniques = npc.techniques.filter(el => el !== name)
}
function generate_name(){
  const index = Math.floor(Math.random() * character_names[nation].length)
  npc.name = character_names[nation][index]
}
</script>
<button class='p' on:click={save}>Save</button>
<div class='cont'>
<label class='row genname'>
  Generate Name:
  <select>
    <option>Air Nomad</option>
    <option>Water Tribe</option>
    <option>Earth Kingdom</option>
    <option>Fire Nation</option>
    <option>Foggy Swamp</option>
  </select>
  <button class='p' on:click={generate_name}>Go</button>
</label>
<label>
  Name:
  <input bind:value={npc.name}/>
</label>
<label>
  <Tooltip tip="A physical feature, piece of clothing, signature gesture or mannerism, or personality quirk.">Memorable Feature:</Tooltip>
  <input bind:value={npc.feature}/>
</label>
<div>
  <label>
    Importance:
    <select bind:value={npc.importance}>
      <option>Minor</option>
      <option>Major</option>
      <option>Master</option>
      <option>Legendary</option>
    </select>
  </label>
  <p>{importances[npc.importance]}</p>
</div>
<label>
  <Tooltip tip='What motivates the NPC? What do they feel driven to do?'>Drive:</Tooltip>
  <input bind:value={npc.drive}/>
</label>
<label>
  Hopes:
  <input bind:value={npc.hopes}/>
</label>
<label>
  Fears:
  <input bind:value={npc.fears}/>
</label>
<div class='row'>
  <label>
    Max Fatigue:
    <input type='number' bind:value={npc.max_fatigue} />
  </label>
  <label>
    Max Balance:
    <input type='number' bind:value={npc.max_balance} />
  </label>
</div>
<div class='conditions'>
  <form on:submit|preventDefault={add_condition}>
    <label>
      Conditions:
      <input bind:value={current_condition}/>
      <button type='submit' class='p'>Add</button>
    </label>
  </form>
  {#each npc.conditions as {name}}
  <button class='pill' style={'background-color: '+name_to_color(name)} on:click={()=>{remove_condition(name)}}>{name}</button>
  {/each}
</div>
<label>
  <Tooltip tip='NPCs get a single principle.'>Principle:</Tooltip>
  <input bind:value={npc.principle}/>
</label>
</div>
<label>
  Notes:
  <textarea bind:value={npc.notes}></textarea>
</label>
<p>Current Techniques:</p>
<div class='list'>
  {#each npc.techniques as name}
    <button class='pill' style={'background-color: '+name_to_color(name)} on:click={()=>{remove_technique(name)}}>{name}</button>
  {/each}
</div>
<Header h={1} title='Add Techniques' hide>
  <Techniques onClick={technqiue_click} />
</Header>
<style>
  .cont {
    display: flex;
    flex-direction: column;
  }
  @media only screen and (min-width: 48em) {
    .cont {
      display: grid;
      grid-template-columns: auto auto;
      gap: 1em;
    }
  }
  label {
    display: flex;
    flex-direction: column;
  }
  .conditions label {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
  }
  .pill {
    border-radius: .25em;
    margin: .25em;
  }
  .pill:hover {
    text-decoration: line-through;
  }
  .conditions input {
    width: calc(100% - 3.2em);
  }
  .row {
    display: flex;
    flex-direction: row;
    justify-content: space-around;
  }
  .genname {
    height: 1.6em;
  }
</style>