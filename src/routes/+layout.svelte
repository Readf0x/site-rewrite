<script>
  import "@catppuccin/palette/style";
  import Navbar from "$lib/components/Navbar.svelte";
</script>

<Navbar />
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

<style lang="scss" global>
  :root {
    --font: "VT323", "Noto Sans", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
      Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
    --font-code: "Fira Code", "Menlo", "Cascadia Code", "Consolas", "Liberation Mono", monospace;
    font-family: var(--font);
    color: var(--tx-2);
    font-variant-ligatures: none;
  }

  h1, h2, h3, h4, h5, h6, b {
    font-weight: 400 !important;
  }

  ::selection {
    background: rgba(var(--ac-0-raw), 0.75) !important;
  }

  @media (prefers-color-scheme: dark) {
    :root {
      --bg-0: rgb(var(--bg-0-raw));
      --bg-1: rgb(var(--bg-1-raw));
      --bg-2: rgb(var(--bg-2-raw));
      --sf-0: rgb(var(--sf-0-raw));
      --sf-1: rgb(var(--sf-1-raw));
      --sf-2: rgb(var(--sf-2-raw));
      --ov-0: rgb(var(--ov-0-raw));
      --ov-1: rgb(var(--ov-1-raw));
      --ov-2: rgb(var(--ov-2-raw));
      --tx-0: rgb(var(--tx-0-raw));
      --tx-1: rgb(var(--tx-1-raw));
      --tx-2: rgb(var(--tx-2-raw));
      --ac-0: rgb(var(--ac-0-raw));
      --ac-1: rgb(var(--ac-1-raw));
      --ac-2: rgb(var(--ac-2-raw));

      --bg-0-raw: var(--ctp-mocha-crust-raw);
      --bg-1-raw: var(--ctp-mocha-mantle-raw);
      --bg-2-raw: var(--ctp-mocha-base-raw);
      --sf-0-raw: var(--ctp-mocha-surface0-raw);
      --sf-1-raw: var(--ctp-mocha-surface1-raw);
      --sf-2-raw: var(--ctp-mocha-surface2-raw);
      --ov-0-raw: var(--ctp-mocha-overlay0-raw);
      --ov-1-raw: var(--ctp-mocha-overlay1-raw);
      --ov-2-raw: var(--ctp-mocha-overlay2-raw);
      --tx-0-raw: var(--ctp-mocha-subtext0-raw);
      --tx-1-raw: var(--ctp-mocha-subtext1-raw);
      --tx-2-raw: var(--ctp-mocha-text-raw);
      --ac-0-raw: 129, 120, 238;
      --ac-1-raw: var(--ctp-mocha-lavender-raw);
      --ac-2-raw: var(--ctp-mocha-mauve-raw);
    }
  }

  @media (prefers-color-scheme: light) {
    :root {
      --bg-0: rgb(var(--bg-0-raw));
      --bg-1: rgb(var(--bg-1-raw));
      --bg-2: rgb(var(--bg-2-raw));
      --sf-0: rgb(var(--sf-0-raw));
      --sf-1: rgb(var(--sf-1-raw));
      --sf-2: rgb(var(--sf-2-raw));
      --ov-0: rgb(var(--ov-0-raw));
      --ov-1: rgb(var(--ov-1-raw));
      --ov-2: rgb(var(--ov-2-raw));
      --tx-0: rgb(var(--tx-0-raw));
      --tx-1: rgb(var(--tx-1-raw));
      --tx-2: rgb(var(--tx-2-raw));
      --ac-0: rgb(var(--ac-0-raw));
      --ac-1: rgb(var(--ac-1-raw));
      --ac-2: rgb(var(--ac-2-raw));

      --bg-0-raw: var(--ctp-latte-crust-raw);
      --bg-1-raw: var(--ctp-latte-mantle-raw);
      --bg-2-raw: var(--ctp-latte-base-raw);
      --sf-0-raw: var(--ctp-latte-surface0-raw);
      --sf-1-raw: var(--ctp-latte-surface1-raw);
      --sf-2-raw: var(--ctp-latte-surface2-raw);
      --ov-0-raw: var(--ctp-latte-overlay0-raw);
      --ov-1-raw: var(--ctp-latte-overlay1-raw);
      --ov-2-raw: var(--ctp-latte-overlay2-raw);
      --tx-0-raw: var(--ctp-latte-subtext0-raw);
      --tx-1-raw: var(--ctp-latte-subtext1-raw);
      --tx-2-raw: var(--ctp-latte-text-raw);
      --ac-0-raw: 129, 120, 238;
      --ac-1-raw: var(--ctp-latte-lavender-raw);
      --ac-2-raw: var(--ctp-latte-mauve-raw);
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
