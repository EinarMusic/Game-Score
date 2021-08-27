<template>
	<div>
		<div class="wrap-all">
			<div class="header">
				<div class="brand-wrap">
					<p>LOGO</p>
				</div>
				<div class="btn-for-event">
					<slot name="first" />
					<slot name="second" />
				</div>
			</div>
		</div>
	</div>
</template>

<script>
export default {};
</script>

<style scoped>
.header {
	height: 98px;

	border-radius: 10px;
	background: black;

	display: flex;
	justify-content: space-between;
	align-items: center;

	padding: 15px;
	margin: 15px;
}

/**/
.btn-for-event {
	display: flex;
}
</style>
