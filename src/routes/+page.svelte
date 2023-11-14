<script lang="ts">
  import Header from "$lib/components/Header.svelte"

  // @ts-ignore
  export let data
  let { hello } = data
</script>

<svelte:head>
  <title>Davis Forsythe</title>
</svelte:head>

<Header bind:hello />

<div class="page-content">
  <h1>Hi, I'm Davis Forsythe</h1>
  <div class="columns">
    <p>I'm currently a junior at Horn Lake High School enrolled in dual credit classes with Northwest Community College. I plan to study computer science and become a software dev, but I don't have any specific college in mind. I've always said that if I don't go to an ivy league college, it doesn't really matter where I go.</p>
    <p>I've lived in Mississippi my whole life, but I plan to move out of the US eventually. Ideally I'd like to live in a more socialist country like Norway or The Netherlands, but for now I'm still in the good ole' US of A.</p>
  </div>
  <h1>Hobbies</h1>
  <ul>
    <li>Linux</li>
    <li>Gaming</li>
    <li>Keyboards</li>
  </ul>
</div>
