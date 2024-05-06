<script>
  import { createEventDispatcher } from 'svelte';
  export let value = '';
  const dispatch = createEventDispatcher();

  function changeHandler(event) {
    dispatch('change', { value: event.target.value });
  }
</script>

<input type="text" {value} class="input-field" on:input={changeHandler} />

<style>
  .input-field {
    box-sizing: border-box;
    display: block;
    width: 100%;
    border: 3px solid currentColor;
    padding: calc(var(--size-bezel) * 1.5) var(--size-bezel);
    color: currentColor;
    background: transparent;
    border-radius: var(--size-radius);
    text-align: center;
  }
</style>
