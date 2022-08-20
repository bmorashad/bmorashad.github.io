<script>
	import educationPic from '$lib/assets/education-bg.svg';
	import educationPicDark from '$lib/assets/education-bg-dark.svg';
	export let darkMode = false;
</script>

<section class="education-section flex justify-center mt-section-xlg">
	<div class="education-pic mr-medium">
		{#if darkMode}
			<img src={educationPicDark} alt="Education logo" />
		{:else}
			<img src={educationPic} alt="Education logo" />
		{/if}
	</div>
	<div class="education-detail-wrapper ml-medium">
		<div class="education-details flex flex-direction-column">
			<h2 class="content-title">
				I'm doing a <span class="education-content-title-hsl content-title-hsl"
					>software engineering degree</span
				> @
			</h2>
			<div class="detail">
				<h3 class="education-place medium">Informatics Institute of Techonlogy, Colombo</h3>
				<h3 class="education-place-affiliation regular">[University of Westminster, UK]</h3>
				<h3 class="education-role medium">BEnd (Hons) Software Engineering</h3>
			</div>
		</div>
	</div>
</section>

<style>
	.education-content-title-hsl {
		color: var(--education-content-title-hsl-color);
	}
	.education-role {
		font-size: 2.4rem;
		margin-top: 10px;
		color: var(--content-des-dark-color);
	}
	.education-place-affiliation {
		font-size: 2rem;
		color: var(--content-des-color);
	}
	.education-place {
		color: var(--education-place-color);
		font-size: 2.1rem;
		margin-top: 2rem;
	}
</style>
