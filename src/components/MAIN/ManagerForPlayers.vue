<template>
	<div>
		<div v-if="show_player">
			<AddNewPlayers
				v-bind:team="manager == 'second' ? second_team : first_team"
				v-on:show_player_for_manager="show_player_for_manager"
			/>
		</div>
		<div class="wrap-all">
			<div class="header">
				<HeaderManagerPlayers v-on:switch_teams="switch_teams" />
			</div>
			<div class="center">
				<div class="team">
					<TeamManagerPlayer
						v-bind:team="manager == 'second' ? second_team : first_team"
					/>
				</div>
			</div>
			<div class="list">
				<div class="list-player">
					<ListPlayersForManager
						v-bind:team="manager == 'second' ? second_team : first_team"
					/>
				</div>
				<div class="add-player">
					<AddPlayersAndCoaches
						v-on:show_player_for_manager="show_player_for_manager"
					/>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
import HeaderManagerPlayers from "../MANAGER/HeaderManagerPlayers";
import TeamManagerPlayer from "../MANAGER/TeamManagerPlayer";
import ListPlayersForManager from "../MANAGER/ListPlayersForManager";
import AddPlayersAndCoaches from "../SETUP/AddPlayersAndCoaches";
import AddNewPlayers from "../MANAGER/AddNewPlayers";

import { mapState, mapMutations } from "vuex";

export default {
	components: {
		HeaderManagerPlayers,
		TeamManagerPlayer,
		ListPlayersForManager,
		AddPlayersAndCoaches,
		AddNewPlayers,
	},
	data() {
		return {
			show_player: false,
		};
	},
	computed: {
		...mapState({
			manager: (state) => state.manager.click_for_manager,
			first_team: "first_team",
			second_team: "second_team",
		}),
	},
	methods: {
		...mapMutations({
			manager_for_team: "manager/manager_for_team",
		}),
		show_player_for_manager(bool) {
			this.show_player = bool;
		},
		switch_teams(team) {
			this.manager_for_team(team);
		},
	},
};
</script>

<style scoped>
.team {
	background: black;
	margin: 15px;
	border-radius: 7px;
}

.list {
	display: flex;
	justify-content: center;

	background: black;

	margin: 15px 15px;
	border-radius: 10px;
}

.add-player {
	margin-left: 10px;
}
</style>
