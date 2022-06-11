<script lang='ts'>
  import { onMount } from 'svelte'
  let value
  
  onMount(() => {

    const vs = [
    `successfully lead your companions in battle`, `give your affection to someone worthy`,
    `start a real fight with a dangerous master`, `do justice to a friend or mentor's guidance`,
    `take down a dangerous threat all on your own`, `openly outperform an authority figure`,
    `save a friend's life`, `get a fancy new outfit`, `earn the respect of an adult you admire`,
    `openly call out a friend's unworthy actions`, `form a strong relationship with a new master`,
    `stop a fight with calm words`, `sacrifice your pride or love for a greater good`,
    `defend an inhabited place from dire threats`, `stand up to someone who doesn't respect you`,
    `make a friend live up to a principle they have neglected`, `show mercy or forgiveness to a dangerous person`,
    `stand up to someone abusing their power`, `tame or befriend a dangerous beast or rare creature`,
    `pull off a ridiculous stunt`
  ]
    let res = ``
    vs.forEach((v) => {
      res += 
`{
  name: \`${v}\`,
  selected: false
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