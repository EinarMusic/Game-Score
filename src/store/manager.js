export default {
	namespaced: true,
	state: {
		click_for_manager: "",
	},
	mutations: {
		manager_for_team(state, team) {
			state.click_for_manager = team;
		},
	},
};
