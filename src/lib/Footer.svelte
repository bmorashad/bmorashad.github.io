<script>
	import gitlab from '$lib/assets/gitlab-white.svg';
	import github from '$lib/assets/github-white.svg';
	import linkedin from '$lib/assets/linkedin-white.svg';
	import medium from '$lib/assets/medium-white.svg';
</script>

<div class="footer">
	<div class="footer-item footer-label">
		<h3 class="light">Mohamed Rashad © 2022</h3>
	</div>
	<div class="footer-item footer-links">
		<div class="footer-link-wrapper">
			<a href="https://gitlab.com/bmorashad" target="_blank" class="link link-gitlab">
				<img src={gitlab} alt="gitlab" />
			</a>
			<a href="https://github.com/bmorashad" target="_blank" class="link link-github">
				<img src={github} alt="gitlab" />
			</a>
			<a href="https://linkedin.com/bmorashad" target="_blank" class="link link-linkedin">
				<img src={linkedin} alt="gitlab" />
			</a>
			<a href="https://medium.com/bmorashad" target="_blank" class="link link-medium-blog">
				<img src={medium} alt="gitlab" />
			</a>
		</div>
	</div>
</div>

<style>
	.footer {
		display: grid;
		grid-template-columns: 1fr 1fr;
		margin-top: 20rem;
		background: var(--footer-bg-color);
	}
	.footer-item {
		padding: 3rem 10rem;
	}
	.footer-label {
		justify-self: start;
	}
	.footer-label h3 {
		font-size: 2.2rem;
		color: var(--footer-label-color);
	}
	.footer-links {
		justify-self: end;
		align-self: center;
	}
	.footer-link-wrapper {
		display: flex;
	}
	.link {
		margin-right: 1.5rem;
	}
	.link img {
		width: 2.8rem;
	}
	.link:last-child {
		margin-right: 0;
	}
	.link:hover {
		transform: translateY(-2px);
		transition: 200ms;
	}
</style>
