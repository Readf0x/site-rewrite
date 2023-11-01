<script>
  import github from "$lib/icons/github.svg?raw";
  import discord from "$lib/icons/discord.svg?raw";
</script>

<template lang="pug">
  nav.navbar
    .left
      a(href="/") DAVIS FORSYTHE
    .right
      a(href="/about") ABOUT
      a(href="/projects") PROJECTS
      a.icon(href="https://github.com/readf0x")
        +html("github")
      a.icon(href="https://discord.com")
        +html("discord")
</template>

<style lang="scss">
  .navbar {
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
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
      padding-topp: .5px;
      &.icon {
        display: flex;
        height: fit-content;
        width: fit-content;
        padding: 0;
      }
    }
  }
</style>
