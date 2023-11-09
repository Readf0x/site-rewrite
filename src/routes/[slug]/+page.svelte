<script lang="ts">
  export let data;
</script>

<svelte:head>
  <title>{data.meta.title}</title>
  <meta property="og:type" content="article" />
  <meta property="og:title" content={data.meta.title} />
</svelte:head>

<article
  class="post"
  data-post-id="{data.meta.title.toLowerCase().replaceAll(' ', '-')}-{data.meta.date}"
>
  <div class="meta-wrapper">
    <hgroup class="meta">
      <h1 class="meta-title">{data.meta.title}</h1>
      {#if data.meta.date}
        <p class="meta-date">
          {new Date(data.meta.date).toLocaleDateString(navigator.language, {
            weekday: "long",
            day: "numeric",
            month: "long",
            year: "numeric"
          })}
        </p>
      {/if}
    </hgroup>
  </div>
  <div class="page-content">
    <svelte:component this={data.content} />
  </div>
</article>

<style lang="scss">
  .meta-wrapper {
    width: 100vw;
    display: flex;
    margin: -50px 0 1vw;
    background: radial-gradient(
        circle at 7vw 7vw,
        rgba(var(--ac-0-raw), 0.3) 0%,
        rgba(var(--ac-0-raw), 0) 30%
      ),
      var(--bg-0);
    @media (max-width: 650px) {
      margin-top: -15vw;
    }
    .meta {
      max-width: 900px;
      margin: 75px auto 0;
      display: flex;
      align-items: flex-end;
      justify-content: space-between;
      flex-grow: 1;
      @media (max-width: 940px) {
        margin-left: 1em;
        margin-right: 1em;
      }
      @media (max-width: 650px) {
        margin-top: 16vw;
        flex-direction: column;
        align-items: flex-start;
        justify-content: flex-end;
      }
      .meta-title {
        font-size: 60px;
        text-shadow: 0 0 0.1em var(--tx-0);
        margin: 0;
        @media (max-width: 650px) {
          font-size: 15vw;
        }
      }
      .meta-date {
        font-size: 25px;
        margin: 0 0 5px;
        text-shadow: 0 0 0.25em var(--tx-0);
        @media (max-width: 650px) {
          font-size: 8vw;
          margin-top: 0.5vw;
        }
      }
    }
  }
</style>
