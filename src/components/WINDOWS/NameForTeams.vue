<template>
	<div>
		<div class="wrap-all">
			<div class="content">
				<div class="header">
					<p v-if="what_team == '2'">Team 2</p>
					<p v-else>Team 1</p>
				</div>
				<div class="main-section">
					<div class="select-name">
						<label>name</label>
						<input type="text" v-model="name" />
					</div>
					<div class="btn">
						<p v-if="name == ''" @click="sendNoShowTeamName()">
							cancel
						</p>
						<p v-if="name != ''" @click="for_name_team(), sendNoShowTeamName()">
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
			name: "",
		};
	},
	methods: {
		sendNoShowTeamName() {
			this.$emit("teamName", false);
		},
		for_name_team() {
			this.$emit("get_name_team", this.name);
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

	padding: 10px 0;
	margin-bottom: 5px;

	color: white;

	background-color: rgb(29, 161, 242);
}

.header-section {
	margin: 10px 0;
	padding: 0 20px;

	font-weight: 550;
}

.select-name {
	display: flex;
	flex-direction: column;
	padding: 0 20px;

	margin: 10px 0;

	background: white;
}

.select-name label {
	font-size: 12px;
	padding: 0 0 5px 0;
}

.select-name input {
	border: 1px solid red;

	font-size: 17px;
	padding: 2px 0 2px 5px;

	width: 270px;
	outline: none;
}

.btn {
	text-align: end;
	margin: 15px 20px 0 0;

	cursor: pointer;
}
</style>
