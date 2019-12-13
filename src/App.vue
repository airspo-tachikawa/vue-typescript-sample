<template>
	<div>
		<v-ons-page>
			<!-- <v-ons-toolbar>
				<v-ons-button modifier="quiet" style="margin:6px 0px; width: auto;">
					<router-link to="/">Page1</router-link>
				</v-ons-button>
				<v-ons-button modifier="quiet" style="width:100px">
					<router-link to="/page2">Page2</router-link>
				</v-ons-button>
			</v-ons-toolbar> -->
			<router-view></router-view>
			<!-- <v-ons-tabbar swipeable position="auto"
			:tabs="tabs"
			:visible="true"
			@click="onTabClick">
			</v-ons-tabbar> -->
		</v-ons-page>
		
		<footer></footer>
	</div>
</template>
<script lang="ts">
	import Vue from "vue"
	export default class AppVue extends Vue {
	};

</script>
<style lang="scss">
</style>