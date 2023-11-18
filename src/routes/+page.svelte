<script lang="ts">
  import Header from "$lib/components/Header.svelte"
  import Card from "$lib/components/Card.svelte"

  import linuxCard from "$lib/assets/digitalocean-penguin-linux-wallpaper.jpg"
  import gameCard from "$lib/assets/store_home_share.jpg"
  import keyboardCard from "$lib/assets/feature-coolest-mechanical-keyboards.png"

  import me from "$lib/assets/PXL_20231014_194228047.jpg"

  // @ts-ignore
  export let data
  let { hello } = data
</script>

<svelte:head>
  <title>Davis Forsythe</title>
</svelte:head>

<Header bind:hello />

<div class="page-content">
  <div class="border-wrapper">
    <div class="border-items">
      <p>
        I'm currently a junior at Horn Lake High School enrolled in dual credit classes with
        Northwest Community College. I plan to study computer science and become a software dev,
        though I don't have any specific college in mind.
      </p>
      <img src={me} alt="fjf" />
    </div>
  </div>
  <h1 id="hobbies">Hobbies</h1>
  <div class="cards">
    <Card img={linuxCard} href="/about#linux">
      <slot slot="title">Linux</slot>
    </Card>
    <Card img={keyboardCard} href="/about#keyboards">
      <slot slot="title">Keyboards</slot>
    </Card>
    <Card img={gameCard} href="/about#gaming">
      <slot slot="title">Gaming</slot>
    </Card>
  </div>
  <h1 id="how-this-was-made">How this was made</h1>
  <div class="border-wrapper">
    <div class="border-items">
      <p class="smaller">
        This site is using <a href="https://kit.svelte.dev/" target="_blank">SvelteKit</a>, and the actual page content is written in markdown, then parsed, transformed, and finally stringified into html using <a href="https://unifiedjs.com/" target="_blank">unified</a>, <a href="https://remark.js.org/" target="_blank">remark</a>, and <a href="https://github.com/rehypejs/rehype" target="_blank">rehype</a>. I'm using quite a few plugins, but the most important are <a href="https://www.npmjs.com/package/remark-gfm" target="_blank">remark-gfm</a>, <a href="https://www.npmjs.com/package/remark-frontmatter" target="_blank">remark-frontmatter</a>, and <a href="https://www.npmjs.com/package/rehype-slug" target="_blank">rehype-slug</a>. remark-gfm adds support for <a href="https://github.github.com/gfm/" target="_blank">GitHub flavored markdown</a>, remark-frontmatter adds support for metadata in markdown files, and rehype-slug automatically adds IDs to headers so that you can link to them, <a href="#hobbies">like this</a>! Funnily enough, this page is actually the only one not written in markdown, due to it's complexity. There's absolutely no way the cards above this section could've been created from markdown without creating a custom transformer plugin or making serious changes to the project structure. If you want to see said markdown, or anything else from this project, it's all available on <a href="https://github.com/readf0x/site-rewrite" target="_blank">GitHub</a>!
      </p>
    </div>
  </div>
</div>

<style lang="scss">
  :global(.page-content) {
    font-size: 2em;
    max-width: 1200px;
    @media (max-width: 650px) {
      font-size: 1.5em;
    }
    h1 {
      font-size: 3em;
      @media (max-width: 650px) {
        font-size: 2.5em;
      }
    }
    .cards {
      display: flex;
      gap: 1%;
      margin: 0 -0.5em;
      @media (max-width: calc(1200px + 1em)) {
        margin: 0.4em 0;
      }
      @media (max-width: 650px) {
        flex-direction: column;
      }
    }
    .border-wrapper {
      background-color: var(--sf-0);
      padding: 2px;
      border-radius: 6px;
      margin: 0.4em -0.5em;
      @media (max-width: calc(1200px + 1em)) {
        margin: 0.4em 0;
      }
      .border-items {
        display: flex;
        gap: 2px;
        border-radius: 4px;
        overflow: hidden;
        @media (max-width: 650px) {
          flex-direction: column;
        }
        > * {
          background-color: var(--bg-2);
          margin: 0;
          @media (max-width: 650px) {
            padding: 0.25em 0.5em;
          }
        }
        > img {
          object-fit: contain;
          width: 8em;
          // flex-grow: 1;
          @media (max-width: 650px) {
            padding: 0;
            margin: 0;
            width: 100%;
          }
        }
        > p {
          padding: 1em 2em;
        }
      }
    }
  }
  p.smaller {
    font-size: 0.8em;
  }
</style>
