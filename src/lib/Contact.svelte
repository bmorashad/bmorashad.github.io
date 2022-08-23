<script>
	export let darkMode = false;
	let email = 'bmorashad@gmail.com';
	import linkedinDMIcon from '$lib/assets/linkedinDM.svg';
	import emailIcon from '$lib/assets/email.svg';
	import linkedinDMIconDark from '$lib/assets/linkedinDM-dark.svg';
	import emailIconDark from '$lib/assets/email-dark.svg';
</script>

<section class="contact-container" id="contact">
	<div class="contact-content-details">
		<h2 class="content-title content-title-contact">Wanna talk? Ping me @</h2>
		<h5 class="content-des content-contact-des regular">Feel free to contact me via these :)</h5>
	</div>
	<div class="contact-wrapper">
		<a class="contact contact-email" href={`mailto:${email}`}>
			{#if darkMode}
				<img src={emailIconDark} alt="email" />
			{:else}
				<img src={emailIcon} alt="email" />
			{/if}
			<h3>Email Me</h3>
		</a>
		<a class="contact contact-linkedin" href={`https://linkedin.com/bmorashad`}>
			{#if darkMode}
				<img src={linkedinDMIconDark} alt="linkedin direct message" />
			{:else}
				<img src={linkedinDMIcon} alt="linkedin direct message" />
			{/if}
			<h3>LinkedIn DM</h3></a
		>
	</div>
</section>

<style>
	.contact-container {
		display: grid;
		grid-template-columns: auto auto;
		align-items: center;
		justify-content: center;
		margin-top: 20rem;
	}
	.contact-wrapper {
		display: grid;
		grid-template-columns: minmax(40px, 0.5fr) 20fr 20fr;
		grid-gap: 5rem;
	}
	.contact {
		padding: 8rem;
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		border: 3px solid #000;
		border-radius: 1.5rem;
		/* margin-right: 40px; */
		text-decoration: none;
		background: var(--contact-email-bg-color);
		opacity: 0.87;
	}
	.contact:hover {
		transition: 200ms;
		opacity: 0.9;
	}
	.contact-email:hover {
		/* color: var(--contact-email-color-hover); */
		/* background: var(--contact-email-bg-color-hover); */
		box-shadow: var(--contact-email-box-shadow-color-hover);
	}
	.contact-linkedin:hover {
		/* color: var(--contact-linkedin-color-hover); */
		/* background: var(--contact-linkedin-bg-color-hover); */
		box-shadow: var(--contact-linkedin-box-shadow-color-hover);
	}
	.contact:last-child {
		margin-right: 0;
	}
	.contact-email {
		color: var(--contact-email-color);
		border-color: var(--contact-email-border-color);
		background: var(--contact-email-bg-color);
		grid-area: 1 / 2 / 2 / 3;
		box-shadow: var(--contact-email-box-shadow-color);
	}
	.contact-linkedin {
		color: var(--contact-linkedin-color);
		border-color: var(--contact-linkedin-border-color);
		background: var(--contact-linkedin-bg-color);
		grid-area: 1 / 3 / 2 / 4;
		box-shadow: var(--contact-linkedin-box-shadow-color);
	}
	.contact h3 {
		font-size: 2.4rem;
	}
	.contact img {
		margin-bottom: 3rem;
	}
	.contact-email img {
		width: 100%;
	}
	.contact-linkedin img {
		width: 60%;
	}
</style>
