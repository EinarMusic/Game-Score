<template>
	<div>
		<div class="wrap-all">
			<div class="content">
				<div class="header">
					<p v-if="what_team == '2'">Team 2</p>
					<p v-else>Team 1</p>
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
							@click="sendNoShowAddPlayer()"
						>
							cancel
						</p>
						<p
							v-if="player != '' && number != ''"
							@click="sendNoShowAddPlayer(), for_get_name_and_number()"
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
export default {
	props: ["what_team"],
	data() {
		return {
			player: "",
			number: "",
		};
	},
	methods: {
		sendNoShowAddPlayer() {
			this.$emit("addNewPlayers", false);
		},
		for_get_name_and_number() {
			this.$emit("get_players_and_number", this.player, this.number);
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
