<template>
	<div>
		<div class="wrap-all">
			<div class="content">
				<div class="icon-name">
					<div class="edit-name">
						<i style="color:black" class="fa fa-pencil" aria-hidden="true"></i>
					</div>
					<div class="edit-color">
						<DesignForJersey v-bind:color="'rgb(255, 0, 0)'" />
					</div>
					<div class="show-name">
						<p>
							Milton Mutants Men's A Grade
						</p>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
import DesignForJersey from "../DESIGN/DesignForJersey";

export default {
	components: {
		DesignForJersey,
	},
};
</script>

<style scoped>
.content {
	width: 310px;
	margin-left: 15px;

	border-radius: 10px;

	padding: 10px;

	background: black;
}

.icon-name {
	display: flex;
	align-items: center;
}

.edit-name,
.edit-color {
	display: flex;
	align-items: center;
	justify-content: center;

	cursor: pointer;
}

.edit-name {
	width: 45px;
	height: 55px;

	border-top-left-radius: 5px;
	border-bottom-left-radius: 5px;

	background-color: #e4e2e2;
}

.edit-color {
	width: 65px;
	height: 55px;

	border-top-right-radius: 5px;
	border-bottom-right-radius: 5px;

	border: 1px solid #e4e2e2;

	background-color: black;
}

.show-name {
	margin-left: 10px;

	font-weight: 550;
}

.show-name p {
	white-space: nowrap;
	width: 150px;
	overflow: hidden;
	text-overflow: ellipsis;
	color: white;
}
</style>
