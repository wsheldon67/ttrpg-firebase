<script lang='ts'>
  import Tip from '../_Tip.svelte'

  export let text:string
  export let path:string = text

  const common = {
    'condition': '',
    'ongoing': '',
    'tricking': '',
    'pleading':'',
    'calling them out': '',
    'balance': 'Balance'
  }

  if (common[text.toLowerCase()]) {
    path = common[text.toLowerCase()]
  }

</script>
<Tip {text} {path} system='atla' />