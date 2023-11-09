<script lang="ts">
  import link from "$lib/icons/link.svg?raw";

  let data: HTMLElement;
  let id: string;
  $: id = data?.innerText
    .toLowerCase()
    .replaceAll(" ", "-")
    .replace(/[^a-z\-]/g, "");
</script>

<h1 bind:this={data} {id}>
  <slot /><button
    on:click={() =>
      navigator.clipboard.writeText(window.location.href.replace(/#.*$/, "") + "#" + id)}
    >
      {@html link}
    </button
  >
</h1>

<style lang="scss">
  button {
    display: inline-flex;
    width: .75em;
    height: .75em;
    position: relative;
    top: 0.1em;
    left: 0.25em;
    align-items: center;
    justify-content: center;
    opacity: 0;
    transition: opacity 0.1s;
    filter: drop-shadow(0 0 0.05em var(--tx-0));
  }
  h1:hover button {
    opacity: 1;
  }
</style>
