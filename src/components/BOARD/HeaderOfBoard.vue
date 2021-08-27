<template>
	<div>
		<div class="wrap-all">
			<div class="header">
				<div
					class="btn-back"
					:style="{
						color: click_and_player
							? 'rgba(255, 255, 255, 0.425)'
							: 'rgba(255, 255, 255)',
					}"
				>
					<i class="fa fa-arrow-left fa-lg" aria-hidden="true"></i>
					<div>
						<p>Court 1</p>
					</div>
				</div>
				<div
					:class="click_and_player ? 'setting-clock-style' : 'setting-clock'"
				>
					<div class="start">
						<slot name="start" />
					</div>
					<div class="edit">
						<slot name="clock" />
					</div>
					<div class="referee" @click="click_for_referre">
						<p
							:style="{
								background: click_referre ? '#e4e2e26c' : '#e4e2e2',
								color: click_referre ? 'white' : 'black',
							}"
						>
							Referre Actions
							<i class="fa fa-angle-down fa-lg" aria-hidden="true"></i>
						</p>

						<div
							class="dropdown-content"
							:style="{ display: click_referre ? 'block' : 'none' }"
						>
							<p>Confirm Game</p>
							<p>Injury</p>
							<p>Incident</p>
							<p>Forfeit</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
import { mapState } from "vuex";

export default {
	computed: {
		...mapState(["click_and_player"]),
	},
	data() {
		return {
			click_referre: false,
		};
	},
	methods: {
		click_for_referre() {
			if (this.click_referre == true) return (this.click_referre = false);
			return (this.click_referre = true);
		},
	},
};
</script>

<style scoped>
.header {
	background: black;

	padding: 15px 15px;
	margin: 15px 15px;

	border-radius: 10px;
}

.header,
.btn-back,
.setting-clock,
.referee {
	display: flex;
	justify-content: space-between;
	align-items: center;
}

.btn-back i {
	cursor: pointer;
}

.btn-back div {
	margin-left: 30px;
}

.btn-back p {
	font-weight: 550;
	font-size: 19px;
}

/* click player */

.setting-clock-style {
	display: flex;
	justify-content: space-between;
	align-items: center;
}
.setting-clock-style div {
	margin: 0 2px;
}

.setting-clock-style p {
	padding: 12px 25px;

	background: #e4e2e26c;

	border-radius: 3px;

	color: black;
	font-size: 14px;
	font-weight: 550;

	cursor: pointer;
}

.setting-clock div {
	margin: 0 2px;
}

.setting-clock p {
	padding: 12px 25px;

	background: #e4e2e2;

	border-radius: 3px;

	color: black;
	font-size: 14px;
	font-weight: 550;

	cursor: pointer;
}

.referee {
	position: relative;
}

.dropdown-content {
	position: absolute;
	background-color: #f9f9f9;
	box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
	z-index: 1;

	width: 165px;

	color: black;

	top: 47px;
	left: -2px;
}

.dropdown-content p {
	font-weight: 500;

	padding: 10px 5px 10px 10px;
}

.dropdown-content p:hover {
	background-color: #b1b1b1;
}
</style>
