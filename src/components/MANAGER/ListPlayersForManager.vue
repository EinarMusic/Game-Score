<template>
	<div>
		<div class="wrap-all">
			<div
				class="players-list"
				:style="style_backgroud"
				v-for="teams in [1, 2, 3, 4]"
				:key="teams.id"
			>
				<div class="number-player" style="border:1px solid white">
					<span>7</span>
				</div>
				<div class="name-player">
					<span>Ranie Tavarez P.</span>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
export default {};
</script>

<style scoped>
.wrap-all {
	min-width: 250px;
	width: 500px;
	max-width: 500px;
}

.players-list {
	display: flex;
	align-items: center;

	width: 100%;
	height: 45px;

	margin-bottom: 5px;

	border-radius: 5px;

	cursor: pointer;
}

.number-player {
	border-top-left-radius: 5px;
	border-bottom-left-radius: 5px;

	display: flex;
	justify-content: center;
	align-items: center;

	width: 75px;
	height: 45px;

	text-align: center;
	font-weight: bold;
	font-size: 23px;

	background: red;
}

.name-player {
	width: 100%;
	height: 45px;

	display: flex;
	align-items: center;
}

.name-player span {
	padding-left: 10px;

	margin-right: 10px;
}

.name-player p {
	color: red;
	font-size: 10px;
	text-align: center;

	margin: 0 3px;
}
</style>
