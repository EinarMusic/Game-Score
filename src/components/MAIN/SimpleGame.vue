<template>
	<div>
		<div v-if="event_name">
			<NameForEvent
				v-on:eventName="eventName"
				v-on:get_name_event="get_name_event"
			/>
		</div>
		<div v-if="showAddNewPlayer">
			<AddPlayers
				v-on:addNewPlayers="addNewPlayers"
				v-on:get_players_and_number="get_players_and_number"
				v-bind:what_team="what_team"
			/>
		</div>
		<div v-if="sendNoShowAddColors">
			<ShowTeamColors
				v-on:AddColors="AddColors"
				v-on:get_color_team="get_color_team"
				v-bind:what_team="what_team"
				v-bind:color_first_team="color_first_team"
				v-bind:color_second_team="color_second_team"
			/>
		</div>
		<div v-if="team_name">
			<NameForTeams
				v-on:teamName="teamName"
				v-on:get_name_team="get_name_team"
				v-bind:what_team="what_team"
			/>
		</div>
		<div class="wrap-all">
			<HeaderHome>
				<template v-slot:first>
					<div class="simple-game">
						<p style="color:white">Simple Game</p>
					</div>
				</template>
				<template v-slot:second>
					<div class="tournament-game">
						<p @click="some(), send_teams()">Start</p>
					</div>
				</template>
			</HeaderHome>
			<div class="content">
				<div class="section-name-event">
					<div @click="eventName(true)">
						<EventName v-bind:event="event" />
					</div>
				</div>
				<div class="main-content">
					<div class="setup-wrap">
						<div class="setup-simple">
							<div class="first-team-name">
								<label>Team 1</label>
								<div>
									<TeamsName>
										<template v-slot:team_name>
											<div
												class="edit-name"
												@click="teamName(true), choose_team('1')"
											>
												<i
													style="color:black"
													class="fa fa-pencil"
													aria-hidden="true"
												></i>
											</div>
										</template>
										<template v-slot:team_color>
											<div
												class="edit-color"
												@click="AddColors(true), choose_team('1')"
											>
												<i
													:style="{
														color:
															color_first_team == null
																? 'red'
																: 'rgb(' + color_first_team + ')',
													}"
													class="fa fa-location-arrow fa-lg"
													aria-hidden="true"
												></i>
											</div>
										</template>
										<template v-slot:show_name_team>
											<p>
												{{
													name_first_team == null ? "Team 1" : name_first_team
												}}
											</p>
										</template>
									</TeamsName>
								</div>
							</div>
							<div class="first-team-list">
								<label>Team list</label>
								<div v-if="players_and_number.length == 0">
									<PlayerAndCoachCard
										v-bind:players="{ player: 'chose', number: '#' }"
										v-bind:color="{
											team: color_first_team,
											default: 'red',
										}"
									>
										<template v-slot:icon_delete>
											<i class="fa fa-minus" aria-hidden="true"></i>
										</template>
									</PlayerAndCoachCard>
								</div>
								<div v-for="players in players_and_number" :key="players.id">
									<PlayerAndCoachCard
										v-bind:players="players"
										v-bind:color="{ team: color_first_team, default: 'red' }"
									>
										<template v-slot:icon_delete>
											<i
												class="fa fa-minus"
												aria-hidden="true"
												@click="delete_players(players.number, '1')"
											></i>
										</template>
									</PlayerAndCoachCard>
								</div>
							</div>
							<div class="input-coach">
								<label>Coach</label>
								<input type="text" v-model="coach_first_team" />
							</div>
						</div>
						<div class="add-player">
							<span @click="addNewPlayers(true), choose_team('1')">
								<AddPlayersAndCoaches />
							</span>
						</div>
					</div>
					<div class="setup-wrap-two">
						<div class="setup-simple">
							<div class="first-team-name">
								<label>Team 2</label>
								<div>
									<TeamsName>
										<template v-slot:team_name>
											<div
												class="edit-name"
												@click="teamName(true), choose_team('2')"
											>
												<i
													style="color:black"
													class="fa fa-pencil"
													aria-hidden="true"
												></i>
											</div>
										</template>
										<template v-slot:team_color>
											<div
												class="edit-color"
												@click="AddColors(true), choose_team('2')"
											>
												<i
													:style="{
														color:
															color_second_team == null
																? 'yellow'
																: 'rgb(' + color_second_team + ')',
													}"
													class="fa fa-location-arrow fa-lg"
													aria-hidden="true"
												></i>
											</div>
										</template>
										<template v-slot:show_name_team>
											<p>
												{{
													name_second_team == null ? "Team 2" : name_second_team
												}}
											</p>
										</template>
									</TeamsName>
								</div>
							</div>
							<div class="first-team-list">
								<label>Team list</label>
								<div v-if="players_and_number_second_team.length == 0">
									<PlayerAndCoachCard
										v-bind:players="{ player: 'chose', number: '#' }"
										v-bind:color="{
											team: color_second_team,
											default: 'yellow',
										}"
									>
										<template v-slot:icon_delete>
											<i class="fa fa-minus" aria-hidden="true"></i>
										</template>
									</PlayerAndCoachCard>
								</div>
								<div
									@click="choose_team('2')"
									v-for="players in players_and_number_second_team"
									:key="players.id"
								>
									<PlayerAndCoachCard
										v-bind:players="players"
										v-bind:color="{
											team: color_second_team,
											default: 'yellow',
										}"
									>
										<template v-slot:icon_delete>
											<i
												class="fa fa-minus"
												aria-hidden="true"
												@click="delete_players(players.number, '2')"
											></i>
										</template>
									</PlayerAndCoachCard>
								</div>
							</div>
							<div class="input-coach">
								<label>Coach</label>
								<input type="text" v-model="coach_second_team" />
							</div>
						</div>
						<div class="add-player">
							<span @click="addNewPlayers(true), choose_team('2')">
								<AddPlayersAndCoaches />
							</span>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
import HeaderHome from "../HOME/HeaderHome";
import AddPlayers from "../WINDOWS/AddPlayers";
import ShowTeamColors from "../WINDOWS/ShowTeamColors";
import NameForEvent from "../WINDOWS/NameForEvent";
import NameForTeams from "../WINDOWS/NameForTeams";
//
import EventName from "../SETUP/EventName";
import TeamsName from "../SETUP/TeamsName";
import PlayerAndCoachCard from "../SETUP/PlayerAndCoachCard";
import AddPlayersAndCoaches from "../SETUP/AddPlayersAndCoaches";
//
import { mapMutations, mapState } from "vuex";

export default {
	computed: {
		...mapState(["first_team", "second_team"]),
	},
	components: {
		HeaderHome,
		AddPlayers,
		ShowTeamColors,
		NameForEvent,
		NameForTeams,
		EventName,
		TeamsName,
		PlayerAndCoachCard,
		AddPlayersAndCoaches,
	},
	data() {
		return {
			showAddNewPlayer: false,
			sendNoShowAddColors: false,
			event_name: false,
			team_name: false,
			//
			what_team: null,
			//
			event: null,
			color_first_team: null,
			name_first_team: null,
			players_and_number: [],
			coach_first_team: null,
			//
			color_second_team: null,
			name_second_team: null,
			players_and_number_second_team: [],
			coach_second_team: null,
		};
	},
	methods: {
		// ver que los datos se guarde en vuex.
		some() {
			console.log(this.first_team, "+++++++", this.second_team);
		},
		...mapMutations(["get_first_team", "get_second_team"]),
		// first team
		get_name_event(event) {
			this.event = event;
		},
		get_color_team(color) {
			if (this.what_team == "1") {
				this.color_first_team = color;
			} else if (this.what_team == "2") {
				this.color_second_team = color;
			}
		},
		get_name_team(name) {
			if (this.what_team == "1") {
				this.name_first_team = name;
			} else if (this.what_team == "2") {
				this.name_second_team = name;
			}
		},
		get_players_and_number(player, number) {
			if (this.what_team == "1") {
				this.players_and_number.push({
					player: player,
					number: number,
					point: 0,
					foul: 0,
					disqualifying_foul: false,
					technical_foul: false,
					unsportsmanlike_foul: false,
				});
			} else if (this.what_team == "2") {
				this.players_and_number_second_team.push({
					player: player,
					number: number,
					point: 0,
					foul: 0,
					disqualifying_foul: false,
					technical_foul: false,
					unsportsmanlike_foul: false,
				});
			}
		},
		send_teams() {
			this.get_first_team({
				event: this.event,
				team: this.name_first_team,
				color: this.color_first_team,
				coach: this.coach_first_team,
				timeout: 2,
				players: this.players_and_number,
			});
			this.get_second_team({
				event: this.event,
				team: this.name_second_team,
				color: this.color_second_team,
				coach: this.coach_second_team,
				timeout: 2,
				players: this.players_and_number_second_team,
			});

			this.$router.push("/marker");
		},
		delete_players(number, team) {
			if (team == "1") {
				let index = this.players_and_number.findIndex(
					(data) => data.number == number
				);
				return this.players_and_number.splice(index, 1);
			} else if (team == "2") {
				let index = this.players_and_number_second_team.findIndex(
					(data) => data.number == number
				);
				return this.players_and_number_second_team.splice(index, 1);
			}
		},
		//
		eventName(bool) {
			return (this.event_name = bool);
		},
		addNewPlayers(bool) {
			return (this.showAddNewPlayer = bool);
		},
		AddColors(bool) {
			return (this.sendNoShowAddColors = bool);
		},
		teamName(bool) {
			return (this.team_name = bool);
		},
		choose_team(team) {
			return (this.what_team = team);
		},
	},
};
</script>

<style scoped>
.wrap-all {
	/*background: rgb(102, 102, 102);
	background: linear-gradient(
		90deg,
		rgba(102, 102, 102, 1) 0%,
		rgba(0, 0, 0, 1) 100%
	);*/
	color: white;

	height: 100vh;
	width: 100%;
}

.section-name-event {
	margin-left: 15px;
}

/* header */
.simple-game {
	margin: 0 5px;
}

.simple-game p {
	color: black;

	padding: 15px 50px;
	font-weight: 550;
}

.tournament-game {
	background-color: rgb(29, 161, 242);

	margin: 0 5px;

	cursor: pointer;
}

.tournament-game p {
	color: white;

	padding: 15px 50px;
	font-weight: 550;
}

/**/
.main-content {
	display: flex;
	justify-content: space-between;

	padding: 15px;
	margin: 15px;

	border-radius: 10px;
	background: black;
}

.setup-wrap {
	display: flex;
	justify-content: space-between;

	border-right: 2px solid rgb(112, 111, 111);

	width: 100%;
	min-height: 300px;

	padding-right: 20px;
}

.setup-wrap-two {
	display: flex;
	flex-direction: row-reverse;
	justify-content: space-between;

	width: 100%;
	padding-left: 20px;
}

.setup-simple {
	display: flex;
	flex-direction: column;
	justify-content: space-around;
}

.first-team-list {
	margin: 10px 0;
}

.first-team-name label,
.first-team-list label,
.input-coach label {
	font-size: 13px;
}

.input-coach {
	display: flex;
	flex-direction: column;
}

.input-coach input {
	width: 250px;
	height: 40px;

	outline: none;
	border: 1px solid #e4e2e2;

	font-size: 15px;
	padding-left: 5px;
}
</style>
