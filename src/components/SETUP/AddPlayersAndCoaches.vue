<template>
	<div>
		<div class="wrap-all">
			<div class="desc-header">
				<span>Find or add coaches and players</span>
			</div>
			<div class="add-btn" @click="for_show_add_player_manager(true)">
				<div class="icon">
					<i class="fa fa-user-plus" aria-hidden="true"></i>
				</div>
				<div class="desc">
					<span>Add new</span>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	methods: {
		for_show_add_player_manager(bool) {
			this.$emit("show_player_for_manager", bool);
		},
	},
};
</script>

<style scoped>
.wrap-all {
	padding: 7px;
	margin: 13px 0;
}

.desc-header {
	margin-bottom: 10px;
	margin: 5px 0;
}

.desc-header span {
	font-size: 12px;
	color: white;
}

.add-btn {
	display: inline-block;

	display: flex;
	justify-content: center;
	align-items: center;

	height: 50px;
	width: 140px;

	background: #e4e2e2;
	border-radius: 5px;

	cursor: pointer;
}

.icon {
	margin-right: 10px;

	color: #474747;
}

.desc {
	color: rgb(56, 56, 56);
	font-weight: 550;
}

.desc span {
	font-size: 14px;
}
</style>
