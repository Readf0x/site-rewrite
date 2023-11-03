<script lang="ts">
  import github from "$lib/icons/github.svg?raw";
  import discord from "$lib/icons/discord.svg?raw";
  import search from "$lib/icons/search.svg?raw";
  import { onMount, createEventDispatcher } from "svelte";

  let searchText: string;
  let searchElem: HTMLInputElement;

  function scroll() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
      document.querySelector(".navbar")?.classList.remove("top");
    } else {
      document.querySelector(".navbar")?.classList.add("top");
    }
  }
  const dispatch = createEventDispatcher();

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
      on:click={() => alert("Discord has not implemented profile links, DM me @readf0x")} class="icon">
      {@html discord}
    </button>
    <div class="search-icon-small">
      {@html search}
    </div>
  </div>
</nav>

<style lang="scss">
  .navbar {
    display: flex;
    justify-content: space-between;
    align-items: center;
    position: sticky;
    top: 0;
    z-index: 10;
    background: var(--bg-1);
    transition: 0.4s;
    &.top {
      background: none;
    }
    .left,
    .right {
      display: flex;
      height: 50px;
      padding: 0px 18px;
      align-items: center;
      gap: 20px;
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
        .search-icon, .search-shortcut {
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
      code {
        padding: 2px;
        background: var(--sf-1);
        border: 1px solid var(--ov-0);
        border-radius: 3px;
      }
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
    }
    .search-icon-small {
      display: none;
      filter: drop-shadow(0 0 4px var(--tx-2));
    }
  }

  @media (max-width: 1150px) {
    .navbar .search {
      position: relative;
    }
  }

  @media (max-width: 800px) {
    .navbar {
      .right .icon {
        display: none;
      }
    }
  }

  @media (max-width: 700px) {
    .navbar {
      .search {
        display: none;
      }
      .search-icon-small {
        display: unset;
      }
    }
  }
</style>
