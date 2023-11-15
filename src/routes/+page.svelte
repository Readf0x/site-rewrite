<script lang="ts">
  import Header from "$lib/components/Header.svelte"
  import Card from "$lib/components/Card.svelte"

  import linuxCard from "$lib/assets/digitalocean-penguin-linux-wallpaper.jpg"
  import gameCard from "$lib/assets/store_home_share.jpg"
  import keyboardCard from "$lib/assets/feature-coolest-mechanical-keyboards.png"

  // @ts-ignore
  export let data
  let { hello } = data
</script>

<svelte:head>
  <title>Davis Forsythe</title>
</svelte:head>

<Header bind:hello />

<div class="page-content">
  <div class="text-card">
    <p>
      I'm currently a junior at Horn Lake High School enrolled in dual credit classes with Northwest
      Community College. I plan to study computer science and become a software dev, but I don't have
      any specific college in mind.
    </p>
    <p>I've lived in Mississippi my whole life, but I plan to move out of the US eventually. Ideally I'd like to live in a more socialist country like Norway or The Netherlands, but for now I'm still in the US of A.</p>
  </div>
  <h1>Hobbies</h1>
  <div class="cards">
    <Card img={linuxCard} href="/about#linux">
      <span slot="title">Linux</span>
    </Card>
    <Card img={gameCard} href="/about#gaming">
      <span slot="title">Gaming</span>
    </Card>
    <Card img={keyboardCard} href="/about#keyboards">
      <span slot="title">Keyboards</span>
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
    .text-card {
      background-color: var(--sf-0);
      padding: 2px;
      border-radius: 4px;
      margin: 0.4em -.5em;
      > * {
        background-color: var(--bg-2);
        padding: 1em 2em;
        border-radius: 2px;
        margin: 0;
        @media (max-width: 650px) {
          padding: 0.25em 0.5em;
        }
        & + * {
          margin-top: 2px;
        }
      }
    }
  }
</style>
