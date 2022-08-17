<script>
	import Skills from '$lib/Skills.svelte';
	import profilePic from '$lib/assets/profile_pic.png';
	import gitlab from '$lib/assets/gitlab.svg';
	import github from '$lib/assets/github.svg';
	import linkedin from '$lib/assets/linkedin.svg';
	import medium from '$lib/assets/medium.svg';
	import hello from '$lib/assets/hello.svg';
	import scroll from '$lib/assets/scroll-down.gif';
	import scrollDark from '$lib/assets/scroll-down-dark.gif';
	import ScrollDown from '$lib/ScrollDown.svelte';
	import sun from '$lib/assets/sun.svg';
	import moon from '$lib/assets/moon.svg';

	let darkMode = false;
	let toggleMode = () => {
		let dataTheme = document.documentElement.getAttribute('data-theme');
		if (dataTheme != 'dark') {
			document.documentElement.setAttribute('data-theme', 'dark');
		} else {
			document.documentElement.setAttribute('data-theme', '');
		}
		darkMode = !darkMode;
	};
</script>

<div class="nav-container">
	<nav>
		<a link href="#skills" class="menu-link">Skills</a>
		<a link href="#experience" class="menu-link">Experience</a>
		<a link href="#projects" class="menu-link">Projects</a>
		<div class="theme-toggle" on:click={toggleMode}>
			{#if !darkMode}
				<img class="dark-theme-toggle" src={moon} alt="" />
			{:else}
				<img class="light-theme-toggle" src={sun} alt="" />
			{/if}
		</div>
	</nav>
</div>

<section class="profile-section">
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
					<h1 class="profile-name semi-bold">Hello, I'm Rashad.</h1>
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
				<div class="profile-hello display-none">
					<img src={hello} alt="hello" />
				</div>
			</div>
		</div>
		<div class="scroll-dwn">
			<ScrollDown />
		</div>
	</div>
	<div class="profile-wave-devider display-none">
		<svg
			data-name="Layer 1"
			xmlns="http://www.w3.org/2000/svg"
			viewBox="0 0 1200 120"
			preserveAspectRatio="none"
		>
			<path
				d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"
				class="shape-fill"
			/>
		</svg>
	</div>
	<div class="content">
		<Skills />
	</div>
</section>

<style>
	.light-theme-toggle {
		width: 3rem;
		opacity: 0.85;
		cursor: pointer;
		margin-left: 1rem;
	}
	.light-theme-toggle:hover {
		opacity: 1;
	}
	.dark-theme-toggle {
		width: 3rem;
		opacity: 0.95;
		cursor: pointer;
		margin-left: 1rem;
	}
	.dark-theme-toggle:hover {
		opacity: 1;
	}
	.scroll-dwn {
		grid-area: 2 / 2 / 3 / 3;
		justify-self: center;
		padding: 0rem 0;
	}
	.scroll-dwn img {
		width: 10rem;
	}
	.nav-container {
		height: 70px;
		/* display: flex; */
		/* justify-content: center; */
	}
	nav {
		display: flex;
		justify-content: center;
		z-index: 1;
		/* grid-area: 1 / 1 / 4 / 4; */
		align-self: center;
		background: var(--navbar-bg-color);
		align-items: center;
		box-shadow: var(--shadow-elevation-low);
		border-bottom: 3px solid var(--navbar-border-color);
		height: 100%;
	}
	.menu-link {
		/* border-radius: 21px; */
		/* padding: 8px 30px; */
		font-size: 2rem;
		font-weight: 700;
		/* color: #0075ff; */
		color: var(--menu-link-color);
		padding: 1rem 2.6rem;
		text-decoration: none;
	}
	.menu-link:hover {
		color: var(--menu-link-hover-color);
		text-decoration: underline;
		transition: 0.1s;
	}
	.profile-section {
		/* height: 100%; */
		/* background: linear-gradient(180deg, rgba(195, 239, 249, 0.28) 0%, rgba(244, 248, 251, 0) 100%), #F4F8FB; */
		/* margin-top: 10rem; */
		/* padding-top: 18rem; */
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
	.theme-mode {
		/* display: flex; */
		/* justify-content: end; */
		/* right: 5rem; */
		/* top: 3rem; */
		/* position: absolute; */
		/* grid-area: 1 / 2 / 2 / 3; */
		grid-area: 2 / 2 / 3 / 3;
		justify-self: end;
		/* align-self: center; */
	}
	.theme-mode img {
		width: 4rem;
	}
	.profile-hello {
		/* margin-left: 13rem; */
	}
	.profile-hello img {
		width: 100%;
		max-width: calc(5vw + 50px);
		min-width: 100px;
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

	.profile-greeting {
		font-size: 2.6rem;
	}
	.profile-wave-devider {
		position: absolute;
		bottom: 0;
		left: 0;
		width: 100%;
		overflow: hidden;
		line-height: 0;
		transform: rotate(180deg);
	}

	.profile-wave-devider svg {
		position: relative;
		display: block;
		width: calc(148% + 1.3px);
		height: 235px;
	}

	.profile-wave-devider .shape-fill {
		fill: #f4f8fb;
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
		min-width: 190px;
		filter: var(--profile-picture-filter);
		/* border-radius: 50%; */
	}
</style>
