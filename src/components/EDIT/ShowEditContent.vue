<template>
	<div>
		<div class="wrap-all">
			<div class="card-edit">
				<div class="header-edit">
					<span>Change to</span>
				</div>
				<div class="content-edit-card">
					<slot name="one-point" />
					<slot name="two-point" />
					<slot name="three-point" />
					<slot name="fouls" />
					<slot name="assing" />
					<slot name="delete" />
				</div>
				<div v-if="re_assign">
					<ReAssignContent v-bind:teams="teams == 1 ? first_team : second_team">
						<template v-slot:first_team>
							<div
								class="first-team"
								@click="filter_team_for_btn()"
								:style="{
									background: teams == 1 ? '#9b9b9b' : '#dfdede',
									color: teams == 1 ? 'white' : '#414040',
								}"
							>
								<span>{{ first_team.team }}</span>
							</div>
						</template>
						<template v-slot:second_team>
							<div
								class="second-team"
								@click="filter_team_for_btn()"
								:style="{
									background: teams == 2 ? '#9b9b9b' : '#dfdede',
									color: teams == 2 ? 'white' : '#414040',
								}"
							>
								<span>{{ second_team.team }}</span>
							</div>
						</template>
					</ReAssignContent>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
import ReAssignContent from "./ReAssignContent";

import { mapState } from "vuex";

export default {
	props: ["re_assign"],
	components: { ReAssignContent },
	data() {
		return {
			teams: 1,
		};
	},
	computed: {
		...mapState(["first_team", "second_team"]),
	},
	methods: {
		filter_team_for_btn() {
			if (this.teams == 1) {
				return (this.teams = 2);
			} else if (this.teams == 2) {
				return (this.teams = 1);
			}
		},
	},
};
</script>

<style scoped>
/**/
.card-edit {
	position: absolute;
	top: -50px;
	right: 75px;

	z-index: 99;

	height: 85px;
	width: 488px;

	background: white;
	border-bottom-left-radius: 7px;
	border-bottom-right-radius: 7px;

	border-left: 2px solid rgb(29, 161, 242);
	border-right: 2px solid rgb(29, 161, 242);
	border-bottom: 2px solid rgb(29, 161, 242);
}

.header-edit {
	font-size: 13px;
	padding: 10px 10px;

	display: inline-block;

	color: #5e5e5e;
}

.content-edit-card {
	display: flex;
	justify-content: space-around;
}

.point-one,
.point-two,
.point-three {
	display: inline-block;
	width: 50px;
	height: 40px;

	border-radius: 7px;

	cursor: pointer;
	background: #b8b8b8;

	color: #414040;
	font-weight: 550;
	font-size: 17px;
}

.fouls,
.assing,
.delete {
	display: inline-block;
	width: 95px;
	height: 40px;

	padding: 12px 10px;
	border-radius: 7px;

	cursor: pointer;
	background: #b8b8b8;

	color: #414040;
	font-weight: 550;
	font-size: 15px;
}

.point-one,
.point-two,
.point-three,
.fouls,
.assing,
.delete {
	display: flex;
	justify-content: center;
	align-items: center;
}

.fouls {
	display: flex;
	justify-content: center;
	align-items: center;
}
</style>
