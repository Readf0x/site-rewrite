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
    scroll();
    window.onscroll = scroll;
  });
</script>

<template>
  <nav class="navbar top">
    <div class="left">
      <a href="/">DAVIS FORSYTHE</a>
    </div>
    <div class="right">
      <a href="/about">ABOUT</a>
      <a href="/projects">PROJECTS</a>
      <a href="https://github.com/readf0x" class="icon">
        {@html github}
      </a>
      <a href="https://discord.com" class="icon">
        {@html discord}
      </a>
    </div>
  </nav>
</template>

<style lang="scss">
  .navbar {
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    position: sticky;
    top: 0;
    z-index: 10;
    background: var(--bg-2);
    transition: 0.4s;
    &.top {
      background: none;
      &::after {
        background: none;
      }
    }
    &::after {
      content: "";
      width: 100%;
      height: 8px;
      position: absolute;
      top: 50px;
      background: linear-gradient(to bottom, var(--bg-0), transparent);
      transition: 10s;
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
      color: var(--text-2);
      font-size: 25px;
      text-shadow: 0 0 4px var(--text-2);
      &.icon {
        display: flex;
        height: fit-content;
        width: fit-content;
        padding: 0;
      }
    }
  }
</style>
