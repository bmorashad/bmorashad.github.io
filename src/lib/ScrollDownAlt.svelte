<div class="item">
	<div class="mouse m-5" />
</div>

<style>
	.mouse {
		width: 40px;
		height: 60px;
		border-radius: 20px;
		border: 3px solid var(--scroll-down-color1);
		position: absolute;
	}
	.mouse:before,
	.mouse:after {
		content: '';
		display: block;
		position: absolute;
	}

	/* First */
	.m-0:before {
		height: 30px;
		width: 4px;
		top: 10px;
		left: calc(50% - 2px);
		background: rgba(153, 153, 153, 0.55);
		border-radius: 2px;
	}

	@keyframes m-0-ball {
		40%,
		60% {
			transform: translateY(10px);
		}
	}

	@keyframes m-1-ball {
		0%,
		65%,
		100% {
			opacity: 0;
		}
		10%,
		40% {
			opacity: 1;
		}
		0% {
			transform: translateY(5px) scale(0.7);
		}
		5% {
			transform: scale(0.7);
		}
		15%,
		100% {
			transform: scale(1);
		}
		45%,
		65% {
			transform: translateY(24px) scale(0.7);
		}
	}

	/* Third */
	.m-2:before {
		width: 4px;
		height: 34px;
		border-radius: 2px;
		top: 10px;
		left: calc(50% - 2px);
		background: #999;
		animation: m-2-ball 1.2s cubic-bezier(0.455, 0.03, 0.515, 0.955) infinite;
	}

	@keyframes m-2-ball {
		0%,
		50%,
		60% {
			transform: scaleY(0.118);
		}
		30% {
			transform: scaleY(1);
		}
		0%,
		29.99% {
			transform-origin: top;
		}
		30%,
		100% {
			transform-origin: bottom;
		}
		90%,
		100% {
			transform: scaleY(0.118) translateY(-255px);
		}
	}

	/* Fourth */
	.m-3:before {
		width: 6px;
		height: 6px;
		border-radius: 50%;
		top: 6px;
		left: calc(50% - 3px);
		box-shadow: 0 6px 0 0 #999, 0 18px 0 0 #999, 0 30px 0 0 #999;
		animation: m-3-ball 1.2s ease-in-out infinite;
	}

	@keyframes m-3-ball {
		0%,
		100% {
			box-shadow: 0 6px 0 0 rgba(153, 153, 153, 0.25), 0 18px 0 0 rgba(153, 153, 153, 0.25),
				0 30px 0 0 rgba(153, 153, 153, 0.25);
		}
		25% {
			box-shadow: 0 6px 0 0 #999, 0 18px 0 0 rgba(153, 153, 153, 0.25),
				0 30px 0 0 rgba(153, 153, 153, 0.25);
		}
		50% {
			box-shadow: 0 6px 0 0 rgba(153, 153, 153, 0.25), 0 18px 0 0 #999,
				0 30px 0 0 rgba(153, 153, 153, 0.25);
		}
		75% {
			box-shadow: 0 6px 0 0 rgba(153, 153, 153, 0.25), 0 18px 0 0 rgba(153, 153, 153, 0.25),
				0 30px 0 0 #999;
		}
	}

	/* Fifth */
	.m-4:before,
	.m-4:after {
		width: 6px;
		height: 6px;
		border-radius: 50%;
		top: 10px;
		left: calc(50% - 3px);
		background: #999;
		opacity: 0;
		animation: m-4-ball 1.2s ease-in-out infinite;
	}

	.m-4:after {
		animation-delay: 0.6s;
	}

	@keyframes m-4-ball {
		50% {
			opacity: 1;
		}
		47.5%,
		52.5% {
			transform: translateY(10px);
		}
		100% {
			transform: translateY(20px);
		}
	}

	/* Sixth */
	.m-5:before {
		width: 10px;
		height: 10px;
		border-radius: 50%;
		top: 10px;
		left: calc(50% - 6px);
		border: 2px solid rgba(153, 153, 153, 0.55);
	}

	.m-5:after {
		top: 30px;
		left: calc(50% - 7px);
		border: 5px solid transparent;
		border-top-color: #999;
		animation: m-5-arrow 1.2s ease-in-out infinite;
	}

	@keyframes m-5-arrow {
		20%,
		100% {
			transform: translateY(0);
		}
		50% {
			transform: translateY(9px);
		}
		80% {
			transform: translateY(-3px);
		}
	}
	.items {
		width: auto;
		margin: 0 auto;
		display: grid;
		grid-template-columns: repeat(3, 1fr);
	}

	.item {
		width: auto;
		height: auto;
		position: relative;
	}

	.mouse:before,
	.mouse:after {
		content: '';
		display: block;
		position: absolute;
	}

	.m-0:after {
		width: 10px;
		height: 10px;
		border-radius: 50%;
		top: 15px;
		left: calc(50% - 5px);
		background: #999;
		-webkit-animation: m-0-ball 1.2s ease-in-out infinite;
		animation: m-0-ball 1.2s ease-in-out infinite;
	}

	@-webkit-keyframes m-0-ball {
		40%,
		60% {
			transform: translateY(10px);
		}
	}

	@keyframes m-0-ball {
		40%,
		60% {
			transform: translateY(10px);
		}
	}
	/* Second */
	.m-1:before {
		width: 14px;
		height: 14px;
		border-radius: 50%;
		top: 10px;
		left: calc(50% - 7px);
		background: var(--scroll-down-color2);
		-webkit-animation: m-1-ball 1.2s cubic-bezier(0.215, 0.61, 0.355, 1) infinite;
		animation: m-1-ball 1.2s cubic-bezier(0.215, 0.61, 0.355, 1) infinite;
	}

	@-webkit-keyframes m-1-ball {
		0%,
		65%,
		100% {
			opacity: 0;
		}
		10%,
		40% {
			opacity: 1;
		}
		0% {
			transform: translateY(5px) scale(0.7);
		}
		5% {
			transform: scale(0.7);
		}
		15%,
		100% {
			transform: scale(1);
		}
		45%,
		65% {
			transform: translateY(24px) scale(0.7);
		}
	}

	@keyframes m-1-ball {
		0%,
		65%,
		100% {
			opacity: 0;
		}
		10%,
		40% {
			opacity: 1;
		}
		0% {
			transform: translateY(5px) scale(0.7);
		}
		5% {
			transform: scale(0.7);
		}
		15%,
		100% {
			transform: scale(1);
		}
		45%,
		65% {
			transform: translateY(24px) scale(0.7);
		}
	}
	/* Third */
	.m-2:before {
		width: 4px;
		height: 34px;
		border-radius: 2px;
		top: 10px;
		left: calc(50% - 2px);
		background: #999;
		-webkit-animation: m-2-ball 1.2s cubic-bezier(0.455, 0.03, 0.515, 0.955) infinite;
		animation: m-2-ball 1.2s cubic-bezier(0.455, 0.03, 0.515, 0.955) infinite;
	}

	@-webkit-keyframes m-2-ball {
		0%,
		50%,
		60% {
			transform: scaleY(0.118);
		}
		30% {
			transform: scaleY(1);
		}
		0%,
		29.99% {
			transform-origin: top;
		}
		30%,
		100% {
			transform-origin: bottom;
		}
		90%,
		100% {
			transform: scaleY(0.118) translateY(-255px);
		}
	}

	@keyframes m-2-ball {
		0%,
		50%,
		60% {
			transform: scaleY(0.118);
		}
		30% {
			transform: scaleY(1);
		}
		0%,
		29.99% {
			transform-origin: top;
		}
		30%,
		100% {
			transform-origin: bottom;
		}
		90%,
		100% {
			transform: scaleY(0.118) translateY(-255px);
		}
	}
	/* Fourth */
	.m-3:before {
		width: 6px;
		height: 6px;
		border-radius: 50%;
		top: 6px;
		left: calc(50% - 3px);
		box-shadow: 0 6px 0 0 #999, 0 18px 0 0 #999, 0 30px 0 0 #999;
		-webkit-animation: m-3-ball 1.2s ease-in-out infinite;
		animation: m-3-ball 1.2s ease-in-out infinite;
	}

	@-webkit-keyframes m-3-ball {
		0%,
		100% {
			box-shadow: 0 6px 0 0 rgba(153, 153, 153, 0.25), 0 18px 0 0 rgba(153, 153, 153, 0.25),
				0 30px 0 0 rgba(153, 153, 153, 0.25);
		}
		25% {
			box-shadow: 0 6px 0 0 #999, 0 18px 0 0 rgba(153, 153, 153, 0.25),
				0 30px 0 0 rgba(153, 153, 153, 0.25);
		}
		50% {
			box-shadow: 0 6px 0 0 rgba(153, 153, 153, 0.25), 0 18px 0 0 #999,
				0 30px 0 0 rgba(153, 153, 153, 0.25);
		}
		75% {
			box-shadow: 0 6px 0 0 rgba(153, 153, 153, 0.25), 0 18px 0 0 rgba(153, 153, 153, 0.25),
				0 30px 0 0 #999;
		}
	}

	@keyframes m-3-ball {
		0%,
		100% {
			box-shadow: 0 6px 0 0 rgba(153, 153, 153, 0.25), 0 18px 0 0 rgba(153, 153, 153, 0.25),
				0 30px 0 0 rgba(153, 153, 153, 0.25);
		}
		25% {
			box-shadow: 0 6px 0 0 #999, 0 18px 0 0 rgba(153, 153, 153, 0.25),
				0 30px 0 0 rgba(153, 153, 153, 0.25);
		}
		50% {
			box-shadow: 0 6px 0 0 rgba(153, 153, 153, 0.25), 0 18px 0 0 #999,
				0 30px 0 0 rgba(153, 153, 153, 0.25);
		}
		75% {
			box-shadow: 0 6px 0 0 rgba(153, 153, 153, 0.25), 0 18px 0 0 rgba(153, 153, 153, 0.25),
				0 30px 0 0 #999;
		}
	}
	/* Fifth */
	.m-4:before,
	.m-4:after {
		width: 6px;
		height: 6px;
		border-radius: 50%;
		top: 10px;
		left: calc(50% - 3px);
		background: #999;
		opacity: 0;
		-webkit-animation: m-4-ball 1.2s ease-in-out infinite;
		animation: m-4-ball 1.2s ease-in-out infinite;
	}
	.m-4:after {
		-webkit-animation-delay: 0.6s;
		animation-delay: 0.6s;
	}

	@-webkit-keyframes m-4-ball {
		50% {
			opacity: 1;
		}
		47.5%,
		52.5% {
			transform: translateY(10px);
		}
		100% {
			transform: translateY(20px);
		}
	}

	@keyframes m-4-ball {
		50% {
			opacity: 1;
		}
		47.5%,
		52.5% {
			transform: translateY(10px);
		}
		100% {
			transform: translateY(20px);
		}
	}
	/* Sixth */
	.m-5:before {
		width: 10px;
		height: 10px;
		border-radius: 50%;
		top: 10px;
		left: calc(50% - 5px);
		border: 2px solid rgba(153, 153, 153, 0.55);
	}
	.m-5:after {
		top: 30px;
		left: calc(50% - 5px);
		border: 5px solid transparent;
		border-top-color: #999;
		-webkit-animation: m-5-arrow 1.2s ease-in-out infinite;
		animation: m-5-arrow 1.2s ease-in-out infinite;
	}

	@-webkit-keyframes m-5-arrow {
		20%,
		100% {
			transform: translateY(0);
		}
		50% {
			transform: translateY(9px);
		}
		80% {
			transform: translateY(-3px);
		}
	}

	@keyframes m-5-arrow {
		20%,
		100% {
			transform: translateY(0);
		}
		50% {
			transform: translateY(9px);
		}
		80% {
			transform: translateY(-3px);
		}
	}
</style>
