<script lang='ts'>

    export let traits:string[]
    export let values:string[]
    export let away:string[]
  </script>
  <p>Answer the following questions about your squad:</p>
  <p>Where does your squad call home?</p>
  <p>Which are the most well known traits of your squad? (choose up to 3):</p>
  <ul>
    {#each traits as trait}
      <li>{trait}</li>
    {/each}
  </ul>
  <p>What does your squad value? (choose 2):</p>
  <ul>
    {#each values as value}
      <li>{value}</li>
    {/each}
  </ul>
  <p>Despite being the leader, you chose to travel with your new companions for the time being. Choose where your team is without you:</p>
  <ul>
    {#each away as text}
      <li>{text}</li>
    {/each}
  </ul>