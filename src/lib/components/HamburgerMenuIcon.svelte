<script>
	export let close = false;
</script>

<div id="nav-icon3" class={!close ? 'open' : ''}>
	<span />
	<span />
	<span />
	<span />
</div>

<style>
	#nav-icon3 {
		width: 25px;
		/* height: fit-content; */
		height: 24px;
		position: relative;
		-webkit-transform: rotate(0deg);
		-moz-transform: rotate(0deg);
		-o-transform: rotate(0deg);
		transform: rotate(0deg);
		-webkit-transition: 0.5s ease-in-out;
		-moz-transition: 0.5s ease-in-out;
		-o-transition: 0.5s ease-in-out;
		transition: 0.5s ease-in-out;
		cursor: pointer;
	}

	#nav-icon3 span {
		display: block;
		position: absolute;
		height: 4px;
		width: 100%;
		background: #fff;
		border-radius: 2px;
		opacity: 1;
		left: 0;
		-webkit-transform: rotate(0deg);
		-moz-transform: rotate(0deg);
		-o-transform: rotate(0deg);
		transform: rotate(0deg);
		-webkit-transition: 0.25s ease-in-out;
		-moz-transition: 0.25s ease-in-out;
		-o-transition: 0.25s ease-in-out;
		transition: 0.25s ease-in-out;
	}
	/* Icon 3 */
	#nav-icon3 span:nth-child(1) {
		top: 0px;
	}

	#nav-icon3 span:nth-child(2),
	#nav-icon3 span:nth-child(3) {
		top: 9px;
		width: 65%;
		left: 19%;
	}

	#nav-icon3 span:nth-child(4) {
		top: 18px;
	}

	#nav-icon3.open span:nth-child(1) {
		top: 18px;
		width: 0%;
		left: 50%;
	}

	#nav-icon3.open span:nth-child(2) {
		-webkit-transform: rotate(45deg);
		-moz-transform: rotate(45deg);
		-o-transform: rotate(45deg);
		transform: rotate(45deg);
		width: 110%;
		left: 0;
	}

	#nav-icon3.open span:nth-child(3) {
		-webkit-transform: rotate(-45deg);
		-moz-transform: rotate(-45deg);
		-o-transform: rotate(-45deg);
		transform: rotate(-45deg);
		width: 110%;
		left: 0;
	}

	#nav-icon3.open span:nth-child(4) {
		top: 18px;
		width: 0%;
		left: 50%;
	}
</style>
