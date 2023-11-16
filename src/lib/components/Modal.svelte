<script lang="ts">
  import { modal } from "../../stores"

  function keyHandler(ev: KeyboardEvent) {
    if (ev.key == "Escape") {
      ev.preventDefault()
      $modal = ""
    }
  }
</script>

<svelte:document on:keydown={keyHandler} />

{#if $modal}
  <div class="modal-wrapper">
    <div class="modal">
      <div class="modal-slot"><p>{@html $modal}</p></div>
      <div class="bottom">
        <span class="hint">Press <key>Esc</key> to close</span>
        <button on:click={() => ($modal = "")} id="close">Close</button>
      </div>
    </div>
  </div>
{/if}

<style lang="scss">
  .modal-wrapper {
    position: fixed;
    width: 100vw;
    height: 100vh;
    background: rgba(var(--bg-0-raw), 0.5);
    z-index: 100;
    display: flex;
    justify-content: center;
    align-items: center;
    .modal {
      max-width: 33vw;
      max-height: 33vh;
      width: fit-content;
      height: fit-content;
      padding: 20px;
      background: var(--bg-2);
      border-radius: 20px;
      .modal-slot {
        font-size: 18px;
        :first-child {
          margin-top: 0 !important;
        }
      }
      .bottom {
        .hint {
          color: var(--tx-0);
        }
        button {
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
  }
</style>
