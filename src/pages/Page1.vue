<template>
	<div class="page1">
		<v-ons-list-title class="title">{{Title}}</v-ons-list-title>
		<List :ModelList="AttendanceDateModelList"></List>
	<div>
</template>
<script lang="ts">
	import {Component, Vue} from 'vue-property-decorator'
	import ButtonEx from '../components/ButtonEx'
	import DateBox from '../components/DateBox'
	import List from '../components/List'
	import DateUtil from '../utils/DateUtil'
	import AttendanceDateModel from '../models/AttendanceDateModel';
	import { AttendanceType } from '../enum/Enum';

	@Component({
		components: { ButtonEx, List }
	})
	export default class Page1 extends Vue {
		private Title: string = "";
		private LabelText: string = "button_ex";
		AttendanceDateModelList: Array<AttendanceDateModel> = new Array<AttendanceDateModel>();

		// **********************************************************************
		// Vue Lifecycle
		// **********************************************************************
		beforeCreate(): void {
			// インスタンスが初期化されるとき
			console.log('beforeCreate --> start');
		}
		created() : void {
			// インスタンス生成後
			console.log('created --> start');
			// 当月の１日
			let count: number = 0;
			let date: Date = DateUtil.getNowMonthFirstDate();
			let month: number = date.getMonth();
			this.Title = date.toString();
			// 初日を格納
			this.setAttendanceDateModel(count, date);
			while (true) {
				date = DateUtil.addDays(date, 1);
				if (date.getMonth() !== month) {
					break;
				}
				count++;
				this.setAttendanceDateModel(count, date);
			}
		}
		beforeMount(): void {
			// インスタンスがマウントされる前（描画前）
			console.log('beboreMount --> start');
		}
		mounted(): void {
			// インスタンスがマウントされた後（描画後）
			console.log('mounted --> start');
		}
		boforeUpdate(): void {
			// DOM再構成前
			console.log('boforeUpdate --> start');
		}
		updated() : void {
			// DOM再構成後
			console.log('updated --> start');
		}
		// **********************************************************************
		// event
		// **********************************************************************

		// **********************************************************************
		// private method
		// **********************************************************************
		private setAttendanceDateModel(id: number, date: Date) {
			let model: AttendanceDateModel = new AttendanceDateModel(id, "dummyUser", AttendanceType.NORMAL, date, undefined, undefined);
			this.AttendanceDateModelList.push(model);
		}
	}
</script>
<style lang="scss" >
	.title {
		text-align: center;
		color: red;
		font-size: 16px;
	}
</style>