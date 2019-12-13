<template>
	<div class="button_ex">
		<v-ons-button @click="onClick">{{Text}}</v-ons-button>
	<div>
</template>
<script lang="ts">
	import {Component, Prop, Vue} from "vue-property-decorator"
	import OnsenUI from "vue-onsenui"
	@Component({})
	export default class ButtonEx extends Vue {
		@Prop()
		private Text?: string;
		// --> ココからイベント
		private onClick(): void {
			// console.log('buttonEx -> click start');
			OnsenUI.notification.alert('Hi there!')
			// console.log('buttonEx -> click end');
		}
	}
</script>
<style lang="scss">
	.button_ex {
		margin: 6px 6px 6px 6px;
	}
</style>