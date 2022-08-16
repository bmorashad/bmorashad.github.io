<script>
	console.log('Hi');
</script>

<div class="skills-container">
	<div class="skill-content-details">
		<h2 class="content-title skill-title">
			<span class="skill-content-title-hsl">Techonlogies</span> I've worked with
		</h2>
		<h5 class="content-des content-skill-des regular">
			I’ve worked with but not limited to these interesting technologies so far
		</h5>
	</div>
	<div class="skill-tags">Skill 1</div>
</div>

<style>
	.skills-container {
		display: grid;
		grid-template-columns: 6fr 8fr;
	}
	.skill-content-title-hsl {
		background: radial-gradient(21.06% 3124.17% at 21.06% 50%, #0094ff 0%, #00c2ff 100%);
		-webkit-background-clip: text;
		-webkit-text-fill-color: transparent;
		background-clip: text;
		text-fill-color: transparent;
	}
	.skill-tags {
		justify-self: end;
	}
</style>
