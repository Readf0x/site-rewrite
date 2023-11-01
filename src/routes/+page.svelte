<script>
  export let data;
  let { hello } = data;
</script>

<template lang="pug">
  p {hello[0]}
</template>

<svelte:head>
  <title>Davis Forsythe</title>
</svelte:head>
