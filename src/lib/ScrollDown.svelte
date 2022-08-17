<div class="scroll-container">
	<div class="scroller" />
</div>

<style>
	.scroll-container {
		width: 40px;
		height: 60px;
		border: 3px solid var(--scroll-down-color1);
		border-radius: 20px;
		position: relative;
	}

	.scroller {
		width: 14px;
		border-radius: 8px;
		background-color: var(--scroll-down-color2);
		position: absolute;
		top: 4px;
		left: 10px;
		bottom: 34px;
		animation: scroller 1300ms ease-out infinite;
	}

	@keyframes scroller {
		0% {
			bottom: 34px;
		}
		5% {
			top: 4px;
		}
		32% {
			bottom: 4px;
		}
		66% {
			top: 34px;
			bottom: 4px;
		}
		100% {
			top: 4px;
			bottom: 34px;
		}
	}
</style>
