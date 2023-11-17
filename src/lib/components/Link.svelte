<script lang="ts">
  import downArrow from "$lib/icons/downarrow.svg?raw"
  import type { Link } from "$lib/types"

  let dropdown: boolean = false
  let linkGroup: HTMLElement
  let dropdownButton: HTMLButtonElement

  export let link: Link

  const keyboardHander = function (ev: KeyboardEvent) {
    if (ev.key == "Escape" && dropdown) {
      ev.preventDefault()
      dropdown = false
    }
  }
</script>

<svelte:document
  on:keydown={keyboardHander}
  on:click={(ev) => {
    // https://www.w3docs.com/snippets/javascript/how-to-detect-a-click-outside-an-element.html
    let targetEl = ev.target // clicked element
    while (targetEl) {
      if (targetEl == linkGroup || targetEl == dropdownButton) {
        // This is a click inside, does nothing, just return.
        return
      }
      // Go up the DOM
      // @ts-ignore
      targetEl = targetEl.parentNode
    }
    // This is a click outside.
    dropdown = false
  }}
/>

{#if typeof link.value == "string"}
  <a href={link.value}>{link.name}</a>
{:else if Array.isArray(link.value)}
  <div class="link-group" data-enabled={dropdown}>
    <span class="link-group-button">
      <a href={link.route}>{link.name}</a>
      <button on:click={() => (dropdown = !dropdown)} bind:this={dropdownButton}
        >{@html downArrow}</button
      >
    </span>
    <div class="link-group-content" bind:this={linkGroup}>
      {#each link.value as groupItem}
        <a href={groupItem.value} on:click={() => (dropdown = false)}>{groupItem.name}</a>
      {/each}
    </div>
  </div>
{/if}

<style lang="scss">
  a {
    text-decoration: none;
    color: var(--tx-2);
    font-size: 25px;
    text-shadow: 0 0 4px var(--tx-2);
    transition: 0.4s;
    text-transform: uppercase;
    &:hover {
      color: var(--ac-1);
      text-shadow: 0 0 4px var(--ac-1);
    }
    &:focus {
      color: var(--ac-1);
      text-shadow: 0 0 4px var(--ac-1);
      outline: none;
    }
    @media (max-width: 650px) {
      font-size: 7vw;
      height: 100%;
      display: flex;
      align-items: center;
    }
  }
  .link-group {
    position: relative;
    &[data-enabled="true"] {
      .link-group-content {
        max-height: 75vh;
      }
      .link-group-button button {
        filter: drop-shadow(0 0 0.1em var(--ac-1));
        transform: rotate(0deg);
      }
    }
  }
  .link-group-button {
    display: flex;
    align-items: center;
    button {
      display: flex;
      height: fit-content;
      width: fit-content;
      filter: drop-shadow(0 0 0.1em var(--tx-2));
      transform: rotate(180deg);
      transition: transform 0.4s;
    }
  }
  .link-group-content {
    display: flex;
    position: absolute;
    flex-direction: column;
    // gap: .4em;
    margin-top: 0.1em;
    overflow: hidden;
    max-height: 0px;
    height: fit-content;
    border-radius: 4px;
    background: var(--sf-0);
    transition: max-height 1s;
    left: -0.7em;
    min-width: calc(100% + 0.7em);
    a {
      padding: 0.1em 0.5em;
      margin: 0;
      &:first-of-type {
        padding-top: 0.2em;
      }
      &:last-of-type {
        padding-bottom: 0.2em;
      }
    }
  }
</style>
