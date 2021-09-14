export default {
	namespaced: true,
	state: {
		edit_scores_and_fouls: [
			/*{
				team: "Southern Mariners",
				color: "0, 0, 0",
				period: 1,
				time: "00:10",
				timeout: "timeout",
				edit: false,
				changed_action: "",
			},
			{
				team: "Southern Mariners",
				color: "0, 0, 0",
				period: 1,
				time: "01:00",
				player: "Ranie Tavarez P.",
				number: "7",
				fouls: 0,
				point: 2,
				edit: false,
				other: "",
				changed_action: "Changed Action: from +3 to +2 Points at (P1 - 01:20)",
			},
			{
				team: "Milton Mutants Men's A Grade",
				color: "255, 0, 0",
				period: 1,
				time: "01:20",
				player: "Jerei Peralta",
				number: "24",
				fouls: 1,
				point: 2,
				edit: false,
				other: "",
				changed_action: "Changed Action: from +2 to +3 Points at (P1 - 01:20)",
			},
			{
				team: "Southern Mariners",
				color: "0, 0, 0",
				period: 1,
				time: "02:00",
				player: "Ranie Tavarez P.",
				number: "7",
				fouls: 1,
				point: 3,
				edit: false,
				other: "",
				changed_action: "",
			},
			{
				team: "Milton Mutants Men's A Grade",
				color: "255, 0, 0",
				period: 1,
				time: "02:40",
				timeout: "timeout",
				edit: false,
				changed_action: "",
			},
			{
				team: "Southern Mariners",
				color: "0, 0, 0",
				period: 2,
				time: "01:00",
				player: "Ranie Tavarez P.",
				number: "7",
				fouls: 2,
				point: 2,
				edit: false,
				other: "",
				changed_action: "",
			},
		*/
		],
		data_for_re_assign: {},
	},
	getters: {
		filter_for_period: (state) =>
			state.edit_scores_and_fouls.filter((data) => {
				return data.period == 1;
			}),
		list_Players_style: (state) =>
			state.edit_scores_and_fouls.some((data) => {
				return data.edit == true;
			}),
	},
	mutations: {
		// re-assign
		take_data_for_re_assign(state, data) {
			state.data_for_re_assign = data;
		},
		add_assign_data(state, data) {
			let player = state.edit_scores_and_fouls
				.filter((play) => {
					return (
						play.time == state.data_for_re_assign.time &&
						play.player == state.data_for_re_assign.player &&
						play.number == state.data_for_re_assign.number
					);
				})
				.find((data) => data);

			player.player = data.player;
			player.number = data.number;
			player.team = data.team;
			player.color = data.color;
		},
		// setting edit
		edit_play(state, setting) {
			let edit = state.edit_scores_and_fouls
				.filter((data) => {
					return (
						data.player == setting.play.player &&
						data.number == setting.play.number &&
						data.team == setting.play.team &&
						data.period == setting.play.period &&
						data.time == setting.play.time &&
						data.period == setting.play.period
					);
				})
				.find((data) => data);

			// prettier-ignore
			let changed_point = 
				"Changed Action: from " +edit.point +" to " +setting.game +" Points at (P" +edit.period +" - " +edit.time +")";

			// prettier-ignore
			let changed_other =
				"Changed Action: from " +edit.other  +" to " +setting.game +" at (P" +edit.period +" - " +edit.time +")";

			if (setting.type == "point" && edit.timeout != "timeout") {
				edit.point = setting.game;
				edit.fouls = "";
				edit.changed_action = changed_point;
			} else if (setting.type == "other" && edit.timeout != "timeout") {
				edit.point = "";
				edit.fouls = 1;
				edit.other = setting.game;
				edit.changed_action = changed_other;
			}

			// show other
		},
		delete_play(state, play) {
			let index = state.edit_scores_and_fouls.findIndex((data) => {
				return (
					data.player == play.player &&
					data.number == play.number &&
					data.team == play.team &&
					data.period == play.period &&
					data.time == play.time &&
					data.period == play.period
				);
			});

			state.edit_scores_and_fouls.splice(index, 1);
		},
		//
		add_play_to_game_edit(state, play) {
			state.edit_scores_and_fouls.push(play);
		},
		show_edit_setting(state, play) {
			let edit = state.edit_scores_and_fouls
				.filter((data) => {
					return (
						data.time == play.time &&
						data.player == play.player &&
						data.period == play.period
					);
				})
				.find((data) => data);

			let some = state.edit_scores_and_fouls.some((data) => {
				return data.edit == true;
			});

			if (edit.edit == false && !some) {
				edit.edit = true;
			} else if (edit.edit == true) {
				edit.edit = false;
			}
		},
	},
};
