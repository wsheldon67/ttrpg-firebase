<script context='module'>
  /** @type {import('./__types/[slug]').Load} */
  export async function load({params}) {
    return {
      props: {id: params.id}
    }
  }
</script>
<script lang='ts'>
  import EditById from './_EditById.svelte'
  export let id:string
</script>
<EditById {id} />