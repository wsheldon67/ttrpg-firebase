<script lang='ts'>
  import Tip from '../_Tip.svelte'

  export let text:string
  export let path:string = text

  const common = {
    'condition': 'Core/Condition',
    'conditions': 'Core/Condition',
    'ongoing': 'Core/Ongoing',
    'forward': 'Core/Forward',
    'tricking': 'Moves/Trick',
    'trick': 'Moves/Trick',
    'pleading':'Moves/Plead',
    'plead': 'Moves/Plead',
    'calling them out': 'Moves/CallSomeoneOut',
    'call someone out': 'Moves/CallSomeoneOut',
    'live up to your principle': 'Moves/CallSomeoneOut',
    'balance': 'Balance',
    'resist shifting your balance': 'Moves/ResistShiftingYourBalance',
    'intimidate': 'Moves/Intimidate',
    'guide and comfort': 'Moves/GuideAndComfort',
    'guiding and comforting': 'Moves/GuideAndComfort',
    'guidance and comfort': 'Moves/GuideAndComfort',
    'assess a situation': 'Moves/AssessSituation',
    'push your luck': 'Moves/PushYourLuck',
    'deny a callout': 'Moves/DenyACallout',
    'rely on your skills or training': 'Moves/RelyOnSkillsAndTraining',
    'skills and training': 'Moves/RelyOnSkillsAndTraining',
    'taken out':'Core/TakenOut',
    'scene': 'Core/Scene',
    'off-balance': 'Statuses/Impaired',
    'fatigue': 'Core/Fatigue',
    'training': 'Setup/Training',
    'backgrounds': 'Setup/Background',
    'background': 'Setup/Background',
    'principle': 'Balance/Principle',
    'shift your balance': 'Balance/Shift',
    'combat exchange': 'Combat',
    'exchange':'Combat',
    'basic': 'Techniques/Basic',
    'mastered': 'Techniques/Mastered',
    'learned': 'Techniques/Learned',
    'practiced': 'Techniques/Practiced',
    'approach': 'Combat/Approach',
    'defend and maneuver': 'Techniques/DefendAndManeuver',
    'advance and attack': 'Techniques/AdvanceAndAttack',
    'evade and observe': 'Techniques/EvadeAndObserve',
    'stance': 'Combat/Stance',
    'loses their balance': 'Moves/LoseYourBalance',
    'lost their balance': 'Moves/LoseYourBalance',
    'status': 'Statuses',
    'techniques': 'Techniques',
    'ready': '',
    'retaliate': '',
    'seize a position': '',
    'strike': '',
    'pressure': '',
    'smash': '',
    'test balance': '',
    'bolster or hinder': '',
    'commit': '',
    'fictionally': '',
  }

  if (common[text.toLowerCase()]) {
    path = common[text.toLowerCase()]
  }

</script>
<Tip {text} {path} system='atla' />