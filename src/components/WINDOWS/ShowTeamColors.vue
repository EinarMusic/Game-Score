<template>
	<div>
		<div class="wrap-all">
			<div class="content">
				<div class="header">
					<p v-if="what_team == '2'">Team 2</p>
					<p v-else>Team 1</p>
				</div>
				<div class="main-section">
					<div class="header-section">
						<p>Edit team colours</p>
					</div>
					<div class="select-color">
						<div>
							<span
								@click="for_team_color('255, 0, 0')"
								style="background:red;"
							></span>
							<span
								@click="for_team_color('0, 0, 0')"
								style="background:black;"
							></span>
							<span
								@click="for_team_color('128, 128, 128')"
								style="background:gray;"
							></span>
							<span
								@click="for_team_color('0, 128, 0')"
								style="background:green;"
							></span>
							<span
								@click="for_team_color('0, 0, 255')"
								style="background:blue;"
							></span>
							<span
								@click="for_team_color('255, 255, 0')"
								style="background:yellow;"
							></span>
							<span
								@click="for_team_color('255, 255, 255')"
								style="background:white;"
							></span>
						</div>
						<div class="team-color">
							<span
								:style="{ background: 'rgb(' + style_show_color() + ')' }"
							></span>
						</div>
					</div>
					<div class="btn">
						<p v-if="!click" @click="sendNoShowAddColors()">cancel</p>
						<p v-if="click" @click="sendNoShowAddColors()">Save</p>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	props: ["what_team", "color_first_team", "color_second_team"],
	data() {
		return {
			click: false,
		};
	},
	methods: {
		sendNoShowAddColors() {
			this.$emit("AddColors", false);
		},
		for_team_color(color) {
			this.click = true;
			this.$emit("get_color_team", color);
		},
		style_show_color() {
			if (this.what_team == "1" && this.color_first_team == null) {
				return "255, 0, 0";
			} else if (this.what_team == "2" && this.color_second_team == null) {
				return "255, 255, 0";
			} else if (this.what_team == "1" && this.color_first_team != null) {
				return this.color_first_team;
			} else if (this.what_team == "2" && this.color_second_team != null) {
				return this.color_second_team;
			}
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

	background: rgb(255, 255, 255);
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

.select-color {
	display: flex;
	justify-content: space-around;
	margin: 10px 0;

	padding: 0 20px;

	background: white;
}

.select-color span {
	width: 30px;
	height: 30px;

	border: 2px solid rgb(255, 217, 4);
	border-radius: 5px;

	display: inline-block;

	margin-right: 10px;
	cursor: pointer;
}

.team-color span {
	width: 60px;
	height: 60px;

	border: 2px solid rgb(255, 217, 4);
	border-radius: 5px;

	display: inline-block;
	cursor: pointer;
}

.btn {
	text-align: end;
	margin: 15px 20px 0 0;

	cursor: pointer;
}
</style>
