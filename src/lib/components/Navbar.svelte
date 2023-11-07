<script lang="ts">
  import github from "$lib/icons/github.svg?raw";
  import discord from "$lib/icons/discord.svg?raw";
  import search from "$lib/icons/search.svg?raw";
  import menu from "$lib/icons/menu.svg?raw";
  import { onMount } from "svelte";
  import { modal } from "../../stores";

  let searchText: string;
  let searchElem: HTMLInputElement;
  let flyoutMenu: HTMLElement;
  let flyoutButton: HTMLElement;
  let flyoutEnabled: boolean = false;

  function scroll() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
      document.querySelector(".navbar")?.classList.remove("top");
    } else {
      document.querySelector(".navbar")?.classList.add("top");
    }
  }

  onMount(() => {
    window.onscroll = scroll;
    scroll();
    document.addEventListener("keydown", (ev) => {
      if ((ev.ctrlKey && ev.key == "k") || ev.key == "/") {
        ev.preventDefault();
        searchElem.focus();
      }
    });
    searchElem.addEventListener("keydown", (ev) => {
      if (ev.key == "Escape") {
        ev.preventDefault();
        searchElem.blur();
        searchElem.value = "";
      }
    });
    document.addEventListener("click", (ev: MouseEvent) => {
      // https://www.w3docs.com/snippets/javascript/how-to-detect-a-click-outside-an-element.html
      let targetEl = ev.target; // clicked element
      while (targetEl) {
          if(targetEl == flyoutButton || targetEl == flyoutMenu) {
            // This is a click inside, does nothing, just return.
            return;
          }
          // Go up the DOM
          // @ts-ignore
          targetEl = targetEl.parentNode;
        };
        // This is a click outside.
        flyoutEnabled = false;
    });
  });
</script>

<nav class="navbar top">
  <div class="left">
    <a href="/" data-content="Davis Forsythe">Davis Forsythe</a>
  </div>
  <div class="search">
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="5"
      height="30"
      viewBox="0 0 5 30"
      fill="none"
      class="search-left-border"
    >
      <path
        d="M2.71391 5.71523L5 0V30L2.71391 24.2848C0.329798 18.3245 0.329799 11.6755 2.71391 5.71523Z"
      />
    </svg>
    <div class="search-icon">
      {@html search}
    </div>
    <input
      type="text"
      class="search-input"
      placeholder="Search..."
      bind:value={searchText}
      bind:this={searchElem}
      spellcheck="false"
    />
    <div class="search-shortcut">
      <code>ctrl</code><code>k</code>
    </div>
    <button class="search-submit">
      {@html search}
    </button>
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="5"
      height="30"
      viewBox="0 0 5 30"
      fill="none"
      class="search-right-border"
    >
      <path
        d="M2.28609 5.71523L0 5.72205e-06V30L2.28609 24.2848C4.6702 18.3245 4.6702 11.6755 2.28609 5.71523Z"
      />
    </svg>
  </div>
  <div class="right">
    <a href="/about">About Me</a>
    <a href="/projects">Projects</a>
    <a href="https://github.com/readf0x" class="icon">
      {@html github}
    </a>
    <button
      on:click={() =>
        ($modal = `Discord has not implemented profile links, DM me <code>@readf0x</code>`)}
      class="icon"
    >
      {@html discord}
    </button>
  </div>
    <button class="flyout-menu" on:click={() => flyoutEnabled = !flyoutEnabled} bind:this={flyoutButton}>
    <div class="menu-icon">{@html menu}</div>
  </button>
</nav>

<div class="flyout-wrapper">
  <div class="flyout-expanded" aria-expanded={flyoutEnabled} data-enabled={flyoutEnabled} bind:this={flyoutMenu}>
    <div class="flyout-container">
      <a href="/" on:click={() => flyoutEnabled = false}>Home</a>
      <a href="/about" on:click={() => flyoutEnabled = false}>About</a>
      <a href="/projects" on:click={() => flyoutEnabled = false}>Projects</a>
    </div>
  </div>
</div>

<style lang="scss">
  .navbar {
    display: flex;
    justify-content: space-between;
    align-items: center;
    position: sticky;
    top: 0;
    z-index: 10;
    background: var(--bg-1);
    transition: background 0.4s;
    &.top {
      background: none;
    }
    .left,
    .right {
      display: flex;
      height: 50px;
      padding: 0 18px;
      align-items: center;
      gap: 20px;
    }
    @media (max-width: 600px) {
      height: 15vw;
      .left {
        height: 15vw;
      }
      .right {
        display: none;
      }
    }
    .search {
      gap: 0;
      display: flex;
      height: fit-content;
      position: absolute;
      top: 0;
      right: 0;
      bottom: 0;
      left: 0;
      margin: auto;
      flex-grow: 1;
      max-width: 600px;
      transition: 0.4s;
      &:has(input:focus) {
        filter: drop-shadow(0 0 10px rgba(var(--ac-0-raw), 0.5));
      }
      &:has(input:focus, input:not(:placeholder-shown)) {
        .search-icon,
        .search-shortcut {
          opacity: 0;
          pointer-events: none;
        }
        .search-input {
          padding-left: 10px;
        }
        .search-submit {
          display: flex;
          opacity: 1;
        }
      }
      svg:last-of-type,
      svg:first-of-type {
        path {
          fill: var(--sf-0);
        }
      }
      @media (max-width: 1300px) {
        position: relative;
      }
      @media (max-width: 600px) {
        display: none;
      }
    }
    .search-input {
      border: none;
      outline: none;
      background: var(--sf-0);
      color: inherit;
      height: 30px;
      box-sizing: border-box;
      font: inherit;
      font-size: 25px;
      flex-grow: 1;
      padding-left: 32px;
      transition: 0.4s;
      &::placeholder {
        color: var(--tx-2);
        user-select: none;
      }
    }
    .search-icon {
      position: absolute;
      left: 5px;
      display: flex;
      height: 30px;
      align-items: center;
      padding: 0 5px;
      transition: 0.4s;
      pointer-events: none;
    }
    .search-shortcut {
      position: absolute;
      right: 10px;
      display: flex;
      height: 30px;
      align-items: center;
      gap: 2px;
      user-select: none;
      pointer-events: none;
      transition: 0.4s;
    }
    .search-submit {
      background: var(--sf-0);
      margin: 0;
      display: flex;
      align-items: center;
      padding: 0 5px;
      display: none;
      opacity: 0;
      transition: 0.4s;
    }
    a,
    button {
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
      @media (max-width: 600px) {
        font-size: 7vw;
        height: 100%;
        display: flex;
        align-items: center;
      }
    }
    .icon {
      display: flex;
      height: fit-content;
      width: fit-content;
      padding: 0;
      filter: drop-shadow(0 0 2px var(--tx-2));
      &:hover {
        color: var(--ac-1);
        filter: drop-shadow(0 0 2px var(--ac-1));
      }
      @media (max-width: 800px) {
        display: none;
      }
      &:focus {
        filter: drop-shadow(0 0 2px var(--ac-1));
      }
    }
    .flyout-menu {
      display: none;
      filter: drop-shadow(0 0 4px var(--tx-2));
      padding: 0 18px;
      &:hover {
        color: var(--ac-1);
        filter: drop-shadow(0 0 4px var(--ac-1));
      }
      .menu-icon {
        width: 7vw; height: 7vw;
      }
      @media (max-width: 600px) {
        display: flex;
      }
    }
  }
  .flyout-wrapper {
    position: fixed;
    top: 0;
    right: 0;
    width: 100vw;
    height: 100%;
    overflow: hidden;
    z-index: 15;
    pointer-events: none;
    &:has([data-enabled="true"]) {
      pointer-events: unset;
    }
    .flyout-expanded {
      position: absolute;
      top: 0;
      right: -100%;
      background: var(--sf-0);
      height: 100%;
      overflow-y: scroll;
      width: 80vw;
      border-radius: 30px 0 0 30px;
      transition: right 0.4s;
      &[data-enabled="true"] {
        right: 0;
      }
      .flyout-container {
        display: flex;
        flex-direction: column;
        padding: 20px;
        gap: 20px;
        font-size: 7.5vw;
        a {
          color: inherit;
          text-decoration: none;
        }
      }
      &::-webkit-scrollbar {
        width: 0 !important;
        height: 0 !important;
      }
    }
    @media (min-width: 600px) {
      display: none;
    }
  }
</style>
