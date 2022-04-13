<script lang='ts'>
  import Tip from '../_Tip.svelte'

  export let text:string
  export let path:string = text

  const common = {
    'advantage': 'Abilities/Advantage',
    'disadvantage': 'Abilities/Disadvantage',
    'incapacitated': 'Conditions/Incapacitated',
    'crit': 'Combat/CriticalHit',
    'unconcious': 'Conditions/Unconcious',
    'prone': 'Conditions/Prone',
  }

  if (common[text.toLowerCase()]) {
    path = common[text.toLowerCase()]
  }

</script>
<Tip {text} {path} system='5e' />