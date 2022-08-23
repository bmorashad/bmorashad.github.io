<script>
	export let darkMode = false;
	import ExternalLink from '$lib/ExternalLink.svelte';
	import ExternalLinkHover from '$lib/ExternalLinkHover.svelte';

	const works = [
		{
			name: 'Genimen',
			description: 'A machine learning group project that analysis mobile phone reviews',
			link: 'https://github/bmorashad/project-genimen'
		},
		{
			name: 'Google batch translate',
			description:
				'Simple script that lets you translate  batch of text in json format using  Google Translate API. ',
			link: 'https://github/bmorashad/dev-scripts/'
		},
		{
			name: 'Dot Files',
			description:
				'This contains my linux scripts, and configuration files for neovim,  vscode, tmux, bash, fish, kitty, etc',
			link: 'https://github/bmorashad/dotfiles'
		},
		{
			name: 'PKCE OAuth in React',
			description:
				'This is a simple react project for reference purposes, that implements  PKCE OAuth flow from scratch without any SDK',
			link: 'https://github/bmorashad/dotfiles'
		}
	];
</script>

<section class="works-container">
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
		margin-top: 8rem;
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
		grid-gap: 40px;
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
		font-size: 1.8rem;
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
	}
	a.work-name-link {
		color: var(--work-heading-color);
	}
</style>
