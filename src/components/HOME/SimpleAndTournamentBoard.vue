<template>
	<div>
		<HeaderHome>
			<template v-slot:first>
				<div class="simple-game">
					<p>Simple Game</p>
				</div>
			</template>
			<template v-slot:second>
				<div class="tournament-game">
					<p>Tournament</p>
				</div>
			</template>
		</HeaderHome>
		<div class="wrap-all">
			<div class="content">
				<div class="description-board">
					<h1>Simple Game</h1>
				</div>
				<div class="content-board">
					<div class="wrap-board">
						<div class="event">liga adc</div>
						<div class="vs-section">adc vs sfm</div>
						<div class="date">August 19, 2021</div>
						<div class="status">Finished</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
import HeaderHome from "../HOME/HeaderHome";

export default {
	components: {
		HeaderHome,
	},
};
</script>

<style scoped>
.description-board {
	margin: 10px 0 10px 20px;
}

.description-board {
	font-size: 10px;
}

/* header */

.simple-game,
.tournament-game {
	background-color: rgb(29, 161, 242);

	margin: 0 5px;

	cursor: pointer;
}

.simple-game p,
.tournament-game p {
	color: white;

	padding: 15px 50px;
	font-weight: 550;
}

/**/

.wrap-board {
	display: flex;
	border: 1px solid #707070;
}

.event,
.date,
.status {
	text-align: center;

	padding: 10px 60px;
}

.vs-section {
	padding: 10px 80px;
	text-align: center;
}
</style>
