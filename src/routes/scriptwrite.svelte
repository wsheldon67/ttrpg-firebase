<script lang='ts'>
  import { onMount } from 'svelte'
  let value
  
  onMount(() => {

const vs = [`Roguish Charm`, `Slippery Eel-Hound`, `You're Not My Master!`, `Casing the Joint`, `Is That the Best You Got?`]
    let res = ``
    vs.forEach((v) => {
      res += `{
  name: \`${v}\`,
  component: ,
  stat: '',
  tags: ['Rogue']
},`
    })
    value = res
  })
</script>
<textarea {value}></textarea>
<style>
  textarea {
    width: 98%;
    height: 90vh;
  }
</style>