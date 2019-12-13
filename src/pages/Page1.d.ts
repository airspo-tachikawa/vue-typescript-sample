import { Vue } from "vue-property-decorator";
import AttendanceDateModel from "../models/AttendanceDateModel";
export default class Page1 extends Vue {
  title: string;
  LabelText: string;
  AttendanceDateModelList?: Array<AttendanceDateModel>;
  // **********************************************************************
  // Vue Lifecycle
  // **********************************************************************
  beforeCreate(): void;
  created(): void;
  beforeMount(): void;
  mounted(): void;
  boforeUpdate(): void;
  updated(): void;
}
