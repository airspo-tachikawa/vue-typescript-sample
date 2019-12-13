import Vue from "vue";
import IListItemModel from "../interface/IListItemModel";

export default class ListItem extends Vue {
  Model?: IListItemModel;
  beforeCreate(): void;
  created(): void;
  beforeMount(): void;
  mounted(): void;
  beforeUpdate(): void;
  updated(): void;
}
