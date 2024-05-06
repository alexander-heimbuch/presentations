<script>
  import App from '../App.svelte';
</script>

<App />

<style>
  :global(body) {
    padding: 10px;
  }

  :root {
    --color-light: white;
    --color-dark: #212121;
    --color-signal: #fab700;

    --color-background: var(--color-dark);
    --color-text: var(--color-dark);
    --color-accent: var(--color-signal);

    --size-bezel: 0.5rem;
    --size-radius: 4px;
  }
</style>
