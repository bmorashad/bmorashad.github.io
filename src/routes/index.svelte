<script>
	import profilePic from '$lib/assets/profile_pic.png';
	import gitlab from '$lib/assets/gitlab.svg';
	import github from '$lib/assets/github.svg';
	import linkedin from '$lib/assets/linkedin.svg';
	import medium from '$lib/assets/medium.svg';
	import hello from '$lib/assets/hello.svg';
	import scroll from '$lib/assets/scroll-down.gif';
	import sun from '$lib/assets/sun.png';
</script>

<div class="nav-container">
	<nav>
		<a link href="#skills" class="menu-link">Skills</a>
		<a link href="#experience" class="menu-link">Experience</a>
		<a link href="#projects" class="menu-link">Projects</a>
	</nav>
</div>

<section class="profile-section">
	<div class="profile-container">
		<div class="profile-wrapper">
			<div class="profile-picture-container">
				<div class="profile-picture-clip">
					<div class="profile-picture-wrapper">
						<img class="profile-pic" src={profilePic} alt="profile" />
					</div>
				</div>
				<div class="profile-picture-bg" />
			</div>
			<div class="profile-detail">
				<h4 class="profile-role regular margin-0">Software Engineer</h4>
				<h1 class="profile-name semi-bold">Hello, I'm Rashad.</h1>
				<p class="profile-description light">
					<span class="profile-des-left"
						>I'm a <span class="profile-des-hsl medium">Linux</span> enthusiast with a
						<span>
							<br /><span class="profile-des-right"
								>knack for <span class="profile-des-hsl medium">backend development.</span><span
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
		<div class="scroll-dwn">
			<img src={scroll} alt="gitlab" />
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
</section>

<style>
	.scroll-dwn {
		grid-area: 3 / 2 / 4 / 3;
		justify-self: center;
		padding: 10rem 0;
	}
	.scroll-dwn img {
		width: 10rem;
	}
	.nav-container {
		height: 50px;
		/* display: flex; */
		/* justify-content: center; */
	}
	nav {
		display: flex;
		justify-content: center;
		z-index: 1;
		grid-area: 1 / 1 / 4 / 4;
		align-self: center;
		background: #0075ff;
		align-items: center;
	}
	.menu-link {
		/* border-radius: 21px; */
		/* padding: 8px 30px; */
		font-size: 2rem;
		font-weight: 700;
		/* color: #0075ff; */
		color: #e9f3ff;
		padding: 1rem 2.6rem;
		text-decoration: none;
	}
	.menu-link:hover {
		color: #fff;
		text-decoration: underline;
		transition: 0.1s;
	}
	.profile-section {
		/* height: 100%; */
		/* background: linear-gradient(180deg, rgba(195, 239, 249, 0.28) 0%, rgba(244, 248, 251, 0) 100%), #F4F8FB; */
		/* margin-top: 10rem; */
		padding-top: 10rem;
	}
	.profile-container {
		display: grid;
		grid-template-columns: 1fr auto 1fr;
		grid-template-rows: repeat(3, auto);
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
	.profile-link {
		display: flex;
		align-items: center;
		text-decoration: none;
	}
	.profile-link img {
		width: 2.2rem;
	}
	.profile-link {
		padding: 0.5rem;
		padding-right: 1.5rem;
		margin-right: 2rem;
		border-radius: 5px;
		font-weight: 500;
		font-size: 1.2rem;
	}
	.profile-link:last-child {
		margin-right: 0;
	}

	.gitlab {
		color: var(--profile-link-gitlab-color);
		background: var(--profile-link-gitlab-bg-color);
		border: 2px solid var(--profile-link-gitlab-color);
	}
	.github {
		color: var(--profile-link-github-color);
		background: var(--profile-link-github-bg-color);
		border: 2px solid var(--profile-link-github-color);
	}
	.linkedin {
		color: var(--profile-link-linkedin-color);
		background: var(--profile-link-linkedin-bg-color);
		border: 2px solid var(--profile-link-linkedin-color);
	}
	.medium-blog {
		color: var(--profile-link-medium-color);
		background: var(--profile-link-medium-bg-color);
		border: 2px solid var(--profile-link-medium-color);
	}
	.profile-link:hover {
		transition: 0.2s;
	}

	.gitlab:hover {
		color: #fff;
		background: var(--profile-link-gitlab-color);
		border: 2px solid var(--profile-link-gitlab-color);
	}
	.github:hover {
		color: #fff;
		background: var(--profile-link-github-color);
		border: 2px solid var(--profile-link-github-color);
	}
	.linkedin:hover {
		background: var(--profile-link-linkedin-color);
		color: #fff;
		border: 2px solid var(--profile-link-linkedin-color);
	}
	.medium-blog:hover {
		background: var(--profile-link-medium-color);
		color: #fff;
		border: 2px solid var(--profile-link-medium-color);
	}

	.profile-link:active {
		transform: translateY(0px);
		transition: ease-out 0.1s;
	}

	.profile-des-hsl {
		color: var(--profile-des-hsl-color);
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
		font-size: 2rem;
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

	.profile-wrapper {
		display: flex;
		align-items: center;
		justify-content: center;
		grid-area: 2 / 2 / 3 / 3;
		padding-top: 1vh;
		padding-bottom: 1vh;
	}
	.profile-picture-container {
		position: relative;
	}
	.profile-picture-bg {
		background: linear-gradient(
				180deg,
				rgba(6, 202, 84, 0.2) 0%,
				rgba(140, 255, 248, 0.2) 33.33%,
				rgba(255, 0, 184, 0.26) 66.67%,
				rgba(1, 179, 255, 0.2) 100%
			),
			linear-gradient(
				180deg,
				#2dfff2 -83.05%,
				rgba(63, 243, 255, 0.796875) 30.63%,
				rgba(135, 147, 255, 0) 126.82%
			);
	}
	.profile-picture-clip {
		padding: 50px 50px 0 50px;
		clip-path: circle(110px at center);
		/* background: linear-gradient(
				180deg,
				rgba(6, 202, 84, 0.2) 0%,
				rgba(140, 255, 248, 0.2) 33.33%,
				rgba(255, 0, 184, 0.26) 66.67%,
				rgba(1, 179, 255, 0.2) 100%
			),
			linear-gradient(
				180deg,
				#2dfff2 -83.05%,
				rgba(63, 243, 255, 0.796875) 30.63%,
				rgba(135, 147, 255, 0) 126.82%
			); */
	}

	.profile-picture-wrapper {
		/* border-radius: 50%; */
	}

	img.profile-pic {
		width: 100%;
		max-width: calc(9vw + 40px);
		min-width: 190px;
		/* border-radius: 50%; */
	}
</style>
