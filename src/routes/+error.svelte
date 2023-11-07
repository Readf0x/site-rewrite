<script lang="ts">
	import { page } from '$app/stores';

  let collapsible: boolean = false;
</script>

<div class="page-content">
  <h1>I don't how you got here, but this place doesn't exist.</h1>
  <a href="/">Return from whence you came!</a>
  <button class="collapsible-button" data-enabled={collapsible} on:click={() => collapsible = !collapsible}>&gt;</button>
  <div class="collapsible-content" data-enabled={collapsible}>
    <p>Error: {$page.error?.message}</p>
  </div>
</div>

<style lang="scss">
  .collapsible-button {
    transform: rotate(-90deg);
    transition: 0.4s;
    &[data-enabled=true] {
      transform: rotate(90deg);
    }
  }
  .collapsible-content {
    overflow-y: hidden;
    height: 0px;
    &[data-enabled=true] {
      height: fit-content;
    }
  }
</style>