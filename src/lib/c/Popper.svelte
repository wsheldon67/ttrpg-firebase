<script>
  import createPopperAction from '../usePopper'

  const [usePopperElement, usePopperTooltip] = createPopperAction()

  export let show = false
  export let placement = 'top'

  const offset = {
    top: [0, 8]
  }

</script>
<style>
  .tip {
    padding: .5em;
    background-color: var(--b4);
    height: initial;
  }
  .arrow {
    background-color: var(--b4);
  }
</style>
<div use:usePopperElement>
  <slot name="reference"/>
</div>
{#if show}
  <div class='tip' use:usePopperTooltip={{
    placement,
    modifiers: [
      {
        name: 'offset',
        options: {
          offset: offset[placement]
        }
      }
    ]
  }}>
    <slot name="content"/>
    <div class='arrow' data-popper-arrow></div>
  </div>
  
{/if}