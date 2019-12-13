<template>
	<v-ons-list>
		<v-ons-list-header>My friends</v-ons-list-header>
		<v-ons-list-item v-for="model in this.ModelList" :key="model.ID">
			<ListItem :Model="model"></ListItem>
		</v-ons-list-item>
	</v-ons-list>
</template>
<script lang="ts">
	import {Vue, Component, Prop} from 'vue-property-decorator'
	import ListItem from './ListItem'
	import IListItemModel from '../interface/IListItemModel';

	@Component({
		components: { ListItem }
	})
	export default class List extends Vue {
		
		@Prop()
		ModelList?: Array<IListItemModel>;
		
		// **********************************************************************
		// Vue Lifecycle
		// **********************************************************************
		beforeCreate(): void {
			console.log('beboreCreate start');
		}
		created() : void {
			console.log('created start');
			if (this.ModelList !== undefined) {
				for (let model of this.ModelList) {
					console.log(model.ID);
				}
			}
		}
		beforeMount(): void {
			console.log('boreMount start');
		}
		mounted(): void {
			console.log('mounted start');
		}
		beforeUpdate(): void {
			console.log('beforeUpdate start');
		}
		updated() : void {
			console.log('updated start');
		}
	}
</script>
<style lang="sass">

</style>