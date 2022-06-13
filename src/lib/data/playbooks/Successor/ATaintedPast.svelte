<script lang='ts'>
  import FullResult from "$lib/c/FullResult.svelte";
import Header from "$lib/c/Header.svelte"
import Tip from "$lib/c/Tip.svelte";
  import type { Data } from "$lib/data/character";

  export let character:Data
  export let start:number = 1
  export let hide:boolean = false

  const domains = [
    `high society`, `military command`, `arts and entertainment`, `land ownership`,
    `organized crime`, `spiritual authority`, `state politics`, `business and industry`,
    `elite academics`, `vigilante militias`, `media and news`, `vital supply chains`
  ]
  const resources = [
    `obscure or forbidden knowledge`, `introductions and connections`, `servants or muscle`,
    `high technology`, `cold hard cash`, `spiritual artifacts or tomes`
  ]
</script>
<Header h={1} {start} {hide} title='A Tainted Past'>
  <p>You hail from a powerful, infamous lineage - one with an impressive and terrible reputation.</p>
  {#if character}
    <label>
      <select bind:value={character.feature_settings.OldDomain}>
        {#each domains as domain}
          <option>{domain}</option>
        {/each}
      </select>
      is the source of your lineage's power.
    </label>
    <label>
      Your lineage is now beginning to extend their reach into
      <select bind:value={character.feature_settings.NewDomain}>
        {#each domains as domain}
          <option>{domain}</option>
        {/each}
      </select>
    </label>
    <Header h={2} {start} title='Lineage Resources' hide>
      <p>You have access to your family's extensive stores of
        <select bind:value={character.feature_settings.Resource1}>
          {#each resources as resource}
            <option>{resource}</option>
          {/each}
        </select> and
        <select bind:value={character.feature_settings.Resource2}>
          {#each resources as resource}
            <option>{resource}</option>
          {/each}
        </select>
      </p>
      <p>Spend resources during the session to establish a boon you had previously asked for or obtained, that your lineage's unique position and stores could provide.</p>
    </Header>
  {:else}
    <p>Choose one domain that is the source of your lineage's power:</p>
    <ul>
      {#each domains as domain}
        <li>{domain}</li>
      {/each}
    </ul>
    <Header h={2} {start} title='Lineage Resources' hide>
      <p>You have access to your family's extensive stores of two of the following resources:</p>
      <ul>
        {#each resources as resource}
          <li>{resource}</li>
        {/each}
      </ul>
      <p>Spend resources during the session to establish a boon you had previously asked for or obtained, that your lineage's unique position and stores could provide.</p>
    </Header>
  {/if}
  <Header h={2} {start} title='Humble Yourself' hide>
    <p>Politely and obediently humble yourself before a powerful member of your lineage. Roll with Tradition:</p>
    <FullResult>
      <tr>
        <td rowspan="2">They're disastisfied with your display; they're cutting you off until you fulfill some task they set to you.</td>
        <td colspan="2">You earn some credit, <Tip text='hold'/> 3 resources.</td>
      </tr>
      <tr>
        <td>You'll need to promise to fulfill some other obligation of your lineage, or let them <Tip text='shift your balance'/></td>
      </tr>
    </FullResult>
  </Header>
  <Header h={2} {start} title="Raid Your Lineage's Resources" hide>
    <p>Raid your lineage's resources without their consent or knowledge.</p>
    <ul>
      <li>Mark a <Tip text='condition'/></li>
      <li>Roll with Progress</li>
    </ul>
    <FullResult>
      <tr>
        <td rowspan="2">You're caught red-handed by a powerful member of your lineage who saw you coming.</td>
        <td colspan="2"><Tip text='Hold'/> 1 resource</td>
      </tr>
      <tr>
        <td>Choose 1 option</td>
        <td>Choose 2 options</td>
      </tr>
    </FullResult>
    <p>Options</p>
    <ul>
      <li>You obtain an additional 1 resource</li>
      <li>You nab your goodies quietly; your lineage is none the wiser</li>
      <li>You steel yourself for what you're doing; avoid marking a condition</li>
    </ul>
  </Header>
</Header>