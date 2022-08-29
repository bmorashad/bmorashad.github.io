<script>
	import { createEventDispatcher } from 'svelte';

	const dispatch = createEventDispatcher();
	let displayHamburgerMenu = false;
	const hamburgerClick = () => {
		displayHamburgerMenu = !displayHamburgerMenu;
		dispatch('click', { displayHamburgerMenu });
	};
</script>

<div class="hamburger-wrapper" on:click={hamburgerClick}>
	<div class="nav-icon-wrapper">
		<div id="nav-icon3" class={displayHamburgerMenu ? 'open' : ''}>
			<span />
			<span />
			<span />
			<span />
		</div>
	</div>
	{#if !displayHamburgerMenu}
		<span class="hamburger-menu-label">Navigate To</span>
	{:else}
		<span class="hamburger-menu-label">Close</span>
	{/if}
</div>

<style>
	.nav-icon-wrapper {
		background: var(--nav-icon-wrapper-bg-color);
		width: 35px;
		height: 35px;
		display: flex;
		border-radius: 5px;
		justify-content: center;
		align-items: center;
	}
	.hamburger-wrapper {
		position: absolute;
		left: 0;
		padding: 3rem;
		height: 100%;
		width: 20ch;
		cursor: pointer;
		display: none;
		align-items: center;
		gap: 2rem;
		font-size: 2rem;
		font-weight: 700;
		color: #fff;
		/* background: var(--hamburger-menu-bg-color); */
	}
	.hamburger-wrapper:hover .nav-icon-wrapper {
		background: var(--nav-icon-wrapper-bg-hover-color);
	}
	.hamburger-wrapper:hover #nav-icon3 span {
		background: var(--menu-link-hover-color);
	}
	.hamburger-wrapper:hover .hamburger-menu-label {
		color: var(--menu-link-hover-color);
		text-decoration: underline;
		text-decoration-style: dashed;
	}
	.hamburger-menu-label {
		font-size: 2rem;
		color: var(--menu-link-color);
	}
	#nav-icon3 {
		width: 19px;
		/* height: fit-content; */
		height: 16px;
		position: relative;
		-webkit-transform: rotate(0deg);
		-moz-transform: rotate(0deg);
		-o-transform: rotate(0deg);
		transform: rotate(0deg);
		-webkit-transition: 0.5s ease-in-out;
		-moz-transition: 0.5s ease-in-out;
		-o-transition: 0.5s ease-in-out;
		transition: 0.5s ease-in-out;
		cursor: pointer;
	}

	#nav-icon3 span {
		display: block;
		position: absolute;
		height: 2.5px;
		width: 100%;
		background: var(--menu-link-color);
		border-radius: 2px;
		opacity: 1;
		left: 0;
		-webkit-transform: rotate(0deg);
		-moz-transform: rotate(0deg);
		-o-transform: rotate(0deg);
		transform: rotate(0deg);
		-webkit-transition: 0.25s ease-in-out;
		-moz-transition: 0.25s ease-in-out;
		-o-transition: 0.25s ease-in-out;
		transition: 0.25s ease-in-out;
	}
	/* Icon 3 */
	#nav-icon3 span:nth-child(1) {
		top: 0px;
	}

	#nav-icon3 span:nth-child(2),
	#nav-icon3 span:nth-child(3) {
		top: 7px;
		width: 65%;
		left: 19%;
	}

	#nav-icon3 span:nth-child(4) {
		top: 14px;
	}

	#nav-icon3.open span:nth-child(1) {
		top: 14px;
		width: 0%;
		left: 50%;
	}

	#nav-icon3.open span:nth-child(2) {
		-webkit-transform: rotate(45deg);
		-moz-transform: rotate(45deg);
		-o-transform: rotate(45deg);
		transform: rotate(45deg);
		width: 110%;
		left: 0;
	}

	#nav-icon3.open span:nth-child(3) {
		-webkit-transform: rotate(-45deg);
		-moz-transform: rotate(-45deg);
		-o-transform: rotate(-45deg);
		transform: rotate(-45deg);
		width: 110%;
		left: 0;
	}

	#nav-icon3.open span:nth-child(4) {
		top: 18px;
		width: 0%;
		left: 50%;
	}
	@media only screen and (max-width: 500px) {
		.hamburger-wrapper {
			display: flex;
		}
	}
</style>
