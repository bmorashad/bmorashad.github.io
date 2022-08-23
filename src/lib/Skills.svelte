<script>
	import java from '$lib/assets/java.png';
	import nginx from '$lib/assets/nginx.png';
	import react from '$lib/assets/react.png';
	import aws from '$lib/assets/aws.png';
	import nodejs from '$lib/assets/nodejs.png';
	import angular from '$lib/assets/angular.png';
	import python from '$lib/assets/python.png';
	import flask from '$lib/assets/flask.png';
	import sql from '$lib/assets/sql.png';
	import mongodb from '$lib/assets/mongodb.png';
	import linux from '$lib/assets/linux.png';
	import terminal from '$lib/assets/terminal.png';
	import playframework from '$lib/assets/playframework.png';
	import figma from '$lib/assets/figma.png';

	const skills = [
		{
			name: 'Java',
			icon: java
		},
		{
			name: 'Python',
			icon: python
		},
		{
			name: 'React',
			icon: react
		},
		{
			name: 'Nginx',
			icon: nginx
		},
		{
			name: 'Angular',
			icon: angular
		},
		{
			name: 'Flask',
			icon: flask
		},
		{
			name: 'MySql',
			icon: sql
		},
		{
			name: 'MongoDB',
			icon: mongodb
		},
		{
			name: 'Linux',
			icon: linux
		},
		{
			name: 'NodeJS',
			icon: nodejs
		},
		{
			name: 'Play Framework',
			icon: playframework
		},
		{
			name: 'Express',
			icon: playframework
		},
		{
			name: 'AWS',
			icon: aws
		},
		{
			name: 'Figma',
			icon: figma
		},
		{
			name: 'Spring Boot',
			icon: aws
		},
		{
			name: 'Github CI/CD',
			icon: aws
		},
		{
			name: 'Docker',
			icon: aws
		},
		{
			name: 'Bash',
			icon: aws
		},
		{
			name: 'Gitlab CI/CD',
			icon: aws
		},
		{
			name: 'HTML',
			icon: aws
		},
		{
			name: 'CSS',
			icon: aws
		},
		{
			name: 'Grafana',
			icon: aws
		}
	];
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
		padding: 8px 25px;
		/* padding-right: 30px; */
		border: var(--skill-tag-border);
		border-radius: 15px;
		box-shadow: var(--skill-tag-box-shadow);
		background: var(--skill-tag-bg-color);
		color: var(--skill-tag-color);
	}
	.tag-tech {
		font-size: 1.7rem;
		font-weight: 600;
	}
	@media only screen and (max-width: 850px) {
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
