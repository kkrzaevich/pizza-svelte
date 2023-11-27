<script>
  import PageContent from "./components/PageContent.svelte";
</script>

<svelte:head>
	<meta name="viewport" content="width=device-width, initial-scale=1" />
</svelte:head>

<PageContent />


<style lang="scss">
    @use 'styles' as *;

  :global(body) {
    display: grid;
    grid-auto-flow: column;
    grid-area: header;
    padding: 5rem 7.5rem;
    align-items: flex-start;
    gap: 0.625rem;
    width: 100%;
    height: fit-content;
    background: $bg-clr;
    position: relative;
  }

  @media screen and (max-width: 1119px) {
    :global(body) {
      padding: 5rem;
    }
  }
        
  @media screen and (max-width: 699px) {
    :global(body) {
      padding: 2.5rem 1.25rem;
    }
  }  
</style>