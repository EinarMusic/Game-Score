import Vue from "vue";
import Vuex from "vuex";

import manager from "./manager";
import edit_scores_and_fouls from "./editScoresAndFouls";

Vue.use(Vuex);

export default new Vuex.Store({
	strict: true,
	modules: { manager: manager, edit: edit_scores_and_fouls },
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
					player: "Black Mamba",
					number: "24",
					point: 0,
					foul: 0,
					disqualifying_foul: false,
					technical_foul: false,
					unsportsmanlike_foul: false,
				},
				{
					player: "Kyrie Irving",
					number: "1",
					point: 0,
					foul: 0,
					disqualifying_foul: false,
					technical_foul: false,
					unsportsmanlike_foul: false,
				},
				{
					player: "Julies Irving",
					number: "30",
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
					player: "Lebron James",
					number: "6",
					point: 0,
					foul: 0,
					disqualifying_foul: false,
					technical_foul: false,
					unsportsmanlike_foul: false,
				},
				{
					player: "kevin Durant",
					number: "7",
					point: 0,
					foul: 0,
					disqualifying_foul: false,
					technical_foul: false,
					unsportsmanlike_foul: false,
				},
				{
					player: "James Harden",
					number: "13",
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
		// manager
		add_new_players_manager(state, data) {
			if (data.team == "first")
				state.first_team.players.push({
					player: data.player,
					number: data.number,
					point: 0,
					foul: 0,
					disqualifying_foul: false,
					technical_foul: false,
					unsportsmanlike_foul: false,
				});
			if (data.team == "second")
				state.second_team.players.push({
					player: data.player,
					number: data.number,
					point: 0,
					foul: 0,
					disqualifying_foul: false,
					technical_foul: false,
					unsportsmanlike_foul: false,
				});
		},
		manager_delete_player(state, data) {
			if (data.team == "first") {
				let index = state.first_team.players.findIndex((player) => {
					return player.number == data.number && player.player == data.player;
				});
				return state.first_team.players.splice(index, 1);
			} else if (data.team == "second") {
				let index = state.second_team.players.findIndex((player) => {
					return player.number == data.number && player.player == data.player;
				});
				return state.second_team.players.splice(index, 1);
			}
		},
		// from edit modules
		change_play_from_edit(state, edit) {
			let player = [];
			if (edit.team == state.first_team.team) {
				player = state.first_team.players
					.filter((data) => {
						return data.player == edit.player && data.number == edit.number;
					})
					.find((data) => data);
			} else if (edit.team == state.second_team.team) {
				player = state.second_team.players
					.filter((data) => {
						return data.player == edit.player && data.number == edit.number;
					})
					.find((data) => data);
			}

			// change
			if (edit.type == "change" && edit.game == "point") {
				// 3
				if (edit.play == 3 && edit.before == 1) {
					player.point = player.point + 2;
				} else if (edit.play == 3 && edit.before == 2) {
					player.point = player.point + 1;
					// 2
				} else if (edit.play == 2 && edit.before == 3) {
					player.point = player.point - 1;
				} else if (edit.play == 2 && edit.before == 1) {
					player.point = player.point + 1;
					// 1
				} else if (edit.play == 1 && edit.before == 3) {
					player.point = player.point - 2;
				} else if (edit.play == 1 && edit.before == 2) {
					player.point = player.point - 1;
				}
			}
			// change other
			else if (edit.type == "change" && edit.game == "other") {
				if (edit.play == "Technical Foul") {
					player.technical_foul = true;
					player.disqualifying_foul = false;
					player.unsportsmanlike_foul = false;
				} else if (edit.play == "Disqualifying Foul") {
					player.disqualifying_foul = true;
					player.technical_foul = false;
					player.unsportsmanlike_foul = false;
				} else if (edit.play == "Unsportsmanlike Foul") {
					player.unsportsmanlike_foul = true;
					player.technical_foul = false;
					player.disqualifying_foul = false;
				}
			}
			// delete
			else if (edit.type == "delete" && edit.game == "point") {
				player.point = player.point - edit.play;
			} else if (edit.type == "delete" && edit.game == "foul") {
				player.foul = player.foul - 1;
			} else if (edit.type == "other" && edit.game == "technical") {
				player.disqualifying_foul = false;
				player.technical_foul = false;
				player.unsportsmanlike_foul = false;
			}
		},
		// re-assing
		add_for_re_assing_play(state, edit) {
			console.log(state.first_team, state.second_team);
			let player = [];
			if (edit.team == state.first_team.team) {
				player = state.first_team.players
					.filter((data) => {
						return data.player == edit.player && data.number == edit.number;
					})
					.find((data) => data);
			} else if (edit.team == state.second_team.team) {
				player = state.second_team.players
					.filter((data) => {
						return data.player == edit.player && data.number == edit.number;
					})
					.find((data) => data);
			}

			if (
				Object.getOwnPropertyNames(edit).some((data) => {
					return data == "point";
				})
			) {
				player.point = player.point + edit.point;
			} else if (
				Object.getOwnPropertyNames(edit).some((data) => {
					return data == "fouls";
				})
			) {
				player.foul = 1;
			} else if (
				Object.getOwnPropertyNames(edit).some((data) => {
					return data == "other";
				})
			) {
				if (edit.other == "technical_foul") {
					player.technical_foul = true;
				} else if (edit.other == "disqualifying_foul") {
					player.disqualifying_foul = true;
				} else if (edit.other == "unsportsmanlike_foul") {
					player.unsportsmanlike_foul = true;
				}
			}
		},
		delete_for_re_assing_play(state, edit) {
			let player = [];
			if (edit.team == state.first_team.team) {
				player = state.first_team.players
					.filter((data) => {
						return data.player == edit.player && data.number == edit.number;
					})
					.find((data) => data);
			} else if (edit.team == state.second_team.team) {
				player = state.second_team.players
					.filter((data) => {
						return data.player == edit.player && data.number == edit.number;
					})
					.find((data) => data);
			}

			if (
				Object.getOwnPropertyNames(edit).some((data) => {
					return data == "point";
				})
			) {
				player.point = player.point - edit.point;
			} else if (
				Object.getOwnPropertyNames(edit).some((data) => {
					return data == "fouls";
				})
			) {
				player.foul = player.foul - edit.fouls;
			} else if (
				Object.getOwnPropertyNames(edit).some((data) => {
					return data == "other";
				})
			) {
				if (edit.other == "technical_foul") {
					player.technical_foul = false;
				} else if (edit.other == "disqualifying_foul") {
					player.disqualifying_foul = false;
				} else if (edit.other == "unsportsmanlike_foul") {
					player.unsportsmanlike_foul = false;
				}
			}
		},
	},
});
