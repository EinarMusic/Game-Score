import Vue from "vue";
import VueRouter from "vue-router";

import home from "../components/HOME/SimpleAndTournamentBoard.vue";
import card from "../components/MAIN/SimpleGame.vue";
import marker from "../components/MAIN/GameMarker.vue";

import manager from "../components/MAIN/ManagerForPlayers.vue";
import edit from "../components/MAIN/EditScoresAndFouls.vue";

Vue.use(VueRouter);

export default new VueRouter({
	mode: "history",
	routes: [
		{ path: "/", component: home },
		{ path: "/card", component: card },
		{ path: "/marker", component: marker },
		{ path: "/manager", component: manager },
		{ path: "/edit", component: edit },
		{ path: "*", redirect: "/" },
	],
});
