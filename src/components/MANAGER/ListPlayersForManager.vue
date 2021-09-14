<template>
	<div>
		<div class="wrap-all">
			<div class="desc">
				<span>Playing This Game</span>
			</div>
			<div class="players-list" v-for="teams in team.players" :key="teams.id">
				<div
					class="number-player"
					:style="{ background: 'rgb(' + team.color + ')' }"
					style="border:1px solid white"
				>
					<span>{{ teams.number }}</span>
				</div>
				<div class="name-player">
					<span>{{ teams.player }}</span>
				</div>
				<div class="icon">
					<div class="delete-player">
						<i
							class="fa fa-minus"
							@click="
								manager_delete({
									team: manager,
									player: teams.player,
									number: teams.number,
								})
							"
							aria-hidden="true"
						></i>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
import { mapState, mapMutations } from "vuex";

export default {
	props: ["team"],
	computed: {
		...mapState({ manager: (state) => state.manager.click_for_manager }),
	},
	methods: {
		...mapMutations(["manager_delete_player"]),
		manager_delete(player) {
			this.manager_delete_player(player);
		},
	},
};
</script>

<style scoped>
.wrap-all {
	min-width: 250px;
	width: 500px;
	max-width: 500px;

	height: 500px;

	background: black;

	padding: 10px;
	margin: 15px 0 0 15px;

	border-radius: 7px;
}

.desc {
	font-size: 12px;
	margin: 5px 0;
	color: white;
}

.players-list {
	display: flex;
	align-items: center;

	width: 100%;
	height: 40px;

	margin-bottom: 5px;

	border-radius: 5px;

	cursor: pointer;

	background: white;
}

.number-player {
	border-top-left-radius: 5px;
	border-bottom-left-radius: 5px;

	display: flex;
	justify-content: center;
	align-items: center;

	width: 75px;
	height: 40px;

	text-align: center;
	font-weight: bold;
	font-size: 23px;

	background: red;
	color: white;
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

.icon {
	margin-right: 10px;
}

.delete-player {
	background-color: red;
	border-radius: 50%;

	height: 20px;
	width: 20px;

	display: flex;
	align-items: center;
	justify-content: center;

	cursor: pointer;
}

.delete-player i {
	color: white;
}
</style>
