<template>
  <div>
    {{Model.ID}}
    <v-ons-button>Edit</v-ons-button>
  </div>
</template>
<script lang="ts">
import { Vue, Component, Prop } from "vue-property-decorator";
import IListItemModel from "../interface/IListItemModel";

@Component({
  components: {}
})
export default class ListItem extends Vue {
  @Prop()
  private Model?: IListItemModel;
  // **********************************************************************
  // Vue Lifecycle
  // **********************************************************************
  beforeCreate(): void {
    console.log("beboreCreate start");
  }
  created(): void {
    console.log("created start");
  }
  beforeMount(): void {
    console.log("boreMount start");
  }
  mounted(): void {
    console.log("mounted start");
  }
  beforeUpdate(): void {
    console.log("beforeUpdate start");
  }
  updated(): void {
    console.log("updated start");
  }
}
</script>
<style lang="sass">

</style>