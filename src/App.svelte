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
	import HamburgerMenu from './lib/components/HamburgerMenu.svelte';

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
	const hamburgerClick = (e) => {
		displayHamburgerMenu = e.detail.displayHamburgerMenu;
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
		<HamburgerMenu on:click={hamburgerClick} />
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
	<!-- {#if displayHamburgerMenu} -->
	<div class={`nav-menu-small`}>
		<a
			href="#skills"
			class={`menu-link-small ${displayHamburgerMenu ? 'collapsed expanded' : 'collapsed'}`}
			>Skills</a
		>
		<a
			href="#works"
			class={`menu-link-small ${displayHamburgerMenu ? 'collapsed expanded' : 'collapsed'}`}
			>Works</a
		>
		<a
			href="#contact"
			class={`menu-link-small ${displayHamburgerMenu ? 'collapsed expanded' : 'collapsed'}`}
			>Contact</a
		>
	</div>
	<!-- {/if} -->
</div>
<main class="container">
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
	.container {
		margin-top: clamp(170px, 10vw, 200px);
	}
	.menu-link-small:hover {
		color: var(--menu-link-hover-color);
		text-decoration: underline;
		transition: 0.1s;
		text-decoration-style: dotted;
	}
	.menu-link-small {
		display: none;
		font-size: 1.8rem;
		font-weight: 700;
		color: var(--menu-link-color);
		text-decoration: none;
		padding: 0rem 3rem;
	}
	.collapsed {
		opacity: 0;
		height: 0;
		padding: 0rem 3rem;
		border-bottom: 0px solid var(--menu-link-small-border-color);
		transition: all 0.2s;
	}
	.expanded {
		opacity: 1;
		transition: all 0.2s;
		padding: 2rem 3rem;
		border-bottom: 1px solid var(--menu-link-small-border-color);
		height: auto;
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
	.theme-toggle {
		margin-left: 3rem;
	}
	.light-theme-toggle {
		width: 2.9rem;
		opacity: 0.75;
		cursor: pointer;
	}
	.light-theme-toggle:hover {
		opacity: 0.85;
	}

	.dark-theme-toggle {
		width: 3rem;
		opacity: 0.95;
		cursor: pointer;
	}

	.dark-theme-toggle:hover {
		opacity: 1;
	}
	.nav-container {
		height: 70px;
		/* display: flex; */
		/* justify-content: center; */
		position: fixed;
		top: 0;
		z-index: 999;
		width: 100%;
	}
	main {
		margin-bottom: 170px;
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
		font-size: 1.85rem;
		font-weight: 700;
		/* color: #0075ff; */
		color: var(--menu-link-color);
		padding: 1rem 2.5rem;
		text-decoration: none;
	}
	.menu-link:hover {
		color: var(--menu-link-hover-color);
		text-decoration: underline;
		transition: 0.1s;
		text-decoration-style: dashed;
	}
	.theme-toggle:hover {
		transition: 0.2s;
		background: var(--hamburger-menu-bg-hover-color);
	}
	.theme-toggle {
		background: var(--hamburger-menu-bg-color);
		/* padding: 0.8rem; */
		border-radius: 50%;
		height: 36px;
		width: 36px;
		display: flex;
		justify-content: center;
		align-items: center;
	}
	.light-theme-toggle {
		width: 64%;
	}
	.dark-theme-toggle {
		width: 68%;
	}
	@media only screen and (max-width: 650px) {
		.menu-link {
			padding: 1rem 2.5rem;
		}
	}
	@media only screen and (max-width: 500px) {
		.menu-link-small {
			display: block;
		}
		.nav-container {
			height: 65px;
		}
		.large-menu-link-container {
			display: none;
		}
		.theme-toggle:hover {
			transition: 0.2s;
			background: var(--hamburger-menu-bg-hover-color);
		}
		.theme-toggle {
			margin-left: auto;
			margin-right: 3rem;
			background: var(--hamburger-menu-bg-color);
			/* padding: 0.8rem; */
			border-radius: 50%;
			height: 36px;
			width: 36px;
			display: flex;
			justify-content: center;
			align-items: center;
		}
		.light-theme-toggle {
			width: 64%;
			margin-left: 0;
		}
		.dark-theme-toggle {
			width: 64%;
			margin-left: 0;
		}
	}
	@media only screen and (max-width: 450px) {
		.container {
			margin-top: 120px;
		}
	}
</style>
