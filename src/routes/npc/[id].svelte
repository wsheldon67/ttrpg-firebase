<script context='module'>
  /** @type {import('./__types/[slug]').Load} */
  export async function load({params}) {
    return {
      props: {id: params.id}
    }
  }
</script>
<script lang='ts'>
  import DisplayById from './_DisplayById.svelte'
  export let id:string
</script>
<DisplayById {id} />