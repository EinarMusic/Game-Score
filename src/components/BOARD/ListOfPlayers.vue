<template>
	<div>
		<div class="wrap-all">
			<div class="header-desc">
				<div class="wrap-header">
					<div>
						<span>#</span>
						<span>PLAYER</span>
					</div>
					<div>
						<span>FOULS</span>
						<span>POINTS</span>
					</div>
				</div>
			</div>
			<div
				class="players-list"
				:style="style_backgroud"
				v-for="teams in team.players"
				:key="teams.id"
				@click="
					get_click_player(teams.player, teams.number, team.team, team.color)
				"
			>
				<div
					v-if="player_select != teams.number"
					class="number-player"
					:style="color_team"
					style="border:1px solid white"
				>
					<span>{{ teams.number }}</span>
				</div>
				<div
					v-if="player_select == teams.number"
					class="number-player"
					:style="color_team_style"
					style="border:1px solid white"
				>
					<span>{{ teams.number }}</span>
				</div>
				<div
					v-if="player_select != teams.number"
					class="name-player"
					:style="style_backgroud"
				>
					<span>{{ teams.player }}</span>
					<p v-if="teams.disqualifying_foul">Disqualifying Foul</p>
					<p v-if="teams.technical_foul">Technical Foul</p>
					<p v-if="teams.unsportsmanlike_foul">Unsportsmanlike Foul</p>
				</div>
				<div
					v-if="player_select == teams.number"
					class="name-player"
					style="background:rgb(255, 255, 255)"
				>
					<span>{{ teams.player }}</span>
					<p v-if="teams.disqualifying_foul">Disqualifying Foul</p>
					<p v-if="teams.technical_foul">Technical Foul</p>
					<p v-if="teams.unsportsmanlike_foul">Unsportsmanlike Foul</p>
				</div>
				<div
					v-if="player_select != teams.number"
					class="foul-player"
					:style="style_backgroud"
				>
					<span v-if="teams.foul != 0">{{ teams.foul }}</span>
				</div>
				<div
					v-if="player_select == teams.number"
					class="foul-player"
					style="background:rgb(255, 255, 255)"
				>
					<span v-if="teams.foul != 0">{{ teams.foul }}</span>
				</div>
				<div
					v-if="player_select != teams.number"
					class="point-player"
					:style="style_backgroud"
				>
					<span v-if="teams.point != 0">{{ teams.point }}</span>
				</div>
				<div
					v-if="player_select == teams.number"
					class="point-player"
					style="background:rgb(255, 255, 255)"
				>
					<span v-if="teams.point != 0">{{ teams.point }}</span>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
import { mapState, mapMutations } from "vuex";

export default {
	props: ["team", "color"],
	data() {
		return {
			player_select: "no",
			color_team: "background:rgb(" + this.color + ");color:white",
			color_team_style: "background:rgba(" + this.color + ",0425);color:white",
		};
	},
	computed: {
		...mapState(["click_and_player", "first_team", "board_click"]),
		style_backgroud() {
			if (!this.click_and_player) {
				return {
					background: "rgb(255, 255, 255)",
					color: "black",
				};
			} else {
				return {
					background: "rgba(255, 255, 255, 0.425)",
					color: "black",
				};
			}
		},
	},
	methods: {
		...mapMutations(["player_click"]),
		other_option_text(
			disqualifying_foul,
			technical_foul,
			unsportsmanlike_foul
		) {
			if (disqualifying_foul == true) return "Disqualifying Foul";
			if (technical_foul == true) return "Technical Foul";
			if (unsportsmanlike_foul == true) return "Unsportsmanlike Foul";
		},
		get_click_player(player, number, teams, color) {
			if (this.click_and_player == false) {
				this.player_click(true);

				let team = this.team.players.map((data) => {
					return data;
				});

				let click_player = team
					.filter((data) => {
						return data.player == player && data.number == number;
					})
					.find((data) => data);

				this.$emit("player_select_with_click", {
					player: player,
					number: number,
					team: teams,
					color: color,
				});

				return (this.player_select = click_player.number);
			} else if (this.click_and_player == true) {
				this.player_click(false);

				return (this.player_select = "no");
			}
		},
	},
};
</script>

<style scoped>
.wrap-all {
	min-width: 250px;
	width: 500px;
	max-width: 500px;
}

/*  */
.wrap-header {
	display: flex;
	justify-content: space-between;
	font-size: 10px;

	margin-bottom: 10px;

	color: white;
}

.wrap-header span {
	display: inline-block;
	width: 50px;

	text-align: center;
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

.foul-player,
.point-player {
	width: 75px;

	height: 45px;

	display: flex;
	align-items: center;
	justify-content: center;
}

.point-player {
	border-top-right-radius: 5px;
	border-bottom-right-radius: 5px;
}
</style>
