<template>
	<div>
		<div class="wrap-all">
			<div class="title-assign">
				<div class="header-desc-assig">
					<p>Re-assign to</p>
				</div>
				<div class="show-team">
					<slot name="first_team" />
					<slot name="second_team" />
				</div>
				<div
					class="list-player-assign"
					v-for="team in teams.players"
					:key="team.id"
					@click="
						re_assign_play({
							player: team.player,
							number: team.number,
							team: teams.team,
							color: teams.color,
						}),
							add_for_re_assing_play(data_for_re_assign)
					"
				>
					<div
						class="number-assign"
						:style="{ background: 'rgb(' + teams.color + ')' }"
					>
						<span>{{ team.number }}</span>
					</div>
					<div class="player-assign">
						<span>{{ team.player }}</span>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
import { mapMutations, mapState } from "vuex";

export default {
	props: ["teams"],
	computed: {
		...mapState({
			data_for_re_assign: (state) => state.edit.data_for_re_assign,
		}),
	},
	methods: {
		...mapMutations({
			add_assign_data: "edit/add_assign_data",
			delete_for_re_assing_play: "delete_for_re_assing_play",
			add_for_re_assing_play: "add_for_re_assing_play", // top
		}),
		re_assign_play(data) {
			this.delete_for_re_assing_play(this.data_for_re_assign); // need be first that (add_assign_data) function.
			this.add_assign_data(data);
		},
	},
};
</script>

<style scoped>
.title-assign {
	width: 488px;

	background: white;
	padding: 0 0 1px 0;

	position: absolute;
	right: -2px;

	border-bottom-left-radius: 7px;
	border-bottom-right-radius: 7px;

	border-left: 2px solid rgb(29, 161, 242);
	border-right: 2px solid rgb(29, 161, 242);
	border-bottom: 2px solid rgb(29, 161, 242);
}

.header-desc-assig p {
	color: #5e5e5e;
	font-weight: bold;

	margin: 10px 0 10px 10px;
}

.show-team {
	display: flex;
	align-items: center;

	margin-bottom: 5px;
}

.first-team,
.second-team {
	border-radius: 7px;
	background: #b8b8b8;

	cursor: pointer;

	width: 100%;
	margin: 0 5px;
	padding: 15px 0;

	text-align: center;
	color: #414040;
}

.list-player-assign {
	display: flex;
	align-items: center;

	padding: 0 5px;
	margin-bottom: 3px;

	cursor: pointer;
}

.number-assign {
	display: flex;
	justify-content: center;
	align-items: center;

	width: 48px;
	height: 44px;

	border: 1px solid white;
}

.number-assign span {
	font-weight: bold;
	font-size: 23px;

	color: white;
}

.player-assign span {
	font-size: 15px;
	font-weight: 500;
	margin-left: 10px;
}
</style>
