<script>
  import "./global.scss"
  import Navbar from "$lib/components/Navbar.svelte"
  import Modal from "$lib/components/Modal.svelte"

  export let data
  let { posts } = data
</script>

<Modal />
<Navbar bind:posts />
<slot />

<svelte:head>
  <link rel="stylesheet" href="https://www.nerdfonts.com/assets/css/webfont.css" />
  <link rel="preconnect" href="https://fonts.googleapis.com" />
  <link rel="preconnect" href="https://fonts.gstatic.com" />
  <link
    href="https://fonts.googleapis.com/css2?family=Noto+Sans:ital,wght@0,400;0,700;1,400;1,700&family=VT323&display=swap"
    rel="stylesheet"
  />
</svelte:head>
