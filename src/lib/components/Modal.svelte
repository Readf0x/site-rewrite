<script lang="ts">
  import { onDestroy, onMount } from "svelte";
  import { modal } from "../../stores";

  function keyHandler(ev: KeyboardEvent) {
    if(ev.key == "Escape") {
      ev.preventDefault();
      $modal = "";
    }
  }

  onMount(() => document.addEventListener("keydown", keyHandler));

  onDestroy(() => document.removeEventListener("keydown", keyHandler));
</script>

{#if $modal}
  <div class="modal-wrapper">
    <div class="modal">
      <div class="modal-slot">{@html $modal}</div>
      <button on:click={() => $modal = ""} id="close">Close</button>
    </div>
  </div>
{/if}

<style lang="scss">
  .modal-wrapper {
    position: fixed;
    width: 100vw; height: 100vh;
    background: rgba(var(--bg-0-raw), 0.5);
    z-index: 100;
    display: flex;
    justify-content: center; align-items: center;
    .modal {
      max-width: 33vw; max-height: 33vh;
      width: fit-content; height: fit-content;
      padding: 20px;
      background: var(--bg-2);
      border-radius: 20px;
      :first-child { margin-top: 0; }
      .modal-slot {
        font-size: 18px;
      }
      button{
        background: var(--sf-0);
        padding: 2px 6px;
        border-radius: 4px;
        &:last-of-type {
          float: right;
        }
        &:hover {
          background: var(--ov-0);
        }
      }
    }
  }
</style>
