<template>
	<div>
		<div class="wrap-all">
			<div class="header">
				<div class="btn-back" style="color:rgba(255, 255, 255)">
					<i class="fa fa-arrow-left fa-lg" aria-hidden="true"></i>
					<div>
						<p>Manager Players</p>
					</div>
				</div>
				<div class="setting-clock">
					<div class="start">
						<p style="background-color: #b1b1b1;color:white;">
							Switch Teams
						</p>
					</div>
					<div class="edit">
						<p style="background:rgb(29, 161, 242);color:white;">
							Done
						</p>
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
