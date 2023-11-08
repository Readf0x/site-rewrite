<script lang="ts">
	export let data
</script>

<svelte:head>
	<title>{data.meta.title}</title>
	<meta property="og:type" content="article" />
	<meta property="og:title" content={data.meta.title} />
</svelte:head>

<article class="post" data-post-id="{data.meta.title.toLowerCase().replaceAll(" ", "-")}-{data.meta.date}">
	<hgroup class="meta">
		<h1 class="meta-title">{data.meta.title}</h1>
		{#if data.meta.date}
		<p class="meta-date">{new Date(data.meta.date).toLocaleDateString(navigator.language, {
			weekday: "long",
			day: "numeric",
			month: "long",
			year: "numeric"
		})}</p>
		{/if}
	</hgroup>
	<div class="page-content">
		<svelte:component this={data.content} />
	</div>
</article>

<style lang="scss">
	.meta {
		max-width: 900px;
		margin: 6vw auto 1vw;
		display: flex;
		align-items: flex-end;
		justify-content: space-between;
		.meta-title {
			font-size: 4vw;
			text-shadow: 0 0 .1em var(--tx-0);
			margin: 0;
		}
		.meta-date {
			font-size: 1.25vw;
			margin-bottom: .5vw;
		}
		&::before {
			content: "";
			position: absolute;
			left: 0;
			top: 0;
			width: 100vw;
			height: 13vw;
			background: radial-gradient(
				circle at 7vw 7vw,
				rgba(var(--ac-0-raw), 0.3) 0%,
				rgba(var(--ac-0-raw), 0) 30%
				),
				var(--bg-0);
			display: block;
			// border-bottom: 3px solid var(--ov-0);
			z-index: -1;
		}
	}
</style>
