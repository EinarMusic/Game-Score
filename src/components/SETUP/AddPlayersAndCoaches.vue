<template>
	<div>
		<div class="wrap-all">
			<div class="add-btn">
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
export default {};
</script>

<style scoped>
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
