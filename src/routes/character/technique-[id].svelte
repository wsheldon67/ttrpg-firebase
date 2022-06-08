<script context='module'>
  /** @type {import('./__types/[slug]').Load} */
  export async function load({params}) {
    return {
      props: {id: params.id}
    }
  }
</script>
<script lang='ts'>
  import TechniqueById from './_TechniqueById.svelte'
  export let id:string
</script>
<TechniqueById {id} />
<a href={'/character/'+id}>Character Sheet</a>