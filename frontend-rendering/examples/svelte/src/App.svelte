<script>
  import Headline from './components/Headline.svelte';
  import Input from './components/Input.svelte';
  import Button from './components/Button.svelte';
  const defaultTitle = 'A Svelte Example';

  let title = defaultTitle;
  let inputValue = '';

  const changeHandler = ({ detail }) => {
    title = detail.value;
    inputValue = detail.value;
  };

  const reset = () => {
    title = defaultTitle;
    inputValue = '';
  };

  $: {
    if (inputValue === '') {
      title = defaultTitle;
    }
  }
</script>

<div class="app">
  <Headline {title} />
  <Input value={inputValue} on:change={changeHandler} />
  <Button on:click={reset}>Reset</Button>
</div>

<style>
  .app {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;

    background: var(--color-background);
    padding: calc(4 * var(--size-bezel));
    margin-top: calc(4 * var(--size-bezel));
    border-radius: var(--size-radius);
    border: 3px solid var(--color-signal, currentColor);
    box-shadow: 0.5rem 0.5rem 0 var(--color-signal, currentColor);
    color: var(--color-light);
    font-family: 'Inter', sans-serif;
    font-size: calc(0.6rem + 0.4vw);
  }

  :global(.app > *) {
    margin: 10px 0;
  }
</style>
