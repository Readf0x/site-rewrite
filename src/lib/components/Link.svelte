<script lang="ts">
  import downArrow from "$lib/icons/downarrow.svg?raw"

  type Link = {
    name: string
    route?: string
    value:
      | string
      | {
          name: string
          value: string
        }[]
  }
  export let link: Link;
</script>

{#if typeof link.value == "string"}
  <a href={link.value}>{link.name}</a>
{:else if Array.isArray(link.value)}
  <div class="link-group">
    <a class="link-group-button" href={link.route}
      >{link.name}<span>{@html downArrow}</span></a
    >
    <div class="link-group-content">
      {#each link.value as groupItem}
        <a href={groupItem.value}>{groupItem.name}</a>
      {/each}
    </div>
  </div>
{/if}

<style lang="scss">
  a {
    text-decoration: none;
    color: var(--tx-2);
    font-size: 25px;
    text-shadow: 0 0 4px var(--tx-2);
    transition: 0.4s;
    text-transform: uppercase;
    &:hover {
      color: var(--ac-1);
      text-shadow: 0 0 4px var(--ac-1);
    }
    &:focus {
      color: var(--ac-1);
      text-shadow: 0 0 4px var(--ac-1);
      outline: none;
    }
    @media (max-width: 650px) {
      font-size: 7vw;
      height: 100%;
      display: flex;
      align-items: center;
    }
  }
  .link-group {
    position: relative;
    &:hover {
      .link-group-content {
        max-height: 75vh;
      }
      .link-group-button span {
        filter: drop-shadow(0 0 0.1em var(--ac-1));
        transform: rotate(0deg);
      }
    }
  }
  .link-group-button {
    display: flex;
    align-items: center;
    span {
      display: flex;
      height: fit-content;
      width: fit-content;
      filter: drop-shadow(0 0 0.1em var(--tx-2));
      transform: rotate(180deg);
      transition: transform 0.4s;
    }
  }
  .link-group-content {
    display: flex;
    position: absolute;
    flex-direction: column;
    // gap: .4em;
    margin-top: 0.1em;
    overflow: hidden;
    max-height: 0px;
    height: fit-content;
    border-radius: 4px;
    background: var(--sf-0);
    transition: max-height 1s;
    left: -0.7em;
    min-width: calc(100% + 0.7em);
    a {
      padding: 0.1em 0.5em;
      margin: 0;
      &:first-of-type {
        padding-top: 0.2em;
      }
      &:last-of-type {
        padding-bottom: 0.2em;
      }
    }
  }
</style>

