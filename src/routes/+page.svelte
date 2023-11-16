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
  <div class="border-items">
    <p>
      I'm currently a junior at Horn Lake High School enrolled in dual credit classes with Northwest
      Community College. I plan to study computer science and become a software dev, though I don't
      have any specific college in mind.
    </p>
    <img src={me} alt="fjf" />
  </div>
  <h1>Hobbies</h1>
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
</div>

<style lang="scss">
  .page-content {
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
      margin: 0 -2%;
      @media (max-width: 650px) {
        flex-direction: column;
      }
    }
    .border-items {
      background-color: var(--sf-0);
      padding: 2px;
      border-radius: 4px;
      margin: 0.4em -0.5em;
      display: flex;
      gap: 2px;
      @media (max-width: 650px) {
        flex-direction: column;
      }
      > * {
        background-color: var(--bg-2);
        &:first-child {
          border-top-left-radius: 2px;
          border-bottom-left-radius: 2px;
          @media (max-width: 650px) {
            border-top-right-radius: 2px;
            border-bottom-left-radius: 0;
          }
        }
        &:last-child {
          border-top-right-radius: 2px;
          border-bottom-right-radius: 2px;
          @media (max-width: 650px) {
            border-top-right-radius: 0;
            border-bottom-left-radius: 2px;
          }
        }
        margin: 0;
        @media (max-width: 650px) {
          padding: 0.25em 0.5em;
        }
      }
      > img {
        object-fit: contain;
        height: 30vh;
      }
      > p {
        padding: 1em 2em;
      }
    }
  }
</style>
