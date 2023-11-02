<script>
  import github from "$lib/icons/github.svg?raw";
  import discord from "$lib/icons/discord.svg?raw";
  import { onMount } from "svelte";

  
  function scroll() {
    if (document.body.scrollTop > 0 || document.documentElement.scrollTop > 0) {
      document.querySelector(".navbar")?.classList.remove("top");
    } else {
      document.querySelector(".navbar")?.classList.add("top");
    }
  }
  
  onMount(() => {
    window.onscroll = scroll;
    scroll();
  });
</script>

<nav class="navbar top">
  <div class="left">
    <a href="/" data-content="Davis Forsythe">Davis Forsythe</a>
  </div>
  <div class="right">
    <a href="/about" data-content="About">About</a>
    <a href="/projects" data-content="Projects">Projects</a>
    <a href="https://github.com/readf0x" class="icon">
      {@html github}
    </a>
    <a href="https://discord.com" class="icon">
      {@html discord}
    </a>
  </div>
</nav>

<style lang="scss">
  .navbar {
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
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
      justify-content: flex-end;
      align-items: center;
      gap: 20px;
    }
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
      &.icon {
        display: flex;
        height: fit-content;
        width: fit-content;
        padding: 0;
        &:hover {
          --tx-2: var(--ac-1);
        }
      }
    }
  }
</style>