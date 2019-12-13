import Vue from "vue";
import IListItemModel from "../interface/IListItemModel";

export default class List extends Vue {
  ModelList?: Array<IListItemModel>;
  beforeCreate(): void;
  created(): void;
  beforeMount(): void;
  mounted(): void;
  beforeUpdate(): void;
  updated(): void;
}
