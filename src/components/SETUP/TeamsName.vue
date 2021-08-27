<template>
	<div>
		<div class="wrap-all">
			<div class="content">
				<div class="icon-name">
					<slot name="team_name" />
					<slot name="team_color" />
					<div class="show-name">
						<slot name="show_name_team" />
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
export default {};
</script>

<style scoped>
.content {
	width: 250px;

	color: black;

	background: white;
	border-radius: 10px;

	padding: 10px;
}

.icon-name {
	display: flex;
	align-items: center;
}

.edit-name,
.edit-color {
	width: 45px;
	height: 40px;

	display: flex;
	align-items: center;
	justify-content: center;

	cursor: pointer;
}

.edit-name {
	border-top-left-radius: 5px;
	border-bottom-left-radius: 5px;

	background-color: #e4e2e2;
}

.edit-color {
	border-top-right-radius: 5px;
	border-bottom-right-radius: 5px;

	background-color: #b1b1b1;
}

.show-name {
	margin-left: 10px;

	font-weight: 550;
}

.show-name p {
	white-space: nowrap;
	width: 147px;
	overflow: hidden;
	text-overflow: ellipsis;
}
</style>
