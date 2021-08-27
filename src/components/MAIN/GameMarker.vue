<template>
	<div>
		<div v-if="show_edit_clock">
			<EditClockMarker
				v-on:edit_clock="edit_clock"
				v-on:get_clock_from_edit_clock="get_clock_from_edit_clock"
				v-bind:clock="{ minutes: minutes, seconds: seconds }"
			/>
		</div>
		<div class="wrap-all">
			<div class="header">
				<HeaderOfBoard>
					<template v-slot:start>
						<p
							v-if="stop_counter"
							@click="update_counter(false)"
							style="background:rgb(29, 161, 242);color:white;"
						>
							Stop Clock
						</p>
						<p
							v-else
							@click="counter(), update_counter(true)"
							style="background:red;color:white;"
							:style="{
								background: click_and_player
									? 'rgba(255, 0, 0, 0.425)'
									: 'rgb(255, 0, 0)',
								color: click_and_player
									? 'rgba(255, 255, 255, 0.425)'
									: 'white',
							}"
						>
							Start Clock
						</p>
					</template>
					<template v-slot:clock>
						<p @click="edit_clock(true)">Edit Clock</p>
					</template>
				</HeaderOfBoard>
			</div>
			<div class="marker">
				<MarkerOfBoard>
					<template v-slot:counter>
						<span>{{
							minutes_text != ""
								? minutes_text + ":" + seconds_text
								: minutes + ":" + seconds + "0"
						}}</span>
					</template>
					<template v-slot:first_team>
						<div class="name-first-team">
							<DesignForJersey v-bind:color="'rgb(' + first_team.color + ')'" />
							<p>{{ first_team.team }}</p>
						</div>
					</template>
					<template v-slot:period>
						<p>PERIOD {{ game.period }}</p>
					</template>
					<template v-slot:second_team>
						<div class="name-second-team">
							<p>{{ second_team.team }}</p>
							<DesignForJersey
								style="margin-right:20px;"
								v-bind:color="'rgb(' + second_team.color + ')'"
							/>
						</div>
					</template>
				</MarkerOfBoard>
			</div>
			<div class="second-content">
				<div class="list">
					<ListOfPlayers
						v-bind:team="first_team"
						v-bind:color="first_team.color"
						v-on:player_select_with_click="player_select_with_click"
					/>
				</div>
				<div class="map">
					<BoardToMap v-on:for_other_option="for_other_option">
						<template v-slot:one_point>
							<div
								class="one-point"
								@click="points_for_player(1), dark_click()"
							>
								<span>+1</span>
							</div>
						</template>
						<template v-slot:two_point>
							<div
								class="two-point"
								@click="points_for_player(2), dark_click()"
							>
								<span>+2</span>
							</div>
						</template>
						<template v-slot:three_point>
							<div
								class="three-point"
								@click="points_for_player(3), dark_click()"
							>
								<span>+3</span>
							</div>
						</template>
						<template v-slot:foul>
							<div class="foul" @click="foul_for_player(1), dark_click()">
								<span>Foul</span>
							</div>
						</template>
					</BoardToMap>
				</div>
				<div class="list">
					<ListOfPlayers
						v-bind:team="second_team"
						v-bind:color="second_team.color"
						v-on:player_select_with_click="player_select_with_click"
					/>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
import HeaderOfBoard from "../BOARD/HeaderOfBoard";
import MarkerOfBoard from "../BOARD/MarkerOfBoard";
import ListOfPlayers from "../BOARD/ListOfPlayers";
import BoardToMap from "../BOARD/BoardToMap";
import EditClockMarker from "../WINDOWS/EditClockMarker";
import DesignForJersey from "../DESIGN/DesignForJersey";

import { mapState, mapMutations } from "vuex";

export default {
	components: {
		HeaderOfBoard,
		MarkerOfBoard,
		ListOfPlayers,
		BoardToMap,
		EditClockMarker,
		DesignForJersey,
	},
	data() {
		return {
			minutes: 20,
			seconds: 0,
			minutes_text: "",
			seconds_text: "",
			stop_counter: false,
			//
			show_edit_clock: false,
			//
			period: 1,
			//
			player_with_click: "",
			number_with_click: "",
			team_select: "",
		};
	},
	computed: {
		...mapState([
			"first_team",
			"second_team",
			"click_and_player",
			"board_click",
			"game",
		]),
	},
	methods: {
		...mapMutations([
			"point_player",
			"player_click",
			"foul_player",
			"other_option",
			"end_of_period",
			"end_of_quarter_change_timeout",
			"end_of_quarter_change_foul"
		]),
		dark_click() {
			this.player_click(false);
		},
		player_select_with_click(data) {
			this.player_with_click = data.player;
			this.number_with_click = data.number;
			this.team_select = data.team;
		},
		points_for_player(point) {
			this.point_player({
				player: this.player_with_click,
				number: this.number_with_click,
				team: this.team_select,
				point: point,
			});
		},
		foul_for_player(foul) {
			this.foul_player({
				player: this.player_with_click,
				number: this.number_with_click,
				team: this.team_select,
				foul: foul,
			});
		},
		for_other_option(data) {
			this.other_option({
				player: this.player_with_click,
				number: this.number_with_click,
				team: this.team_select,
				other: data,
			});
		},
		update_counter(bool) {
			this.stop_counter = bool;
		},
		counter() {
			let counter = setInterval(() => {
				if (this.minutes > 0) {
					if (this.seconds == 59) this.minutes--;
				}

				this.seconds--;
				if (this.seconds < 0) this.seconds = 59;

				this.minutes_text = this.minutes;
				this.seconds_text = this.seconds;

				if (this.minutes < 10) this.minutes_text = "0" + this.minutes_text;

				if (this.seconds < 10) this.seconds_text = "0" + this.seconds_text;

				if (!this.stop_counter) clearInterval(counter);

				if (this.minutes == 0 && this.seconds == 0) {
					this.end_of_period(1);
					this.end_of_quarter_change_timeout();
					this.end_of_quarter_change_foul();
				}
			}, 1000);

			return counter;
		},
		get_clock_from_edit_clock(data) {
			this.minutes = data.minutes;
			this.seconds = data.seconds;
			this.minutes_text = data.minutes;
			this.seconds_text = data.seconds;
		},
		edit_clock(bool) {
			this.show_edit_clock = bool;
		},
	},
};
</script>

<style scoped>
.second-content {
	display: flex;
	justify-content: space-between;

	margin: 0 15px;
	padding: 15px 15px;

	background: black;
	border-radius: 10px;
}
</style>
