<script>
	export let darkMode = false;
	import { works } from '../../public/data.json';
	import ExternalLink from '../lib/ExternalLink.svelte';
	import ExternalLinkHover from '../lib/ExternalLinkHover.svelte';
</script>

<section class="works-container" id="works">
	<div class="works-content-details">
		<h2 class="content-title content-title-works text-center">
			Take a look at some of <span class="content-title-hsl2">my work</span>
		</h2>
		<h5 class="content-des content-works-des regular text-center">
			I’ve build some projects/scripts and configurations. Most of them are open source and you can
			have a look
		</h5>
	</div>
	<div class="works-wrapper">
		{#each works as work}
			<div class="work-card">
				<div class="work-heading">
					<a href={work.link} class="work-name-link">
						<h3 class="work-name">{work.name}</h3>
					</a>
					<a href={work.link} class="external-link-icon">
						<ExternalLink {darkMode} />
					</a>
				</div>
				<div class="work-des">{work.description}</div>
			</div>
		{/each}
	</div>
</section>

<style>
	.works-container {
		display: grid;
		grid-template-columns: 1fr;
		justify-content: center;
		align-items: center;
		margin-top: 10rem;
	}
	.works-content-details {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		margin-bottom: 8rem;
	}
	.works-wrapper {
		display: grid;
		grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
		grid-gap: 30px;
	}
	.work-card {
		background: var(--work-card-bg-color);
		border: var(--work-card-border);
		border-radius: 10px;
		box-shadow: var(--card-shadow);
	}
	.work-card:hover {
		transform: translateY(-2px);
		transition: 200ms;
	}
	.work-name {
		margin-right: 2.5rem;
	}
	.work-heading {
		padding: 2rem 3rem;
		cursor: pointer;
	}
	.work-heading h3 {
		font-size: 1.9rem;
		max-width: 35ch;
	}
	.work-des {
		padding: 2rem 3rem;
		padding-top: 0;
		font-size: 1.6rem;
		color: var(--work-des-color);
	}
	.work-heading {
		display: flex;
		align-items: center;
		position: relative;
	}
	a.external-link-icon {
		display: flex;
		margin-left: auto;
		position: absolute;
		right: 18px;
		top: 18px;
		/* padding: 0.8rem; */
		/* background: #2c719b; */
		border-radius: 50%;
	}
	a.work-name-link {
		color: var(--work-heading-color);
	}
	.work-heading:hover > a.work-name-link {
		text-decoration-thickness: 2px;
	}
	.work-heading:hover > a.external-link-icon {
		right: 16px;
		top: 16px;
		transition: 50ms;
	}
	@media only screen and (max-width: 1000px) {
		.works-wrapper {
			grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
			grid-gap: 18px 20px;
		}
	}
	@media only screen and (max-width: 850px) {
		.works-container {
			margin-top: 8rem;
		}
		.work-heading h3 {
			font-size: 2rem;
		}
		.work-des {
			padding: 2.5rem 3rem;
			padding-top: 0;
		}
		.work-heading {
			padding: 2.5rem 3rem;
		}
		/* .works-wrapper {
			grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
			grid-gap: 20px;
		} */
	}
	@media only screen and (max-width: 500px) {
		.work-des {
			padding: 2rem 2rem;
			padding-top: 0;
		}
		.work-heading {
			padding: 2rem 2rem;
		}
		.works-container {
			margin-top: 5rem;
		}
	}
</style>
