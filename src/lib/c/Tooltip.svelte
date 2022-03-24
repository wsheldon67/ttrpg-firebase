<script>
  import createPopperAction from '../usePopper'

  const [usePopperElement, usePopperTooltip] = createPopperAction()

  export let show = false
  export let placement = 'top'
  export let tip = 'Please provide a tip for this tooltip.'
  export let block = false

  function show_tip() {
    show = true
  }
  function hide_tip() {
    show = false
  }
  const offset = {
    top: [0, 8],
    right: [-8, 8],
    bottom: [0, 0],
    left: [0, 0]
  }

</script>
<style>
  .tip {
    padding: .25em;
    background-color: var(--t);
    font-weight: var(--at-weight);
    color: var(--at);
    filter: opacity(96%);
    max-width: 16em;
    width: max-content;
    height: min-content;
  }
  span {
    text-decoration: underline dotted var(--t) 8%;
  }
</style>
{#if block}
<div
  use:usePopperElement
  on:mouseenter={show_tip}
  on:focus={show_tip}
  on:mouseleave={hide_tip}
  on:blur={hide_tip}
  >
  <slot />
</div>
{:else}
<span
  use:usePopperElement
  on:mouseenter={show_tip}
  on:focus={show_tip}
  on:mouseleave={hide_tip}
  on:blur={hide_tip}
  >
  <slot />
</span>
{/if}

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
  }}>{tip}</div>
{/if}