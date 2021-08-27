<template>
	<div>
		<div class="wrap-all">
			<div
				class="content"
				:style="{
					color: click_and_player ? 'rgba(255, 255, 255, 0.425)' : 'white',
				}"
			>
				<div class="header">
					<slot name="first_team" />
					<div :class="click_and_player ? 'clock_style' : 'clock'">
						<slot name="counter" />
					</div>
					<slot name="second_team" />
				</div>
				<div class="section-main">
					<div class="section-left">
						<div
							class="foul-desc"
							:style="{
								color: click_and_player
									? 'rgba(170, 170, 170, 0.425)'
									: 'rgb(170, 170, 170)',
								border: first_team.foul >= 5 ? '1px solid orange' : 'none',
							}"
						>
							<span
								:style="{
									color: click_and_player
										? 'rgba(255, 166, 0, 0.425)'
										: 'orange',
								}"
								>{{ first_team.foul }}</span
							>
							<p>FOULS THIS PERIOD</p>
						</div>
						<div
							class="time-desc"
							:style="{
								color: click_and_player
									? 'rgba(170, 170, 170, 0.425)'
									: 'rgb(170, 170, 170)',
								border: first_team.timeout == 0 ? '1px solid orange' : 'none',
							}"
						>
							<span
								:style="{
									color: click_and_player
										? 'rgba(255, 166, 0, 0.425)'
										: 'orange',
								}"
								>{{ first_team.timeout }}</span
							>
							<p>TIMEOUTS REMAINIG</p>
						</div>
					</div>
					<div class="market-point-content">
						<div
							class="period"
							:style="{
								color: click_and_player
									? 'rgba(170, 170, 170, 0.425)'
									: 'rgb(170, 170, 170)',
							}"
						>
							<i
								style="margin-right:5px;"
								class="fa fa-clock-o"
								aria-hidden="true"
							></i>
							<slot name="period" />
						</div>
						<div class="market-point">
							<div
								class="marker-first-team"
								:style="{
									color: click_and_player
										? 'rgba(255, 166, 0, 0.425)'
										: 'orange',
								}"
							>
								<span>{{
									total_point_first_team == 0 ? "00" : total_point_first_team
								}}</span>
							</div>
							<span
								class="vs"
								:style="{
									color: click_and_player
										? 'rgba(170, 170, 170, 0.425)'
										: 'rgb(170, 170, 170)',
								}"
								>vs</span
							>
							<div
								class="marker-second-team"
								:style="{
									color: click_and_player
										? 'rgba(255, 166, 0, 0.425)'
										: 'orange',
								}"
							>
								<span>{{
									total_point_second_team == 0 ? "00" : total_point_second_team
								}}</span>
							</div>
						</div>
					</div>
					<div class="section-right">
						<div
							class="foul-desc"
							:style="{
								color: click_and_player
									? 'rgba(170, 170, 170, 0.425)'
									: 'rgb(170, 170, 170)',
								border: second_team.foul >= 5 ? '1px solid orange' : 'none',
							}"
						>
							<span
								:style="{
									color: click_and_player
										? 'rgba(255, 166, 0, 0.425)'
										: 'orange',
								}"
								>{{ second_team.foul }}</span
							>
							<p>FOULS THIS PERIOD</p>
						</div>
						<div
							class="time-desc"
							:style="{
								color: click_and_player
									? 'rgba(170, 170, 170, 0.425)'
									: 'rgb(170, 170, 170)',
								border: second_team.timeout == 0 ? '1px solid orange' : 'none',
							}"
						>
							<span
								:style="{
									color: click_and_player
										? 'rgba(255, 166, 0, 0.425)'
										: 'orange',
								}"
								>{{ second_team.timeout }}</span
							>
							<p>TIMEOUTS REMAINIG</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
import { mapState, mapGetters } from "vuex";

export default {
	computed: {
		...mapState(["click_and_player", "first_team", "second_team"]),
		...mapGetters(["total_point_first_team", "total_point_second_team"]),
	},
};
</script>

<style scoped>
.content {
	padding: 15px 20px;
	border-radius: 10px;

	margin: 15px 15px;

	background: black;
}

.header {
	display: flex;
	justify-content: space-between;
	align-items: center;
}

.header p {
	font-size: 17px;
	font-weight: 550;
}

/* click player*/

.clock_style {
	font-size: 35px;
	font-weight: 550;
	color: rgba(255, 0, 0, 0.425);
}

.clock {
	font-size: 35px;
	font-weight: 550;
	color: red;
}

/* */

.name-first-team,
.name-second-team {
	display: flex;

	width: 300px;
	padding: 10px 0;
	margin-bottom: 15px;
}

.name-second-team {
	display: flex;
	flex-direction: row-reverse;
}

.name-first-team p {
	margin: 0 25px;
}

.name-second-team i {
	margin: 0 25px;
}

/**/
.section-main,
.section-left,
.section-right {
	display: flex;
	justify-content: space-between;
	align-items: center;
}

.foul-desc,
.time-desc {
	border-radius: 5px;
	background: rgb(49, 49, 49);

	font-weight: 550;

	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;

	font-size: 12px;
	text-align: center;

	width: 90px;
	height: 90px;
}

.foul-desc {
	margin-right: 15px;
}

.foul-desc span,
.time-desc span {
	font-size: 24px;
}

/**/
.market-point {
	display: flex;
	align-items: center;
	justify-content: space-between;
}

.marker-first-team,
.marker-second-team {
	font-weight: 550;
}

.market-point .marker-first-team span,
.marker-second-team span {
	font-size: 64px;
}

.period {
	display: flex;
	align-items: center;
	justify-content: center;

	text-align: center;
	font-size: 13px;
	font-weight: 550;
}

.vs {
	margin: 0 20px;
	font-size: 25px;
}
</style>
