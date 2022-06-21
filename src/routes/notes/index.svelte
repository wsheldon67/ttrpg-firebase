<script lang='ts'>
  import { campaign } from "$lib/campaign"
  import { name_to_color } from "$lib/name_to_color";

  $: tag_cats = tag_cats_as_array($campaign)
  function tag_cats_as_array(camp):{name:string, tags:string[]}[] {
    let res = []
    let untagged = camp.user_tags ? [...camp.user_tags] : []
    for (let cat in camp.tag_cats) {
      const tags = camp.tag_cats[cat]
      res.push({name: cat, tags})
      untagged = untagged.filter(tag => !tags.includes(tag))
    }
    return [
      {name: 'No Category', tags: untagged},
      ...res
    ]
  }

  async function add_tag_cat(e) {
    const input = e.target.elements.cat
    const cat = input.value
    const { doc, updateDoc } = await import ('firebase/firestore')
    const { db } = await import ('$lib/firebase')
    const ref = doc(db, 'campaigns', localStorage.getItem('campaignID'))
    await updateDoc(ref, {
      [`tag_cats.${cat}`]: []
    })
    input.value = ''
  }
  
  async function move_to_cat(e, cat:string) {
    const input = e.target.elements.tag
    const tag = input.value
    const { doc, updateDoc, arrayUnion } = await import ('firebase/firestore')
    const { db } = await import ('$lib/firebase')
    const ref = doc(db, 'campaigns', localStorage.getItem('campaignID'))
    await updateDoc(ref, {
      ['tag_cats.'+cat]: arrayUnion(tag)
    })
  }
  async function remove_from_cat(tag:string, cat:string) {
    const { doc, updateDoc, arrayRemove } = await import ('firebase/firestore')
    const { db } = await import ('$lib/firebase')
    const ref = doc(db, 'campaigns', localStorage.getItem('campaignID'))
    await updateDoc(ref, {
      ['tag_cats.'+cat]: arrayRemove(tag)
    })
  }
</script>
<a href='/notes/all' class='p'>View All Notes</a>
{#each tag_cats as {name, tags}}
  <h1>{name}
    {#if name !== 'No Category'}
      <form on:submit|preventDefault={(e) => move_to_cat(e, name)}>
        <label>
          Add Tag to {name}:
          <select name='tag'>
            {#each $campaign.user_tags.filter(tag => !tags.includes(tag)) as unused_tag}
              <option>{unused_tag}</option>
            {/each}
          </select>
          <button class='p'>+</button>
        </label>
      </form>
    {/if}
  </h1>
  {#each tags as tag}
    <div class='tag' style={`background-color: ${name_to_color(tag)}`}>
      {#if name !== 'No Category'}
        <button on:click={()=>{remove_from_cat(tag, name)}}>X</button>
      {/if}
      <a href={`/notes/tag-${tag}`}>{tag}</a>
    </div>
  {/each}
{/each}
<hr />
<form class='new' on:submit|preventDefault={add_tag_cat}>
  <label>
    New Tag Category:
    <input name='cat'/>
    <button class='p'>+</button>
  </label>
</form>
<style>
  h1 {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    margin-top: 1em;
  }
  .tag {
    width: max-content;
    padding: .25em;
    margin: .25em;
    border-radius: .25em;
  }
  .tag > * {
    color: var(--at);
    font-weight: var(--at-weight);
  }
  .tag > a:hover {
    filter: brightness(.8);
  }
  .tag > button:hover + a {
    text-decoration: line-through;
  }
  hr {
    margin-top: 2em;
  }
</style>