<script>
	import profilePic from '$lib/assets/profile_pic.png';
	import gitlab from '$lib/assets/gitlab.svg';
	import github from '$lib/assets/github.svg';
	import linkedin from '$lib/assets/linkedin.svg';
	import medium from '$lib/assets/medium.svg';
	import scroll from '$lib/assets/scroll-down.gif';
	import scrollDark from '$lib/assets/scroll-down-dark.gif';
	import ScrollDown from '$lib/ScrollDown.svelte';
</script>

<div class="profile-container">
	<div class="profile-wrapper">
		<div class="profile-content">
			<div class="profile-picture-clip">
				<div class="profile-picture-wrapper">
					<img class="profile-pic" src={profilePic} alt="profile" />
				</div>
			</div>
			<div class="profile-detail">
				<h4 class="profile-role regular margin-0">Software Engineer</h4>
				<h1 class="profile-name semi-bold">Hello, I'm Rashad!</h1>
				<p class="profile-description light">
					<span class="profile-des-left"
						><span class="profile-des-hsl regular">Linux & OSS</span> enthusiast with a
						<span>
							<br /><span class="profile-des-right"
								>knack for <span class="profile-des-hsl regular">backend development.</span><span
								/></span
							></span
						></span
					>
				</p>
				<div class="profile-link-container">
					<a href="https://gitlab.com/bmorashad" target="_blank" class="profile-link gitlab">
						<img src={gitlab} alt="gitlab" />
						Gitlab
					</a>
					<a href="https://github.com/bmorashad" target="_blank" class="profile-link github">
						<img src={github} alt="gitlab" />
						Github
					</a>
					<a href="https://linkedin.com/bmorashad" target="_blank" class="profile-link linkedin">
						<img src={linkedin} alt="gitlab" />
						LinkedIn
					</a>
					<a href="https://medium.com/bmorashad" target="_blank" class="profile-link medium-blog">
						<img src={medium} alt="gitlab" />
						Medium
					</a>
				</div>
			</div>
		</div>
	</div>
	<div class="scroll-dwn">
		<ScrollDown />
	</div>
</div>

<style>
	.scroll-dwn {
		grid-area: 2 / 2 / 3 / 3;
		justify-self: center;
		padding: 0rem 0;
	}
	.profile-container {
		display: grid;
		grid-template-columns: 1fr auto 1fr;
		grid-template-rows: minmax(500px, auto) minmax(200px, auto);
		height: calc(100vh - 80px);
		min-height: 650px;
		/* padding-top: 50px; */
		/* padding-bottom: 180px; */
	}
	.profile-link-container {
		display: flex;
		/* flex-direction: column; */
		grid-area: 2 / 2 / 3 / 3;
		align-self: end;
		justify-self: center;
		margin-top: 5rem;
	}
	.profile-link img {
		margin-right: 1rem;
	}
	.profile-link img {
		width: 2.2rem;
	}
	.profile-link {
		padding: 0.6rem;
		padding-right: 1.7rem;
		margin-right: 2rem;
		border-radius: 5px;
		font-weight: 500;
		font-size: 1.4rem;
		display: flex;
		align-items: center;
		text-decoration: none;
	}
	.profile-link:last-child {
		margin-right: 0;
	}

	.gitlab {
		color: var(--profile-link-gitlab-color);
		background: var(--profile-link-gitlab-bg-color);
		border: var(--profile-link-gitlab-border);
	}
	.github {
		color: var(--profile-link-github-color);
		background: var(--profile-link-github-bg-color);
		border: var(--profile-link-github-border);
	}
	.linkedin {
		color: var(--profile-link-linkedin-color);
		background: var(--profile-link-linkedin-bg-color);
		border: var(--profile-link-linkedin-border);
	}
	.medium-blog {
		color: var(--profile-link-medium-color);
		background: var(--profile-link-medium-bg-color);
		border: var(--profile-link-medium-border);
	}
	.profile-link:hover {
		transition: 0.2s;
	}

	.gitlab:hover {
		color: var(--profile-link-color-hover);
		background: var(--profile-link-gitlab-bg-color-hover);
		border: var(--profile-link-gitlab-border-hover);
	}
	.github:hover {
		color: var(--profile-link-color-hover);
		background: var(--profile-link-github-bg-color-hover);
		border: var(--profile-link-github-border-hover);
	}
	.linkedin:hover {
		color: var(--profile-link-color-hover);
		background: var(--profile-link-linkedin-bg-color-hover);
		border: var(--profile-link-linkedin-border-hover);
	}
	.medium-blog:hover {
		color: var(--profile-link-color-hover);
		background: var(--profile-link-medium-bg-color-hover);
		border: var(--profile-link-medium-border-hover);
	}

	.profile-link:active {
		transform: translateY(0px);
		transition: ease-out 0.1s;
	}

	.profile-des-hsl {
		color: var(--profile-des-hsl-color);
		/* background: #fff; */
	}
	.profile-des-right {
		padding-left: 6rem;
	}
	.profile-description {
		font-size: 2.2rem;
		color: var(--profile-des-color);
	}
	.profile-detail {
		padding: 0 0rem 0rem 0rem;
		margin-left: 3rem;
		margin-right: 3rem;
	}
	.profile-role {
		font-size: 2.2rem;
		color: var(--profile-role-color);
	}
	.profile-name {
		font-size: 4.4rem;
		color: var(--profile-name-color);
		margin: 1rem 0 3rem 0;
	}
	.profile-content {
		display: flex;
		align-items: center;
		justify-content: center;
		/* padding-top: 100px; */
	}

	.profile-wrapper {
		grid-area: 1 / 2 / 2 / 3;
		align-self: center;
		justify-self: center;
		/* padding-bottom: 1vh; */
	}
	.profile-picture-clip {
		padding: 50px 50px 0 50px;
		clip-path: circle(110px at center);
		background: var(--profile-picture-clip-bg-gradient-color);
	}

	.profile-picture-wrapper {
		/* border-radius: 50%; */
	}

	img.profile-pic {
		width: 100%;
		max-width: calc(9vw + 40px);
		min-width: 150px;
		filter: var(--profile-picture-filter);
		/* border-radius: 50%; */
	}
	@media only screen and (max-width: 850px) {
		.profile-content {
			align-items: center;
			flex-direction: column;
			justify-content: center;
		}
		.profile-picture-clip {
			padding: 42px 50px 0 50px;
			clip-path: circle(83px at center);
		}
		.profile-detail {
			display: flex;
			flex-direction: column;
			align-items: center;
		}
		.profile-description {
			text-align: center;
		}
		.profile-des-right {
			padding-left: 0;
		}
		.profile-wrapper {
			align-self: center;
		}
		.scroll-dwn {
			/* grid-area: 2 / 2 / 3 / 3; */
			grid-area: 1 / 2 / 2 / 3;
			align-self: end;
			top: 5rem;
			position: relative;
		}
		.profile-container {
			grid-template-rows: minmax(500px, auto);
		}
	}
</style>
