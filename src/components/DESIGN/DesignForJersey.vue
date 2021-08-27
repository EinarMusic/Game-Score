<template>
	<div>
		<div class="wrap-all">
			<div class="main" :style="{ background: true ? color : none }">
				<div class="uno" style="background:black;"></div>
				<div class="dos" :style="{ background: true ? color : none }">
					<div class="some"></div>
					<div class="more"></div>
				</div>
				<div class="tres" style="background:black;"></div>
				<div class="cuatro" :style="{ background: true ? color : none }"></div>
				<div class="cinco" :style="{ background: true ? color : none }"></div>
				<div class="seis" :style="{ background: true ? color : none }"></div>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	props: ["color"],
};
</script>

<style scoped>
.dos {
	display: flex;
	justify-content: center;
	width: 33px;
	height: 15px;

	position: relative;
	border-top: 1px solid white;
}
.some,
.more {
	height: 10px;
	width: 10px;
	background: black;
	border-top: 1px solid black;
	border-bottom: 1px solid white;

	position: relative;
	bottom: 1px;
}
.some {
	border-bottom-left-radius: 12px;
	border-left: 1px solid white;
	border-right: 1px solid black;
}
.more {
	border-bottom-right-radius: 12px;
	border-right: 1px solid white;
	border-left: 1px solid black;
}
.uno,
.tres {
	width: 6px;
	height: 17px;
	background: white;

	border-bottom: 1px solid white;
}
.uno {
	border-bottom-right-radius: 38px;

	border-right: 1px solid white;
	border-top: 1px solid black;
}
.tres {
	border-bottom-left-radius: 38px;
	border-left: 1px solid white;
	border-top: 1px solid black;
}
.main {
	display: flex;
	flex-wrap: wrap;

	width: 45px;

	border-bottom-left-radius: 2px;
	border-bottom-right-radius: 2px;
}
.cuatro,
.cinco,
.seis {
	height: 27px;
	width: 15px;
}
.cuatro {
	border-left: 1px solid white;
	border-bottom: 1px solid white;
	border-bottom-left-radius: 2px;
}

.cinco {
	border-bottom: 1px solid white;
}

.seis {
	border-right: 1px solid white;
	border-bottom: 1px solid white;
	border-bottom-right-radius: 2px;
}
</style>
