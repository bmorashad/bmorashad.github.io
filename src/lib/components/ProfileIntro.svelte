<script>
	import { socialLinks } from '/src/data.json';
	import profilePic from '../../assets/profile_pic.png';
	import { getImageSrc } from '../utils/utils';
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
						>I'm a <span class="profile-des-hsl regular">Linux </span> enthusiast with a
						<span>
							<br /><span class="profile-des-right"
								>knack for <span class="profile-des-hsl regular">backend development.</span><span
								/></span
							></span
						></span
					>
				</p>
				<div class="profile-link-container">
					{#each socialLinks as link}
						<a href={link.link} target="_blank" class={`profile-link ${link.className}`}>
							<img src={getImageSrc(link.iconColored)} alt={link.name} />
							<span class="profile-link-name">{link.name}</span>
						</a>
					{/each}
				</div>
			</div>
		</div>
	</div>
	<!-- <div class="scroll-dwn"> -->
	<!-- 	<ScrollDown /> -->
	<!-- </div> -->
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
		/* grid-template-rows: minmax(500px, auto) minmax(200px, auto); */
		grid-template-rows: auto;
		/* height: calc(100vh - 80px); */
		/* min-height: 650px; */
		/* padding-top: 50px; */
		/* padding-bottom: 180px; */
		margin-top: clamp(100px, 6.3vw, 200px);
		margin-bottom: 135px;
		margin-bottom: clamp(135px, 5vw, 200px);
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
		width: 2.6rem;
	}
	.profile-link {
		padding: 0.5rem;
		padding-right: 2rem;
		padding-left: 0.6rem;
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
		display: flex;
    flex-direction: column;
    align-items: center;
    margin-right: 0;
    margin-left: 0;
    margin-top: 3rem;
	}
	.profile-role {
		font-size: 2.5rem;
		color: var(--profile-role-color);
	}
	.profile-name {
		font-size: 5.4rem;
		color: var(--profile-name-color);
		margin: 0.5rem 0 3rem 0;
	}
	.profile-content {
		display: flex;
		align-items: center;
		justify-content: center;
			flex-direction: column;
		/* padding-top: 100px; */
	}

	.profile-wrapper {
		grid-area: 1 / 2 / 2 / 3;
		align-self: center;
		justify-self: center;
		/* padding-bottom: 1vh; */
	}
	.profile-picture-clip {
		padding: 48px 85px 0;
		clip-path: circle(119px at center);
		background: var(--profile-picture-clip-bg-gradient-color);
	}

	.profile-picture-wrapper {
		/* border-radius: 50%; */
	}

	img.profile-pic {
		width: 100%;
		max-width: calc(18vw + -154px);
		min-width: 190px;
		filter: var(--profile-picture-filter);
		/* border-radius: 50%; */
	}
	@media only screen and (max-width: 1000px) {
		.profile-picture-clip {
			padding: 45px 50px 0;
			clip-path: circle(90px at center);
		}
		img.profile-pic {
			max-width: calc(7vw + 20px);
			min-width: 150px;
		}
		.profile-role {
			font-size: 2.2rem;
		}
		.profile-name {
			font-size: 4.4rem;
		}
		.profile-picture-clip {
			padding: 60px 50px 0 50px;
			clip-path: circle(100px at center);
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
		.profile-container {
			/* grid-template-rows: minmax(600px, auto) minmax(200px, auto); */
			/* grid-template-rows: minmax(475px, auto) minmax(200px, auto); */
			/* grid-gap: 30px 0px; */
			/* height: auto; */
		}
		img.profile-pic {
			min-width: 150px;
		}
	}
	@media only screen and (max-width: 850px) {
		.profile-container {
			grid-template-columns: 1fr auto 1fr;
			/* grid-template-rows: minmax(475px, auto) auto; */
			/* height: calc(100vh - 80px); */
			/* min-height: 650px; */
			/* padding-top: 50px; */
			/* padding-bottom: 180px; */
			/* margin-top: 100px; */
		}
	}
	@media only screen and (max-width: 650px) {
		.profile-container {
			grid-template-columns: auto;
			grid-template-rows: auto auto;
			/* height: auto; */
		}
		.profile-wrapper {
			grid-area: 1 / 1 / 2 / 2;
		}
		.scroll-dwn {
			grid-area: 2 / 1 / 3 / 2;
		}
		.profile-name {
			font-size: 4.2rem;
			max-width: 8ch;
			text-align: center;
		}
		.profile-description {
			font-size: 2rem;
		}
		.profile-link-name {
			display: none;
		}
		.profile-link img {
			width: 3rem;
			margin-right: 0;
		}
		.profile-link {
			padding: 0.6rem;
			padding-right: 0.6rem;
		}
		.profile-link-container {
			width: 100%;
			justify-content: center;
		}
		.profile-picture-clip {
			padding: 35px 50px 0 50px;
			clip-path: circle(70px at center);
		}
		img.profile-pic {
			min-width: 130px;
		}
		.profile-role {
			font-size: 1.8rem;
		}
	}
	@media only screen and (max-width: 650px) {
		.profile-name {
			/* font-size: 4.4rem; */
			max-width: 8ch;
			text-align: center;
		}
	}
	@media only screen and (max-width: 450px) {
		.profile-name {
			font-size: 4rem;
		}
		.scroll-dwn {
			display: none;
			height: 0px;
		}
		.profile-container {
			height: auto;
			grid-template-rows: auto;
			align-content: baseline;
			margin-top: 50px;
			margin-bottom: 100px;
			min-height: auto;
		}
	}
</style>
