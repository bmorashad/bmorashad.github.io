<script>
	import java from '$lib/assets/java.png';
	import nginx from '$lib/assets/nginx.png';
	import react from '$lib/assets/react.png';
	import aws from '$lib/assets/aws.png';
	import nodejs from '$lib/assets/nodejs.png';
	import angular from '$lib/assets/angular.png';
	const skills = [
		{
			name: 'Java',
			icon: java
		},
		{
			name: 'NodeJs',
			icon: nodejs
		},

		{
			name: 'Nginx',
			icon: nginx
		},
		{
			name: 'React',
			icon: react
		},
		{
			name: 'Angular',
			icon: angular
		},

		{
			name: 'AWS',
			icon: aws
		}
	];
</script>

<div class="skills-container">
	<div class="skill-content-details">
		<h2 class="content-title skill-title">
			<span class="skill-content-title-hsl content-title-hsl">Techonlogies</span> I've worked with
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
						<img src={skill.icon} class="skill-tag-icon" alt="java" />
						<h2 class="tag-tech semibold">{skill.name}</h2>
					</div>
				</div>
			{/each}
		</div>
	</div>
</div>

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
		grid-template-columns: 8fr 10fr;
	}
	.skill-tag-wrapper {
		display: flex;
		flex-wrap: wrap;
		align-items: center;
		grid-area: 1 / 2 / 3 / 2;
	}
	.skill-tag-container > div {
		margin-right: 25px;
		margin-bottom: 20px;
	}
	.skill-tag-container > div:last-child {
		margin-right: 0;
	}
	.skill-tag {
		display: flex;
		justify-content: center;
		width: fit-content;
		padding: 3px 25px;
		padding-right: 30px;
		border: var(--skill-tag-border);
		border-radius: 20px;
		box-shadow: var(--skill-tag-box-shadow);
		background: var(--skill-tag-bg-color);
		color: var(--skill-tag-color);
	}
	.tag-tech {
		font-size: 1.6rem;
		font-weight: 600;
	}
</style>
