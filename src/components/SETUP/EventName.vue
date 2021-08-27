<template>
	<div>
		<div class="wrap-all">
			<div class="content">
				<div class="icon">
					<i class="fa fa-pencil" aria-hidden="true"></i>
				</div>
				<div class="event-name">
					<p>{{ event == null ? "Event 1" : event }}</p>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	props: ["event"],
};
</script>

<style scoped>
.content {
	width: 300px;

	display: flex;
	align-items: center;

	background: black;
	border-radius: 10px;

	padding: 10px;
}

.icon {
	display: flex;
	justify-content: center;
	align-items: center;

	background: #e4e2e2;
	border-radius: 5px;

	height: 38px;
	width: 50px;

	margin-right: 10px;

	cursor: pointer;
	color: black;
}

.event-name {
	font-weight: 550;
}
</style>
