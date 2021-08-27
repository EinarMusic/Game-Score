<template>
	<div>
		<div class="wrap-all">
			<div class="header">
				<HeaderManagerPlayers />
			</div>
			<div class="center">
				<TeamManagerPlayer />
			</div>
			<div class="list">
				<ListPlayersForManager />
			</div>
		</div>
	</div>
</template>

<script>
import HeaderManagerPlayers from "../MANAGER/HeaderManagerPlayers";
import TeamManagerPlayer from "../MANAGER/TeamManagerPlayer";
import ListPlayersForManager from "../MANAGER/ListPlayersForManager";

export default {
	components: {
		HeaderManagerPlayers,
		TeamManagerPlayer,
		ListPlayersForManager,
	},
};
</script>

<style scoped></style>
