export default {
	namespaced: true,
	state: {
		points: 0,
	},
	mutations: {
		get_point_player(state, point) {
			state.points = point;
		},
	},
};
