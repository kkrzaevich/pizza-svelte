<script>
  import PageContent from "./components/PageContent.svelte";
</script>

<PageContent />

<style>
  :global(body) {
    display: grid;
    grid-auto-flow: column;
    grid-area: header;
    padding: 5rem 7.5rem;
    align-items: flex-start;
    gap: 0.625rem;
    width: 100%;
    background: var(--100, #FFE7CE);
  }
</style>