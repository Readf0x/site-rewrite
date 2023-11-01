<script>
  import "@catppuccin/palette/style";
  import Navbar from "./Navbar.svelte";
</script>

<Navbar/>
<slot/>

<svelte:head>
  <link rel="stylesheet" href="https://www.nerdfonts.com/assets/css/webfont.css"/>
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Noto+Sans:ital,wght@0,400;0,700;1,400;1,700&family=VT323&display=swap" rel="stylesheet">
</svelte:head>

<style lang="scss" global>
  @use "sass:map";

  :root {
    --font: "VT323", "Noto Sans", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu,
      Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
    --font-code: "Fira Code", "Menlo", "Cascadia Code", "Consolas", "Liberation Mono", monospace;
    font-family: var(--font);
    color: var(--text-2);
  }

  @media (prefers-color-scheme: dark) {
    :root {
      --bg-0: var(--ctp-mocha-crust);
      --bg-1: var(--ctp-mocha-mantle);
      --bg-2: var(--ctp-mocha-base);
      --sf-0: var(--ctp-mocha-surface0);
      --sf-1: var(--ctp-mocha-surface1);
      --sf-2: var(--ctp-mocha-surface2);
      --ov-0: var(--ctp-mocha-overlay0);
      --ov-1: var(--ctp-mocha-overlay1);
      --ov-2: var(--ctp-mocha-overlay2);
      --text-0: var(--ctp-mocha-subtext0);
      --text-1: var(--ctp-mocha-subtext1);
      --text-2: var(--ctp-mocha-text);
      --ac-0: #8178EE;
      --ac-1: var(--ctp-mocha-lavender);
    }
  }

  @media (prefers-color-scheme: light) {
    :root {
      --bg-0: var(--ctp-latte-crust);
      --bg-1: var(--ctp-latte-mantle);
      --bg-2: var(--ctp-latte-base);
      --sf-0: var(--ctp-latte-surface0);
      --sf-1: var(--ctp-latte-surface1);
      --sf-2: var(--ctp-latte-surface2);
      --ov-0: var(--ctp-latte-overlay0);
      --ov-1: var(--ctp-latte-overlay1);
      --ov-2: var(--ctp-latte-overlay2);
      --text-0: var(--ctp-latte-subtext0);
      --text-1: var(--ctp-latte-subtext1);
      --text-2: var(--ctp-latte-text);
      --ac-0: var(--ctp-latte-sapphire);
      --ac-1: var(--ctp-latte-red);
    }
  }

  ::-webkit-scrollbar {
    width: 10px;
    height: 10px;
    background-color: var(--bg-1);
    &-track {
      background: var(--bg-1);
      padding: 10px 2px;
    }
    &-thumb {
      background: var(--sf-0);
      border-radius: 5px;
      &:hover {
        background: var(--ov-0);
      }
    }
    &-corner {
      background-color: var(--bg-1);
    }
  }

  body {
    min-height: 100vh;
    margin: 0;
    background: var(--bg-2);
  }

  button,
  input[type="submit"],
  input[type="reset"] {
    background: none;
    color: inherit;
    border: none;
    padding: 0;
    font: inherit;
    cursor: pointer;
    outline: inherit;
    margin: 1px 2px;
  }
</style>
