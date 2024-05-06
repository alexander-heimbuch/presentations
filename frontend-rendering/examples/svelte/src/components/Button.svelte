<script>
  import { createEventDispatcher } from 'svelte';
  const dispatch = createEventDispatcher();

  function clickHandler() {
    dispatch('click');
  }
</script>

<button class="action-button" on:click={clickHandler}><slot></slot></button>

<style>
.action-button {
  cursor: pointer;
  color: currentColor;
  padding: var(--size-bezel) calc(var(--size-bezel) * 2);
  background: var(--color-accent);
  border: none;
  border-radius: var(--size-radius);
  font-weight: 900;
}
</style>
