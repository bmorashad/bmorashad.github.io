<script>
	import sun from './assets/sun.svg';
	import moon from './assets/moon.svg';
	import hamburger from './assets/hamburger.svg';
	import close from './assets/close.svg';
	import Skills from './lib/components/Skills.svelte';
	import Education from './lib/components/Education.svelte';
	import ProfileIntro from './lib/components/ProfileIntro.svelte';
	import Footer from './lib/components/Footer.svelte';
	import Works from './lib/components/Works.svelte';
	import Contact from './lib/components/Contact.svelte';
	import { onMount } from 'svelte';
	import HamburgerMenuIcon from './lib/components/HamburgerMenuIcon.svelte';

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
	// onMount(async () => {
	// 	toggleMode();
	// });
	let displayHamburgerMenu = false;
	let hamburgerMenuIcon = hamburger;
	const hamburgerClick = () => {
		displayHamburgerMenu = !displayHamburgerMenu;
		if (displayHamburgerMenu) {
			hamburgerMenuIcon = close;
		} else {
			hamburgerMenuIcon = hamburger;
		}
	};
</script>

<svelte:head>
	<link
		href="https://fonts.googleapis.com/css2?family=Lexend+Deca:wght@100;200;300;400;500;600;700;800;900&display=swap"
		rel="stylesheet"
	/>
</svelte:head>

<div class="nav-container">
	<nav>
		<div class="hamburger-wrapper" on:click={hamburgerClick}>
			<HamburgerMenuIcon close={!displayHamburgerMenu} />
			Menu
		</div>
		<div class="large-menu-link-container">
			<a href="#skills" class="menu-link">Skills</a>
			<a href="#works" class="menu-link">Works</a>
			<a href="#contact" class="menu-link">Contact</a>
		</div>
		<div class="theme-toggle" on:click={toggleMode}>
			{#if !darkMode}
				<img class="dark-theme-toggle" src={moon} alt="" />
			{:else}
				<img class="light-theme-toggle" src={sun} alt="" />
			{/if}
		</div>
	</nav>
	{#if displayHamburgerMenu}
		<div class="nav-menu-small">
			<a href="#skills" class="menu-link-small">Skills</a>
			<a href="#works" class="menu-link-small">Works</a>
			<a href="#contact" class="menu-link-small">Contact</a>
		</div>
	{/if}
</div>
<main>
	<section class="profile-section">
		<ProfileIntro />
		<div class="content">
			<Skills />
			<Works {darkMode} />
			<Contact {darkMode} />
		</div>
	</section>
</main>
<Footer />

<style>
	.menu-link-small {
		font-size: 1.8rem;
		font-weight: 700;
		padding: 2rem 3rem;
		color: var(--menu-link-color);
		text-decoration: none;
	}
	.menu-link:hover {
		color: var(--menu-link-hover-color);
	}
	.nav-menu-small {
		display: flex;
		flex-direction: column;
		width: 100%;
		justify-content: center;
		background: var(--navbar-small-bg-color);
		position: relative;
		z-index: 9999;
	}
	.hamburger-wrapper {
		position: absolute;
		left: 0;
		padding: 3rem;
		height: 100%;
		cursor: pointer;
		display: flex;
		align-items: center;
		gap: 2rem;
		font-size: 2rem;
		font-weight: 700;
		color: #fff;
	}
	.hamburger-wrapper img {
		width: 13%;
	}
	.hamburger-wrapper:hover {
		/* background: #000; */
	}
	.light-theme-toggle {
		width: 2.9rem;
		opacity: 0.75;
		cursor: pointer;
		margin-left: 3rem;
	}
	.light-theme-toggle:hover {
		opacity: 0.85;
	}

	.dark-theme-toggle {
		width: 3rem;
		opacity: 0.95;
		cursor: pointer;
		margin-left: 3rem;
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
		position: relative;
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
	@media only screen and (max-width: 650px) {
		.menu-link {
			padding: 1rem 1.2rem;
		}
	}
</style>
