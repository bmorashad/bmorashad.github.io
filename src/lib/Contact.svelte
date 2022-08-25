<script>
	export let darkMode = false;
	import { contactLinks } from '../../public/data.json';
	let email = 'bmorashad@gmail.com';
	import linkedinDMIcon from '../assets/linkedinDM.svg';
	import emailIcon from '../assets/email.svg';
	import linkedinDMIconDark from '../assets/linkedinDM-dark.svg';
	import emailIconDark from '../assets/email-dark.svg';
</script>

<section class="contact-container" id="contact">
	<div class="contact-content-details">
		<h2 class="content-title content-title-contact">Wanna talk? Ping me @</h2>
		<h5 class="content-des content-contact-des regular">Feel free to contact me via these :)</h5>
	</div>
	<div class="contact-wrapper">
		<a class="contact contact-email" href={`mailto:${contactLinks.gmail.link}`} target="_blank">
			{#if darkMode}
				<img src={emailIconDark} alt="email" />
			{:else}
				<img src={emailIcon} alt="email" />
			{/if}
			<h3>{contactLinks.gmail.name}</h3>
		</a>
		<a class="contact contact-linkedin" href={contactLinks.linkedin.link} target="_blank">
			{#if darkMode}
				<img src={linkedinDMIconDark} alt="linkedin direct message" />
			{:else}
				<img src={linkedinDMIcon} alt="linkedin direct message" />
			{/if}
			<h3>{contactLinks.linkedin.name}</h3></a
		>
	</div>
</section>

<style>
	.contact-container {
		display: grid;
		grid-template-columns: auto auto;
		align-items: center;
		justify-content: center;
		/* margin-top: 16rem; */
		margin-top: clamp(80px, 9vw, 140px);
		grid-gap: clamp(50px, 20vw, 85px);
	}
	.contact-wrapper {
		display: grid;
		/* grid-template-columns: minmax(40px, 0.5fr) 20fr 20fr; */
		grid-template-columns: 1fr 1fr;
		grid-gap: 0 3rem;
	}
	.contact {
		/* padding: 8rem; */
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
		width: clamp(250px, 14vw, 400px);
		height: clamp(250px, 14vw, 350px);
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
		/* grid-area: 1 / 2 / 2 / 3; */
		box-shadow: var(--contact-email-box-shadow-color);
	}
	.contact-linkedin {
		color: var(--contact-linkedin-color);
		border-color: var(--contact-linkedin-border-color);
		background: var(--contact-linkedin-bg-color);
		/* grid-area: 1 / 3 / 2 / 4; */
		box-shadow: var(--contact-linkedin-box-shadow-color);
	}
	.contact h3 {
		font-size: 2.4rem;
	}
	.contact img {
		margin-bottom: 3rem;
	}
	.contact-email img {
		width: 45%;
	}
	.contact-linkedin img {
		width: 30%;
	}
	@media only screen and (max-width: 1000px) {
		.contact-email img {
			width: 40%;
		}
		.contact-linkedin img {
			width: 25%;
		}
		.contact {
			width: clamp(200px, 15vw, 200px);
			height: clamp(200px, 15vw, 250px);
		}
		.contact-container {
			grid-gap: 4rem;
		}
		.contact-wrapper {
			grid-gap: 4rem;
		}
	}
	@media only screen and (max-width: 850px) {
		.contact-container {
			grid-template-columns: 1fr;
			justify-content: center;
			grid-gap: 8rem 0;
			/* margin-top: 10rem; */
		}
		.content-title-contact {
			text-align: center;
		}
		.content-contact-des {
			text-align: center;
		}
		.contact-content-details {
			display: flex;
			flex-direction: column;
			justify-content: center;
			align-items: center;
		}
		.contact-wrapper {
			justify-content: center;
			align-items: center;
			justify-items: center;
			grid-template-columns: auto auto;
		}
		.contact {
			width: clamp(130px, 35vw, 250px);
			height: clamp(130px, 35vw, 250px);
		}
	}
	@media only screen and (max-width: 650px) {
		.contact {
			width: clamp(160px, 35vw, 250px);
			height: clamp(160px, 35vw, 250px);
		}
		.contact-wrapper {
			grid-gap: 0 2rem;
		}
	}
	@media only screen and (max-width: 500px) {
		.contact h3 {
			font-size: 2rem;
		}
	}
	@media only screen and (max-width: 380px) {
		.contact {
			width: clamp(140px, 35vw, 250px);
			height: clamp(140px, 35vw, 250px);
		}
		.contact-wrapper {
			grid-gap: 0 2rem;
		}
	}
</style>
