<template>
	<div>
		<div class="wrap-all">
			<div class="header-desc">
				<div class="header">
					<div class="wrap-header">
						<div class="grid-1"><span>TIME</span></div>
						<div class="grid-2"><span>EDIT</span></div>
						<div class="grid-3"><span>#</span></div>
						<div class="grid-4"><span>PLAYER</span></div>
						<div class="grid-5"><span>FOULS</span></div>
						<div class="grid-6"><span>POINTS</span></div>
					</div>
				</div>
			</div>
			<div class="grid-container" v-for="game in edit" :key="game.id">
				<div class="grid-item item1">
					<span class="period">P{{ game.period }}</span>
					<span class="time">{{ game.time }}</span>
				</div>
				<div
					class="grid-item item2"
					:class="game.edit ? 'top-left grid-item item2' : 'grid-item item2'"
					:style="{
						background:
							game.edit == list_Players_style
								? '#b8b8b8'
								: 'rgba(255, 255, 255, 0.425)',
					}"
					@click="click_edit(game), point_before(game.point)"
				>
					<i class="fa fa-pencil fa-lg" aria-hidden="true"></i>
				</div>
				<div
					class="grid-item item3"
					:class="game.edit ? 'top grid-item item3' : 'grid-item item3'"
					:style="{
						background:
							game.edit == list_Players_style
								? 'rgb(' + game.color + ')'
								: 'rgba(' + game.color + ',0.425)',
					}"
				>
					<span>{{ game.number }}</span>
				</div>
				<div
					class="grid-item item4"
					:class="game.edit ? 'top grid-item item4' : 'grid-item item4'"
					:style="{
						background:
							game.edit == list_Players_style
								? 'rgba(255, 255, 255)'
								: 'rgba(255, 255, 255, 0.425)',
					}"
				>
					<span class="name">{{ game.player || game.team }}</span>
					<span class="tech">{{ game.other }}</span>
				</div>
				<div
					class="grid-item item5"
					:class="game.edit ? 'top grid-item item5' : 'grid-item item5'"
					:style="{
						background:
							game.edit == list_Players_style
								? 'rgba(255, 255, 255)'
								: 'rgba(255, 255, 255, 0.425)',
					}"
				>
					<span>{{ game.fouls || game.timeout }}</span>
				</div>
				<div
					class="grid-item item6"
					:class="game.edit ? 'top-right grid-item item6' : 'grid-item item6'"
					:style="{
						background:
							game.edit == list_Players_style
								? 'rgba(255, 255, 255)'
								: 'rgba(255, 255, 255, 0.425)',
					}"
				>
					<span>{{ game.point }}</span>
				</div>
				<div v-if="game.changed_action != ''" class="grid-item item7">
					<span>{{ game.changed_action }}</span>
				</div>
				<div v-if="game.edit" class="dropdown-content grid-item item7">
					<ShowEditContent v-bind:re_assign="re_assign">
						<template v-slot:one-point>
							<div
								v-if="game.timeout != 'timeout'"
								class="point-one"
								@click="
									edit_player_from_setting({
										play: game,
										type: 'point',
										game: 1,
									}),
										change_every_from_edit(game, 1),
										click_edit(game)
								"
							>
								<span>1</span>
							</div>
						</template>
						<template v-slot:two-point>
							<div
								v-if="game.timeout != 'timeout'"
								class="point-one"
								@click="
									edit_player_from_setting({
										play: game,
										type: 'point',
										game: 2,
									}),
										change_every_from_edit(game, 2),
										click_edit(game)
								"
							>
								<span>2</span>
							</div>
						</template>
						<template v-slot:three-point>
							<div
								v-if="game.timeout != 'timeout'"
								class="point-one"
								@click="
									edit_player_from_setting({
										play: game,
										type: 'point',
										game: 3,
									}),
										change_every_from_edit(game, 3),
										click_edit(game)
								"
							>
								<span>3</span>
							</div>
						</template>
						<template v-slot:fouls>
							<div
								v-if="game.timeout != 'timeout'"
								:style="{ border: click_other ? '2px solid white' : 'none' }"
								class="fouls"
								@click="click_for_show_fouls()"
							>
								<span>Foul</span>
								<i class="fa fa-sort-desc" aria-hidden="true"></i>
								<div
									:style="{ display: click_other ? 'block' : 'none' }"
									class="dropdown-content"
								>
									<p
										@click="
											edit_player_from_setting({
												play: game,
												type: 'other',
												game: 'Disqualifying Foul',
											}),
												click_edit(game),
												change_other_every_from_edit(game)
										"
									>
										Disqualifying Foul
									</p>
									<p
										@click="
											edit_player_from_setting({
												play: game,
												type: 'other',
												game: 'Technical Foul',
											}),
												click_edit(game),
												change_other_every_from_edit(game)
										"
									>
										Technical Foul
									</p>
									<p
										@click="
											edit_player_from_setting({
												play: game,
												type: 'other',
												game: 'Unsportsmanlike Foul',
											}),
												click_edit(game),
												change_other_every_from_edit(game)
										"
									>
										Unsportsmanlike Foul
									</p>
								</div>
							</div>
						</template>
						<template v-slot:assing>
							<div
								v-if="game.timeout != 'timeout'"
								class="assing"
								@click="edit_assign_play(), send_data_to_edit(game)"
							>
								<span>Re-assign</span>
							</div>
						</template>
						<template v-slot:delete>
							<div
								class="delete"
								@click="
									delete_play_from_setting(game), delete_every_from_edit(game)
								"
							>
								<span>delete</span>
							</div>
						</template>
					</ShowEditContent>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
import { mapMutations, mapGetters } from "vuex";

import ShowEditContent from "../EDIT/ShowEditContent";

export default {
	props: ["edit"],
	components: {
		ShowEditContent,
	},
	data() {
		return {
			click_other: false,
			re_assign: false,
			point: 0,
		};
	},
	computed: {
		...mapGetters({ list_Players_style: "edit/list_Players_style" }),
	},
	methods: {
		...mapMutations({
			show_edit_setting: "edit/show_edit_setting",
			edit_play: "edit/edit_play",
			delete_play: "edit/delete_play",
			change_play_from_edit: "change_play_from_edit",
			take_data_for_re_assign: "edit/take_data_for_re_assign",
		}),
		point_before(n) {
			this.point = n;
		},
		click_edit(play) {
			this.show_edit_setting(play);
		},
		edit_player_from_setting(edit) {
			this.edit_play(edit);
		},
		delete_play_from_setting(play) {
			this.delete_play(play);
		},
		// change
		change_every_from_edit(play, point) {
			if (
				Object.getOwnPropertyNames(play).some((data) => {
					return data == "point";
				}) &&
				point == 1
			) {
				this.change_play_from_edit({
					type: "change",
					team: play.team,
					play: 1,
					player: play.player,
					number: play.number,
					game: "point",
					before: this.point,
				});
			} else if (
				Object.getOwnPropertyNames(play).some((data) => {
					return data == "point";
				}) &&
				point == 2
			) {
				this.change_play_from_edit({
					type: "change",
					team: play.team,
					play: 2,
					player: play.player,
					number: play.number,
					game: "point",
					before: this.point,
				});
			} else if (
				Object.getOwnPropertyNames(play).some((data) => {
					return data == "point";
				}) &&
				point == 3
			) {
				console.log(this.point);
				this.change_play_from_edit({
					type: "change",
					team: play.team,
					play: 3,
					player: play.player,
					number: play.number,
					game: "point",
					before: this.point,
				});
			}
		},
		// other
		change_other_every_from_edit(play) {
			console.log(play.other);
			this.change_play_from_edit({
				type: "change",
				team: play.team,
				play: play.other,
				player: play.player,
				number: play.number,
				game: "other",
			});
		},
		// delete
		delete_every_from_edit(play) {
			if (
				Object.getOwnPropertyNames(play).some((data) => {
					return data == "point";
				})
			) {
				this.change_play_from_edit({
					type: "delete",
					play: play.point,
					player: play.player,
					number: play.number,
					game: "point",
					team: play.team,
				});
			} else if (
				Object.getOwnPropertyNames(play).some((data) => {
					return data == "fouls";
				})
			) {
				this.change_play_from_edit({
					type: "delete",
					player: play.player,
					number: play.number,
					game: "foul",
					team: play.team,
				});
			} else if (
				Object.getOwnPropertyNames(play).some((data) => {
					return data == "other";
				})
			) {
				this.change_play_from_edit({
					type: "other",
					player: play.player,
					number: play.number,
					game: "technical",
					team: play.team,
				});
			}
		},
		// re-assign
		send_data_to_edit(data) {
			this.take_data_for_re_assign(data);
		},
		click_for_show_fouls() {
			if (this.click_other == true) return (this.click_other = false);
			return (this.click_other = true);
		},
		edit_assign_play() {
			if (this.re_assign == false) return (this.re_assign = true);
			return (this.re_assign = false);
		},
	},
};
</script>

<style scoped>
::-webkit-scrollbar {
	width: 0px;
	background: transparent; /* make scrollbar transparent */
}

.wrap-all {
	width: 575px;
	height: 615px;

	padding: 0 10px 0 10px;
	margin-left: 15px;

	border-radius: 7px;
	background: black;

	color: white;

	overflow: scroll;
	z-index: 1;
}

/**/

.header {
	padding-bottom: 30px;

	background: black;
}

.wrap-header {
	font-size: 10px;
	font-weight: bold;
	text-align: center;

	padding: 10px 0;
	width: 555px;

	position: fixed;
	top: 95px;
	z-index: 99;
	background: black;
}

.wrap-header {
	display: grid;
	grid-template-columns: 65px 50px 50px 285px auto auto;

	margin: 5px 0;
}

/**/
.grid-container {
	display: grid;
	grid-template-columns: 67px 48px 48px 285px 55px 52px;
	grid-template-rows: 46px;

	margin: 5px 0;

	font-size: 12px;

	position: relative;
}

.grid-item {
	background-color: white;
	color: black;
	font-size: 13px;

	display: flex;
	align-items: center;
	justify-content: center;
}

.item1 {
	background: black;
}
.period {
	font-size: 14px;
	font-weight: bold;
	color: #8f8e8e;

	margin-right: 5px;
}
.time {
	font-size: 12px;
	color: white;
	font-weight: bold;

	margin-right: 5px;
}

.item2 {
	font-size: 12px;

	border-top-left-radius: 7px;
	border-bottom-left-radius: 7px;
	background: #b8b8b8;
	color: white;

	cursor: pointer;

	border: 1px solid white;
}

.item3 {
	background: black;
	color: white;

	font-weight: bold;
	font-size: 23px;

	border-top: 1px solid white;
	border-bottom: 1px solid white;
}

.item4 {
	border: 1px solid white;
}
.name {
	font-size: 15px;
	margin-left: 10px;
	flex: 1;
}
.tech {
	color: red;
	font-size: 10px;
	margin-right: 20px;
}

.item5 {
	border-top: 1px solid white;
	border-bottom: 1px solid white;
}

.item5,
.item6 {
	font-weight: 550;
	font-size: 13px;
}

.item6 {
	font-size: 12px;
	border-top-right-radius: 7px;
	border-bottom-right-radius: 7px;

	border: 1px solid white;
}

.item7 {
	grid-column: 1 / span 6;
	grid-row: 2;

	position: relative;

	background: black;
	color: white;

	font-weight: bold;

	margin: 5px 0 10px 0;
}

/**/

.top {
	border-top: 2px solid rgb(29, 161, 242);
}

.top-right {
	border-top: 2px solid rgb(29, 161, 242);
	border-right: 2px solid rgb(29, 161, 242);
}

.top-left {
	border-top: 2px solid rgb(29, 161, 242);
	border-left: 2px solid rgb(29, 161, 242);
}

.fouls {
	position: relative;
}

/**/

.dropdown-content {
	position: absolute;
	top: 40px;
	right: -75px;

	background-color: #f9f9f9;
	box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
	z-index: 1;

	width: 165px;

	color: black;
}

.dropdown-content p {
	font-weight: 500;

	padding: 10px 5px 10px 10px;
}

.dropdown-content p:hover {
	background-color: #b1b1b1;
}
</style>
