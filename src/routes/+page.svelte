<script lang="ts">
  import Header from "$lib/components/Header.svelte";
  import Card from "$lib/components/Card.svelte";

  import linuxCard from "$lib/assets/digitalocean-penguin-linux-wallpaper.jpg";
  import gameCard from "$lib/assets/store_home_share.jpg";
  import keyboardCard from "$lib/assets/feature-coolest-mechanical-keyboards.png";

  // @ts-ignore
  export let data;
  let { hello } = data;
</script>

<svelte:head>
  <title>Davis Forsythe</title>
</svelte:head>

<Header bind:hello />

<div class="page-content">
  <!-- <div class="columns"> -->
  <p>
    I'm currently a junior at Horn Lake High School enrolled in dual credit classes with Northwest
    Community College. I plan to study computer science and become a software dev, but I don't have
    any specific college in mind. I've always said that if I don't go to an ivy league college, it
    doesn't really matter where I go.
  </p>
  <!-- <p>I've lived in Mississippi my whole life, but I plan to move out of the US eventually. Ideally I'd like to live in a more socialist country like Norway or The Netherlands, but for now I'm still in the good ole' US of A.</p> -->
  <!-- </div> -->
  <h1>Hobbies</h1>
  <div class="cards">
    <Card img={linuxCard} href="/hobbies#linux">
      <span slot="title">Linux</span>
    </Card>
    <Card img={gameCard} href="/hobbies#gaming">
      <span slot="title">Gaming</span>
    </Card>
    <Card img={keyboardCard} href="/hobbies#keyboards">
      <span slot="title">Keyboards</span>
    </Card>
  </div>
</div>

<style lang="scss">
  .page-content {
    font-size: 1.8em;
    max-width: 1200px;
    h1 {
      font-size: 3em;
    }
    .cards {
      display: flex;
      gap: 1%;
      margin: 0 -2%;
    }
  }
</style>
