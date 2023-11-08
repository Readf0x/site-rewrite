<script lang="ts">
	export let data
</script>

<svelte:head>
	<title>{data.meta.title}</title>
	<meta property="og:type" content="article" />
	<meta property="og:title" content={data.meta.title} />
</svelte:head>

<article class="post" data-post-id="{data.meta.title.toLowerCase().replaceAll(" ", "-")}-{data.meta.date}">
	<div class="meta-wrapper">
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
			margin: 6vw auto 0;
			display: flex;
			align-items: flex-end;
			justify-content: space-between;
			flex-grow: 1;
			.meta-title {
				font-size: 4vw;
				text-shadow: 0 0 .1em var(--tx-0);
				margin: 0;
			}
			.meta-date {
				font-size: 1.25vw;
				margin-bottom: .5vw;
			}
		}
		@media (max-width: 650px) {
			.meta-title {
				font-size: 15vw;
			}
		}
	}
</style>
