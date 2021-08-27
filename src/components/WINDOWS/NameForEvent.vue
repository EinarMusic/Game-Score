<template>
	<div>
		<div class="wrap-all">
			<div class="content">
				<div class="header">
					<p>Event name</p>
				</div>
				<div class="main-section">
					<div class="select-name">
						<label>event</label>
						<input type="text" v-model="event_name" />
					</div>
					<div class="btn">
						<p v-if="event_name == ''" @click="sendNoShowEventName()">
							cancel
						</p>
						<p
							v-if="event_name != ''"
							@click="for_name_event(), sendNoShowEventName()"
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
	data() {
		return {
			event_name: "",
		};
	},
	methods: {
		sendNoShowEventName() {
			this.$emit("eventName", false);
		},
		for_name_event() {
			this.$emit("get_name_event", this.event_name);
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
