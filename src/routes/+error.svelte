<script lang="ts">
  import { page } from "$app/stores";

  let collapsible: boolean = false;
  let message: (status: number) => string = function (i: number): string {
    switch (i) {
      case 404:
        return "I don't know how you got here, but this place doesn't exist.";
      case 500:
        return "Whoopsie! Looks like my server code failed, sorry about that!";
      case 511:
        return "Some idiot (me) didn't configure this page correctly!";
      default:
        return `No funny message found for ${i} errors`;
    }
  };
</script>

<div class="page-content">
  <h1>{message($page.status)}</h1>
  <a href="/">Return from whence you came!</a>
  <button
    class="collapsible-button"
    data-enabled={collapsible}
    on:click={() => (collapsible = !collapsible)}>&gt;</button
  >
  <div class="collapsible-content" data-enabled={collapsible}>
    <pre><code>Error {$page.status}: {$page.error?.message}</code></pre>
  </div>
</div>

<style lang="scss">
  .collapsible-button {
    transform: rotate(-90deg);
    transition: 0.4s;
    &[data-enabled="true"] {
      transform: rotate(90deg);
    }
  }
  .collapsible-content {
    overflow-y: hidden;
    height: 0px;
    &[data-enabled="true"] {
      height: fit-content;
    }
  }
  pre:has(code) {
    margin-top: 10px;
  }
</style>
