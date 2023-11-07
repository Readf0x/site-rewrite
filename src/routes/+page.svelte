<script>
  import Header from "$lib/components/Header.svelte";
  // @ts-ignore
  import Home from "$lib/markdown/Home.md";

  // @ts-ignore
  export let data;
  let { hello } = data;
</script>

<svelte:head>
  <title>Davis Forsythe</title>
</svelte:head>

<Header bind:hello />

<div class="page-content">
  <Home />
</div>
