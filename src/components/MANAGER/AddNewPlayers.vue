<template>
	<div>
		<div class="wrap-all">
			<div class="content">
				<div class="header">
					<p>{{ team.team }}</p>
				</div>
				<div class="main-section">
					<div class="name-player">
						<label>Add new player</label>
						<input type="text" v-model="player" />
					</div>
					<div class="number-player">
						<label>number</label>
						<input type="number" v-model="number" />
					</div>
					<div class="btn">
						<p
							v-if="player == '' || number == ''"
							@click="for_show_this_component(false)"
						>
							cancel
						</p>
						<p
							v-if="player != '' && number != ''"
							@click="for_manager_player(), for_show_this_component(false)"
						>
							Save
						</p>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
import { mapState, mapMutations } from "vuex";

export default {
	props: ["team"],
	data() {
		return {
			player: "",
			number: "",
		};
	},
	computed: {
		...mapState({
			manager: (state) => state.manager.click_for_manager,
		}),
	},
	methods: {
		...mapMutations({ add_new_players_manager: "add_new_players_manager" }),
		for_manager_player() {
			this.add_new_players_manager({
				team: this.manager,
				player: this.player,
				number: this.number,
			});
		},
		for_show_this_component(bool) {
			this.$emit("show_player_for_manager", bool);
		},
	},
};
</script>

<style scoped>
.wrap-all {
	position: absolute;

	position: absolute;
	top: 50%;
	left: 50%;
	transform: translate(-50%, -50%);
}

.content {
	width: 500px;
	height: 190px;

	background: white;
}

.header p {
	text-align: center;
	font-weight: bold;

	color: white;

	padding: 10px 0;
	margin-bottom: 5px;

	background-color: rgb(29, 161, 242);
}

.name-player,
.number-player {
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
}

.name-player label,
.number-player label {
	font-size: 14px;

	margin: 5px 0;
}

.name-player input,
.number-player input {
	border: 1px solid red;

	font-size: 17px;
	padding: 2px 0 2px 5px;

	width: 270px;
}

.btn {
	text-align: end;
	margin: 15px 20px 0 0;

	cursor: pointer;
}
</style>
