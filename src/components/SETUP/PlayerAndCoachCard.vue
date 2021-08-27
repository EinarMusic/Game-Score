<template>
	<div>
		<div class="wrap-all">
			<div class="card-content">
				<div class="wrap-card">
					<div
						class="number-player"
						:style="{
							background:
								color.team == null ? color.default : 'rgb(' + color.team + ')',
						}"
					>
						<span>{{ players.number }}</span>
					</div>
					<div class="player-name">
						<span>{{ players.player }}</span>
					</div>
					<div class="icon">
						<div class="wrap-icon">
							<slot name="icon_delete" />
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	props: ["players", "color"],
};
</script>

<style scoped>
.card-content {
	border-radius: 5px;

	display: inline-block;
	width: 350px;

	margin-bottom: 5px;
}

.wrap-card {
	display: flex;
	align-items: center;

	background-color: white;
	color: rgb(53, 52, 52);
	border-radius: 7px;
}

/**/
.number-player {
	display: inline-block;

	width: 50px;
	height: 45px;

	display: flex;
	align-items: center;
	justify-content: center;
	border-top-left-radius: 7px;
	border-bottom-left-radius: 7px;

	border: 1px solid white;
}

.number-player span {
	color: white;
	font-weight: bold;
	font-size: 18px;
}

.player-name {
	width: 100%;
}

.player-name {
	padding: 0 0 0 10px;
}

.icon {
	margin-right: 10px;
}

.wrap-icon {
	background-color: red;
	border-radius: 50%;

	height: 20px;
	width: 20px;

	display: flex;
	align-items: center;
	justify-content: center;

	cursor: pointer;
}

.wrap-icon i {
	color: white;
}
</style>
