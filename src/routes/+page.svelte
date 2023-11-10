<script lang="ts">
  import Header from "$lib/components/Header.svelte"
  import Home from "$lib/pages/Home.md"

  // @ts-ignore
  export let data
  let { hello } = data
</script>

<svelte:head>
  <title>Davis Forsythe</title>
</svelte:head>

<Header bind:hello />

<div class="page-content">
  <Home />
</div>
