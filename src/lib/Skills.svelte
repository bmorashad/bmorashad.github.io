<script>
	import { skills } from '/src/data.json';
</script>

<section class="skills-container" id="skills">
	<div class="skill-content-details">
		<h2 class="content-title skill-title">
			<span class="skill-content-title-hsl content-title-hsl1">Techonlogies</span> I've worked with
		</h2>
		<h5 class="content-des content-skill-des regular">
			I’ve worked with but not limited to these interesting technologies so far
		</h5>
	</div>
	<div class="skill-tag-container flex flex-wrap">
		<div class="skill-tag-wrapper">
			{#each skills as skill}
				<div class="skill-tag">
					<div class="flex items-center">
						<h2 class="tag-tech semibold">{skill.name}</h2>
					</div>
				</div>
			{/each}
		</div>
	</div>
</section>

<style>
	.skills-container {
		display: grid;
		grid-template-columns: 6fr 8fr;
	}
	.skill-tag-icon {
		width: 2.5rem;
		margin-right: 5px;
	}
	.skill-tag-container {
		display: grid;
		grid-template-columns: 1fr;
		align-items: center;
	}
	.skill-tag-wrapper {
		display: flex;
		flex-wrap: wrap;
		align-items: center;
		grid-area: 1 / 2 / 2 / 3;
		justify-content: end;
	}
	.skill-tag-container > div {
		margin-right: 25px;
		margin-bottom: 20px;
	}
	.skill-tag-container > div:last-child {
		margin-right: 0;
	}
	.skill-tag {
		margin: 6px;
		display: flex;
		justify-content: center;
		width: fit-content;
		padding: 8px 20px;
		/* padding-right: 30px; */
		border: var(--skill-tag-border);
		border-radius: 15px;
		box-shadow: var(--skill-tag-box-shadow);
		background: var(--skill-tag-bg-color);
		color: var(--skill-tag-color);
	}
	.tag-tech {
		font-size: 1.6rem;
		font-weight: 600;
	}
	@media only screen and (max-width: 950px) {
		.skill-content-details {
			text-align: center;
			display: flex;
			flex-direction: column;
			align-items: center;
		}
		.skill-tag-wrapper {
			justify-content: center;
		}
		.skills-container {
			grid-template-columns: 1fr;
			grid-gap: 4rem;
		}
		.skill-content-details {
			align-self: center;
		}
	}
</style>
