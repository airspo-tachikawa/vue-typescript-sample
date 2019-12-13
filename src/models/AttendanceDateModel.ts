import { AttendanceType } from "../enum/Enum";
import IListItemModel from "../interface/IListItemModel";

export default class AttendanceDateModel implements IListItemModel {
  ID: number;
  Text: String;
  UserId: string;
  AttendanceType: AttendanceType;
  Day: Date;
  StartTime?: Date;
  EndTime?: Date;
  constructor(
    id: number,
    userId: string,
    attendanceType: AttendanceType,
    day: Date,
    startTime?: Date,
    endTime?: Date
  ) {
    this.ID = id;
    this.UserId = userId;
    this.AttendanceType = attendanceType;
    this.Day = day;
    this.StartTime = startTime;
    this.EndTime = endTime;
    // 表示内容
    this.Text = "";
  }
}
