<script lang="ts">
  export let img: string = ""
  export let href: string | undefined = undefined
</script>

<a class="card" {href}>
  {#if $$slots.title}
    <h1>
      <slot name="title" />
    </h1>
  {/if}
  {#if img}
    <!-- svelte-ignore a11y-missing-attribute -->
    <div class="img-wrapper">
      <img src={img} />
    </div>
  {/if}
  <div class="content">
    <slot />
  </div>
</a>

<style lang="scss">
  .card {
    color: inherit;
    text-decoration: inherit;
    background-color: var(--sf-0);
    display: inline-block;
    border-radius: 6px;
    margin: 0 0 0.75em;
    flex-basis: 100%;
    padding: 2px;
    overflow: hidden;
    @media (min-width: 650px) {
      &:hover .img-wrapper img {
        transform: scale(1.25);
      }
    }
    h1 {
      text-shadow: none;
      font-size: 1.5em;
      text-align: center;
      margin: calc(0.2em - 2px) 0 0.2em;
      @media (max-width: 650px) {
        margin: 0;
      }
    }
    .img-wrapper {
      width: 100%;
      height: 8em;
      display: block;
      border-radius: 4px;
      overflow: hidden;
      img {
        object-fit: cover;
        width: 100%;
        height: 100%;
        transition: transform 0.4s;
      }
    }
    .content {
      background: var(--bg-2);
      border-radius: 4px;
    }
    :global(p) {
      margin: 0 !important;
    }
  }
</style>
