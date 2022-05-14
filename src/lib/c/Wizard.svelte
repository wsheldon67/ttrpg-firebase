<script lang='ts'>
  /* TODO component/api for a wizard data-builder
    can jump between sections
    Things that rely on a thing that was change are unset in the UI, 
      but remain for the thing they relied on, so it is re-set if that
      option is switched back to
    API should pretty much be the ts declaration
  */
  type Id = string
  type QuestionType = 'string'|'number'|'multi'
  interface Settings {
    id: Id
    affects: Id[]
    type: QuestionType
    options?: string[]
  }
  export let settings:Settings[]
</script>