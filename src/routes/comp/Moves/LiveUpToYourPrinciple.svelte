<script lang='ts'>
  import Header from '$lib/c/Header.svelte'
  import Tip from '$lib/c/Tip.svelte'

  export let start: number = 1
  export let hide: boolean = false
</script>
<Header h={1} {start} {hide} title='Live Up to Your Principle'>
  <slot slot="header"/>
  <p>When you take action in accordance with the values of a <Tip text='principle'/>, mark 1 <Tip text='fatigue'/> to roll with that principle instead of the stat you would normally roll.</p>
  <ul>
    <li>The roll must have a stat modifier</li>
  </ul>
  <Header h={2} {start} hide title='Examples'>
    <p>Any time you take an action that aligns with one of your playbook's two principles:</p>
    <ul>
      <li>A Hammer offering a hand to another person and declaring they understand what that person is going through and that they want to help</li>
    </ul>
  </Header>
</Header>