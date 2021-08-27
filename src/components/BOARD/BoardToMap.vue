<template>
	<div>
		<div class="wrap-all">
			<div class="content">
				<div class="first-line">
					<slot name="one_point" />
					<div
						class="timeout"
						:style="{
							background: click_and_player
								? 'rgba(29, 161, 242, 0.425)'
								: 'rgb(29, 161, 242)',

							border: click_timeout ? '2px solid white' : 'none',
						}"
						@click="click_for_timeout()"
					>
						<span>Timeout</span>
						<i class="fa fa-sort-desc" aria-hidden="true"></i>
						<div
							class="dropdown-content"
							:style="{ display: click_timeout ? 'block' : 'none' }"
						>
							<p @click="team_for_timeout(first_team.team)">
								{{ first_team.team }}
							</p>
							<p @click="team_for_timeout(second_team.team)">
								{{ second_team.team }}
							</p>
						</div>
					</div>
				</div>
				<div class="second-line">
					<slot name="two_point" />
					<slot name="foul" />
				</div>
				<div class="three-line">
					<slot name="three_point" />
					<div
						class="other"
						:style="{ border: click_other ? '2px solid white' : 'none' }"
						@click="click_for_other()"
					>
						<span>Other</span>
						<i class="fa fa-sort-desc" aria-hidden="true"></i>
						<div
							class="dropdown-content"
							:style="{ display: click_other ? 'block' : 'none' }"
						>
							<p @click="other_option('disqualifying_foul')">
								Disqualifying Foul
							</p>
							<p @click="other_option('technical_foul')">Technical Foul</p>
							<p @click="other_option('unsportsmanlike_foul')">
								Unsportsmanlike Foul
							</p>
						</div>
					</div>
				</div>
				<div class="four-line">
					<div
						class="last"
						:style="{ background: click_and_player ? '#e4e2e26c' : '#e4e2e2' }"
					>
						<span>Undo Last</span>
					</div>
					<div
						class="edit-score"
						:style="{ background: click_and_player ? '#e4e2e26c' : '#e4e2e2' }"
					>
						<span>Edit Score & Fouls</span>
					</div>
					<div
						class="manager"
						:style="{
							background:
								click_and_player || click_manager ? '#e4e2e26c' : '#e4e2e2',
						}"
						@click="click_for_manager()"
					>
						<span>Manager Players</span>
						<i class="fa fa-sort-desc" aria-hidden="true"></i>
						<div
							class="dropdown-content"
							:style="{ display: click_manager ? 'block' : 'none' }"
						>
							<p>Milton Mutants Men's A Grade</p>
							<p>Southern Mariners</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
import { mapState, mapMutations } from "vuex";

export default {
	computed: {
		...mapState(["click_and_player", "first_team", "second_team"]),
	},
	data() {
		return {
			click_timeout: false,
			click_other: false,
			click_manager: false,
		};
	},
	methods: {
		...mapMutations(["timeout_team"]),
		other_option(data) {
			this.$emit("for_other_option", data);
		},
		team_for_timeout(data) {
			this.timeout_team({ team: data });
		},
		click_for_timeout() {
			if (this.click_timeout == true) return (this.click_timeout = false);
			return (this.click_timeout = true);
		},
		click_for_other() {
			if (this.click_other == true) return (this.click_other = false);
			return (this.click_other = true);
		},
		click_for_manager() {
			if (this.click_manager == true) return (this.click_manager = false);
			return (this.click_manager = true);
		},
	},
};
</script>

<style scoped>
.content {
	width: 200px;

	margin: 21px 10px 0 10px;
}

.first-line,
.second-line,
.three-line {
	display: flex;
	justify-content: space-between;
}

.one-point,
.two-point,
.three-point,
.timeout,
.foul,
.other {
	background-color: rgb(29, 161, 242);
	border-radius: 5px;

	color: white;
	font-weight: bold;
	font-size: 14px;

	height: 45px;
	max-width: 97px;
	width: 97px;

	margin-bottom: 4px;

	display: flex;
	justify-content: center;
	align-items: center;

	cursor: pointer;
}

.timeout,
.other,
.manager {
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

.last,
.edit-score,
.manager {
	border-radius: 5px;

	font-weight: bold;
	font-size: 14px;

	height: 45px;
	width: 100%;

	margin-bottom: 4px;

	display: flex;
	justify-content: center;
	align-items: center;

	cursor: pointer;
}

i {
	padding-left: 5px;
}
</style>
