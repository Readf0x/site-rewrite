<script>
  import photo from "$lib/assets/wypher2.png";

  export let data;
  let { hello } = data;
</script>

<template lang="pug">
  h1.name Davis#[br]Forsythe
  img.photo(src!="{photo}" alt="Headshot photo")
</template>

<style lang="scss">
  .name, .overlay {
    font-size: 10vw;
    margin-top: 0;
    text-shadow: 0 0 1vw var(--text-0);
  }
  .photo {
    height: 37vw;
    user-select: none;
    pointer-events: none;
    position: absolute;
    top: 50px;
    right: 0;
    bottom: 0;
    left: 0;
    margin: auto;
    display: block
  }
</style>

<svelte:head>
  <title>Davis Forsythe</title>
</svelte:head>
