<script lang='ts'>
  import Tip from '../_Tip.svelte'

  export let text:string
  export let path:string = text

  const common = {
    'condition': 'Core/Condition',
    'ongoing': 'Core/Ongoing',
    'forward': 'Core/Forward',
    'tricking': 'Moves/Trick',
    'trick': 'Moves/Trick',
    'pleading':'Moves/Plead',
    'plead': 'Moves/Plead',
    'calling them out': '',
    'call someone out': '',
    'balance': 'Balance',
    'resist shifting your balance': '',
    'intimidate': 'Moves/Intimidate',
    'guide and comfort': 'Moves/GuideAndComfort',
    'guiding and comforting': 'Moves/GuideAndComfort',
    'assess a situation': 'Moves/AssessSituation',
    'push your luck': 'Moves/PushYourLuck',
    'deny a callout': '',
    'rely on your skills or training': 'Moves/RelyOnSkillsAndTraining',
    'skills and training': 'Moves/RelyOnSkillsAndTraining',
    'taken out':'',
    'scene': '',
    'off-balance': '',
    'fatigue': '',
    'training': '',
    'backgrounds': '',
  }

  if (common[text.toLowerCase()]) {
    path = common[text.toLowerCase()]
  }

</script>
<Tip {text} {path} system='atla' />