import Vue from "vue";
import Vuex from "vuex";

import board_module from "./board";

Vue.use(Vuex);

export default new Vuex.Store({
	strict: true,
	modules: { board: board_module },
	state: {
		game: {
			period: 1,
			score_first_team: null,
			score_second_team: null,
			fouls_firts_team: null,
			fouls_second_team: null,
			timeouts_first_team: null,
			timeouts_second_team: null,
		},
		first_team: {
			event: "prueba",
			team: "Milton Mutants Men's A Grade",
			color: "255, 0, 0",
			coach: null,
			timeout: 2,
			foul: 0,
			players: [
				{
					player: "Ranie Tavarez",
					number: "7",
					point: 0,
					foul: 0,
					disqualifying_foul: false,
					technical_foul: false,
					unsportsmanlike_foul: false,
				},
				{
					player: "Eira Tavarez",
					number: "10",
					point: 0,
					foul: 0,
					disqualifying_foul: false,
					technical_foul: false,
					unsportsmanlike_foul: false,
				},
			],
		},
		second_team: {
			event: "prueba",
			team: "Southern Mariners",
			color: "0, 0, 0",
			coach: null,
			timeout: 2,
			foul: 0,
			players: [
				{
					player: "Jerei Peralta",
					number: "24",
					point: 0,
					foul: 0,
					disqualifying_foul: false,
					technical_foul: false,
					unsportsmanlike_foul: false,
				},
				{
					player: "Einar Bear",
					number: "23",
					point: 0,
					foul: 0,
					disqualifying_foul: false,
					technical_foul: false,
					unsportsmanlike_foul: false,
				},
			],
		},
		//
		click_and_player: false,
		//
		board_click: false,
	},
	getters: {
		total_point_first_team: (state) =>
			state.first_team.players
				.map((data) => {
					return data.point;
				})
				.reduce((a, b) => a + b),
		total_point_second_team: (state) =>
			state.second_team.players
				.map((data) => {
					return data.point;
				})
				.reduce((a, b) => a + b),
		total_foul_first_team: (state) =>
			state.first_team.players
				.map((data) => {
					return data.foul;
				})
				.reduce((a, b) => a + b),
		total_foul_second_team: (state) =>
			state.second_team.players
				.map((data) => {
					return data.foul;
				})
				.reduce((a, b) => a + b),
	},
	mutations: {
		// quarter
		end_of_period(state, period) {
			if (state.game.period < 4) {
				state.game.period = state.game.period + period;
			}
		},
		end_of_quarter_change_timeout(state) {
			state.first_team.timeout = 2;
			state.second_team.timeout = 2;
		},
		end_of_quarter_change_foul(state) {
			state.first_team.foul = 0;
			state.second_team.foul = 0;
		},
		// team
		get_first_team(state, first_team) {
			state.first_team = first_team;
		},
		get_second_team(state, second_team) {
			state.second_team = second_team;
		},
		// click
		player_click(state, bool) {
			state.click_and_player = bool;
		},
		for_board_click(state, bool) {
			state.board_click = bool;
		},
		// score
		point_player(state, data) {
			let player_select = "";

			if (data.team == state.first_team.team) {
				player_select = state.first_team.players.map((player) => {
					return player;
				});
			} else if (data.team == state.second_team.team) {
				player_select = state.second_team.players.map((player) => {
					return player;
				});
			}

			let find_player = player_select
				.filter((value) => {
					return value.player == data.player && value.number == data.number;
				})
				.find((value) => {
					return value;
				});

			return (find_player.point += data.point);
		},
		foul_player(state, data) {
			let player_select = "";

			if (data.team == state.first_team.team) {
				state.first_team.foul += 1;
				player_select = state.first_team.players.map((player) => {
					return player;
				});
			} else if (data.team == state.second_team.team) {
				state.second_team.foul += 1;
				player_select = state.second_team.players.map((player) => {
					return player;
				});
			}

			let find_player = player_select
				.filter((value) => {
					return value.player == data.player && value.number == data.number;
				})
				.find((value) => {
					return value;
				});

			return (find_player.foul += data.foul);
		},
		// timeout
		timeout_team(state, data) {
			if (data.team == state.first_team.team && state.first_team.timeout != 0) {
				return (state.first_team.timeout = state.first_team.timeout - 1);
			} else if (
				data.team == state.second_team.team &&
				state.second_team.timeout != 0
			) {
				return (state.second_team.timeout = state.second_team.timeout - 1);
			}
		},
		// other
		other_option(state, data) {
			let player_select = "";

			if (data.team == state.first_team.team) {
				player_select = state.first_team.players.map((player) => {
					return player;
				});
			} else if (data.team == state.second_team.team) {
				player_select = state.second_team.players.map((player) => {
					return player;
				});
			}

			let find_player = player_select
				.filter((value) => {
					return value.player == data.player && value.number == data.number;
				})
				.find((value) => {
					return value;
				});

			if (data.other == "disqualifying_foul") {
				return (find_player.disqualifying_foul = true);
			} else if (data.other == "technical_foul") {
				return (find_player.technical_foul = true);
			} else if (data.other == "unsportsmanlike_foul") {
				return (find_player.unsportsmanlike_foul = true);
			}
		},
	},
});
