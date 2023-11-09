<script lang="ts">
  let data: HTMLElement;
  let id: string;
  $: id = data?.innerText.toLowerCase().replaceAll(" ", "-").replace(/[^a-z\-]/g, "");
</script>

<h1 bind:this={data} id={id}><slot /><button on:click={() => navigator.clipboard.writeText(window.location.href.replace(/#.*$/, "") + "#" + id)}><i class="nf nf-md-link_variant" /></button></h1>

<style lang="scss">
  button {
    display: inline-flex;
    width: .75em;
    height: .75em;
    position: relative;
    bottom: .2em;
    left: .5em;
    align-items: center;
    justify-content: center;
    font-size: 0.5em;
    opacity: 0;
    transition: opacity 0.1s;
  }
  h1:hover button {
    opacity: 1;
  }
</style>
