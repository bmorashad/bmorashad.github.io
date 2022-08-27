<script>
	export let darkMode = false;
	import { works, socialLinks } from '/src/data.json';
	import ExternalLink from '../components/ExternalLink.svelte';
	import ExternalLinkHover from '../components/ExternalLinkHover.svelte';

	let gitlabDetails = socialLinks.find((link) => {
		return link.name.toLowerCase() === 'gitlab';
	});
	let githubDetails = socialLinks.find((link) => {
		return link.name.toLowerCase() === 'github';
	});
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
				<a href={work.link} class="work-heading" target="_blank">
					<div class="work-name-link">
						<h3 class="work-name">{work.name}</h3>
					</div>
					<div class="external-link-icon">
						<ExternalLink {darkMode} />
					</div>
				</a>
				<div class="work-des">{work.description}</div>
			</div>
		{/each}
		<div class="more-works-card">
			<h3 class="more-works-title">See More...</h3>
			<div class="more-works-links">
				<a href={gitlabDetails.link} target="_blank" class="gitlab-more-works">
					<img src={gitlabDetails.iconColored} alt={gitlabDetails.name} />
				</a>
				<a href={githubDetails.link} target="_blank" class="github-more-works">
					<img src={githubDetails.iconColored} alt={gitlabDetails.name} />
				</a>
			</div>
		</div>
	</div>
</section>

<style>
	.more-works-card {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		padding: 3rem;
		box-shadow: inset var(--card-shadow);
		background: rgba(255, 255, 255, 0.2);
		gap: 25px;
		border-radius: 10px;
		border: var(--work-card-border);
		max-height: max-content;
	}

	.more-works-title {
		color: var(--content-des-color);
		font-size: 2.2rem;
	}

	.more-works-links img {
		width: 6rem;
		/* border: 2px solid; */
		border-radius: 10px;
	}

	.more-works-links img:hover {
		transition: 0.15s;
		transform: translateY(-2.5px);
	}
	.more-works-links img:active {
		transition: 0.1s;
		transform: translateY(0px);
	}

	.gitlab-more-works img {
		background: var(--gitlab-color);
	}
	.github-more-works img {
		background: var(--github-color);
	}

	.gitlab-more-works img:hover {
		/* box-shadow: 0px 0px 15px hsl(29deg 54% 71%); */
	}
	.github-more-works img:hover {
		/* box-shadow: 0px 0px 15px hsl(20deg 15% 54%); */
	}

	.more-works-links {
		display: flex;
		justify-content: center;
		gap: 20%;
	}

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
		margin-bottom: clamp(45px, 5vw, 85px);
	}
	.works-wrapper {
		display: grid;
		grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
		grid-gap: 20px;
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
		display: flex;
		align-items: center;
		position: relative;
		color: var(--work-heading-color);
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
	.external-link-icon {
		display: flex;
		margin-left: auto;
		position: absolute;
		right: 18px;
		top: 18px;
		/* padding: 0.8rem; */
		/* background: #2c719b; */
		border-radius: 50%;
	}
	.work-name-link {
		color: var(--work-heading-color);
	}

	.work-heading:hover {
		text-decoration-thickness: 2px;
	}
	.work-heading:hover > .external-link-icon {
		right: 16px;
		top: 16px;
		transition: 50ms;
	}
	@media only screen and (max-width: 1000px) {
		.works-wrapper {
			grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
			grid-gap: 15px 15px;
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
		.works-wrapper {
			grid-gap: 12px 12px;
		}
	}
</style>
