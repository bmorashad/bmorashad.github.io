<script>
	import Skills from '$lib/Skills.svelte';
	import sun from '$lib/assets/sun.svg';
	import moon from '$lib/assets/moon.svg';
	import Education from '$lib/Education.svelte';
	import ProfileIntro from '$lib/ProfileIntro.svelte';
	import Footer from '$lib/Footer.svelte';
	import Works from '../lib/Works.svelte';
	import Contact from '../lib/Contact.svelte';

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
		<a link href="#works" class="menu-link">Works</a>
		<a link href="#contact" class="menu-link">Contact</a>
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
	<ProfileIntro />
	<div class="content">
		<Skills />
		<Works {darkMode} />
		<Contact {darkMode} />
	</div>
</section>

<Footer />

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
</style>
