<template>
	<div>
		<div class="wrap-all">
			<div class="header">
				<div class="btn-back" style="color:rgba(255, 255, 255)">
					<router-link to="/marker" style="color:white;">
						<i class="fa fa-arrow-left fa-lg" aria-hidden="true"></i>
					</router-link>
					<div>
						<p>Manager Players</p>
					</div>
				</div>
				<div class="setting-clock">
					<div class="start">
						<p
							@click="for_switch_teams()"
							style="background-color: #b1b1b1;color:white;"
						>
							Switch Teams
						</p>
					</div>
					<router-link to="/marker" class="edit" style="text-decoration:none">
						<p style="background:rgb(29, 161, 242);color:white;">
							Done
						</p>
					</router-link>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
import { mapState } from "vuex";

export default {
	computed: {
		...mapState({ manager: (state) => state.manager.click_for_manager }),
	},
	methods: {
		for_switch_teams() {
			if (this.manager == "first") {
				this.$emit("switch_teams", "second");
			} else if (this.manager == "second") {
				this.$emit("switch_teams", "first");
			}
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
</style>
