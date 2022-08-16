<script>
	import profilePic from '$lib/assets/profile_pic.png'
	import gitlab from '$lib/assets/gitlab.png'
	import github from '$lib/assets/github.png'
	import linkedin from '$lib/assets/linkedin.png'
	import medium from '$lib/assets/medium.png'
	import hello from '$lib/assets/hello.svg'
	import sun from '$lib/assets/sun.png'
</script>
<section class="profile-section">
	<div class="profile-container">
		<div class="theme-mode">
			<img src={sun} alt="theme-mode">
		</div> 
		<div class="profile-wrapper">
			<div class="profile-link-container">
				<div class="profile-link">
					<a href="">
						<img src={gitlab} alt="gitlab"> 
					</a>
				</div>
				<div class="profile-link">
					<a href="">
						<img src={github} alt="gitlab"> 
					</a>
				</div>
				<div class="profile-link">
					<a href="">
						<img src={linkedin} alt="gitlab"> 
					</a>
				</div>
				<div class="profile-link">
					<a href="">
						<img src={medium} alt="gitlab"> 
					</a>
				</div>
			</div>
			<img class="profile-pic" src={profilePic} alt="profile"/>
			<div class="profile-detail">
				<h6 class="profile-greeting regular margin-0">
					Hi I'm,
				</h6>
				<h1 class="profile-name semi-bold">
					Mohamed Rashad
				</h1>
				<h4 class="profile-role medium margin-0">
					Software Engineer
				</h4>
				<p class="profile-description light">
					<span class="profile-des-left">I'm a <span class="profile-des-hsl medium">Linux</span> enthusiast with a <span>
						<br/><span class="profile-des-right">knack for <span class="profile-des-hsl medium">backend development.</span><span>
				</p>
			</div>
			<div class="profile-hello">
				<img src={hello} alt="hello">
			</div>
		</div>
		<div class="profile-btn-container">
			<button class="profile-btn profile-btn-skills">Skills</button>
			<button class="profile-btn profile-btn-experience">Experience</button>
			<button class="profile-btn profile-btn-projects">Projects</button>
		</div>
	</div>
	<div class="profile-wave-devider">
		<svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
			<path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" class="shape-fill"></path>
		</svg>
	</div>
</section>
<style>
	.profile-btn-container {
		display: flex;
		justify-content: center;
		z-index: 1;
		/* grid-area: 3 / 2 / 4 / 3; */
		grid-area: 2 / 2 / 3 / 3;
		align-self: end;
		margin-left: 120px;
	}
	.profile-btn {
		box-shadow: 4px 4px 9px rgba(0, 73, 99, 0.2);
		border-radius: 21px;
		padding: 8px 30px;
		font-size: 20px;
		font-weight: 500;
		border: none;
		/* border: 1px solid #f8f8f8; */
	}
	.profile-btn-skills {
		background: #EAF8FF;
		color: #009583;

	}
	.profile-btn-experience {
		background: #13A1CE;
		color: #fff;
		margin-right: 45px;
		margin-left: 45px;
	}
	.profile-btn-projects {
		color:#8B70FF;
		background: #F8EFFF;

	}
	.profile-section {
		background: linear-gradient(180deg, rgba(61, 220, 255, 0.28) 0%, rgba(0, 97, 118, 0) 125.79%);
	}
	.profile-container {
		display: grid;
		grid-template-columns: 1fr auto 1fr;
		grid-template-rows: repeat(3, auto);
		padding-top: 50px;
		padding-bottom: 180px;
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
		min-width: 100px
	}
	.profile-link img {
		width: 2.9rem;
	}
	.profile-link-container {
		display: flex;
		flex-direction: column;
		margin-right: 9rem;
	}
	.profile-link-container > * {
		margin-bottom: 2.2rem;
	}
	.profile-link:last-child {
		margin-bottom: 0;
	}
	.profile-des-hsl {
		color: var(--profile-des-hsl-color);
	}
	.profile-des-right{
		padding-left: 6rem;
	}
	.profile-description {
		font-size: 2.2rem;
	}
	.profile-detail {
		padding: 0 10rem 6rem 10rem;
	}
	.profile-role {
		font-size: 2rem;
		color: var(--profile-role-color)

	}
	.profile-name {
		font-size: 4.4rem;
		color: var(--profile-name-color);
		margin: 3rem 0 0 0;
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
		fill: #F4F8FB;
	}

	.profile-wrapper {
		display: flex;
		align-items: center;
		justify-content: center;
		grid-area: 2 / 2 / 3 / 3;
		padding-top: 150px;
		padding-bottom: 70px;
	}


	img.profile-pic {
		width: 100%;
		max-width: calc(9vw + 50px);
		min-width: 190px
	}


</style>
