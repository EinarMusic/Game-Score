<template>
	<div>
		<div class="wrap-all">
			<div class="header">
				<HeaderEditScoresAndFouls>
					<template v-slot:one>
						<p
							@click="change_period_for_filter(1)"
							style="color:white;"
							:style="{
								background:
									change_period == 1 ? 'rgb(29, 161, 242)' : '#b1b1b1',
							}"
						>
							Period 1
						</p>
					</template>
					<template v-slot:two>
						<p
							@click="change_period_for_filter(2)"
							style="color:white;"
							:style="{
								background:
									change_period == 2 ? 'rgb(29, 161, 242)' : '#b1b1b1',
							}"
						>
							Period 2
						</p>
					</template>
					<template v-slot:three>
						<p
							@click="change_period_for_filter(3)"
							style="color:white;"
							:style="{
								background:
									change_period == 3 ? 'rgb(29, 161, 242)' : '#b1b1b1',
							}"
						>
							Period 3
						</p>
					</template>
					<template v-slot:four>
						<p
							@click="change_period_for_filter(4)"
							style="color:white;"
							:style="{
								background:
									change_period == 4 ? 'rgb(29, 161, 242)' : '#b1b1b1',
							}"
						>
							Period 4
						</p>
					</template>
				</HeaderEditScoresAndFouls>
			</div>
			<div class="content">
				<ShowScoresAndFouls v-bind:edit="filter_for_period(change_period)" />
			</div>
		</div>
	</div>
</template>

<script>
import { mapState } from "vuex";

import HeaderEditScoresAndFouls from "../EDIT/HeaderEditScoresAndFouls";
import ShowScoresAndFouls from "../EDIT/ShowScoresAndFouls";

export default {
	components: {
		HeaderEditScoresAndFouls,
		ShowScoresAndFouls,
	},
	data() {
		return {
			change_period: 1,
		};
	},
	computed: {
		...mapState({
			edit: (state) => state.edit.edit_scores_and_fouls,
		}),
	},
	methods: {
		change_period_for_filter(period) {
			this.change_period = period;
		},
		filter_for_period(period) {
			let takeTime = (data) => {
				return {
					//prettier-ignore
					clock: data.split("").splice(0, 2).join("")
						.concat(data.split("").splice(3).join(""))
				};
			};

			return this.edit
				.filter((data) => {
					return data.period == period;
				})
				.sort((a, b) => {
					if (takeTime(a.time).clock < takeTime(b.time).clock) {
						return takeTime(a.time).clock - takeTime(b.time).clock;
					}
				});
		},
	},
};
</script>

<style scoped></style>
