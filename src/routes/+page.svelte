<script>
  import Header from "$lib/components/Header.svelte";

  export let data;
  let { hello } = data;
</script>

<svelte:head>
  <title>Davis Forsythe</title>
</svelte:head>

<Header bind:hello />

<div class="page-content">
  <h1>Hi, I'm Davis Forsythe</h1>
</div>
