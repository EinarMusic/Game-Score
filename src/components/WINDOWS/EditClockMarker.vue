<template>
	<div>
		<div class="wrap-all">
			<div class="content">
				<div class="header">
					<p>Edit Clock</p>
				</div>
				<div class="main">
					<div class="btn-plus-top">
						<div @click="edit_minutes(true)" class="btn-left">
							<i class="fa fa-angle-up" aria-hidden="true"></i>
						</div>
						<div @click="edit_seconds(true)" class="btn-right">
							<i class="fa fa-angle-up" aria-hidden="true"></i>
						</div>
					</div>
					<div class="clock-wrap">
						<div class="minutes">
							<p>{{ minutes }}</p>
						</div>
						<div>
							<span>:</span>
						</div>
						<div class="seconds">
							<p>{{ seconds }}</p>
						</div>
					</div>
					<div class="btn-plus-bottom">
						<div @click="edit_minutes(false)" class="btn-left">
							<i class="fa fa-angle-down" aria-hidden="true"></i>
						</div>
						<div @click="edit_seconds(false)" class="btn-right">
							<i class="fa fa-angle-down" aria-hidden="true"></i>
						</div>
					</div>
					<div class="btn-cancel">
						<p @click="set_clock(), clock_edit()">save</p>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	props: ["clock"],
	data() {
		return {
			minutes: this.clock.minutes,
			seconds: this.clock.seconds,
		};
	},
	methods: {
		edit_minutes(bool) {
			bool ? this.minutes++ : this.minutes--;

			if (this.minutes < 0) this.minutes = 30;
			if (this.minutes > 30) this.minutes = 0;

			if (this.minutes < 10) this.minutes = "0" + this.minutes;
		},
		edit_seconds(bool) {
			bool ? this.seconds++ : this.seconds--;

			if (this.seconds < 0) this.seconds = 59;
			if (this.seconds > 59) this.seconds = 0;

			if (this.seconds < 10) this.seconds = "0" + this.seconds;
		},
		clock_edit() {
			this.$emit("edit_clock", false);
		},
		set_clock() {
			this.$emit("get_clock_from_edit_clock", {
				minutes: this.minutes,
				seconds: this.seconds,
			});
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

	z-index: 1;
}

.content {
	width: 400px;
}

.header {
	text-align: center;
	color: white;
	font-weight: bold;

	background-color: rgb(29, 161, 242);

	padding: 10px 0;
}

/**/
.main {
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;

	padding: 15px 15px 0 15px;

	background: white;
}

.btn-plus-top,
.btn-plus-bottom {
	display: flex;
	justify-content: space-between;

	width: 200px;
}

.btn-left,
.btn-right {
	border: 1px solid black;

	padding: 5px 30px;

	cursor: pointer;
}

.clock-wrap {
	display: flex;
	justify-content: center;

	width: 200px;
	margin: 10px 0;

	font-size: 45px;
	font-weight: bold;

	color: red;
}

.clock-wrap span {
	font-size: 40px;

	padding: 0 30px;
}

.btn-cancel {
	text-align: end;
	width: 100%;

	margin: 15px;
}

.btn-cancel p {
	cursor: pointer;
}
</style>
