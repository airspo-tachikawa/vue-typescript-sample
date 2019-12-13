export default class DateUtil {
  public static getNowMonthFirstDate(): Date {
    let now: Date = new Date();
    return new Date(now.getFullYear(), now.getMonth() + 1, 1);
  }
  public static addDays(target: Date, addDays: number): Date {
    let ret: Date = this.dateCopy(target);
    ret.setDate(target.getDate() + addDays);
    return ret;
  }
  public static addMonths(target: Date, addMonths: number): Date {
    let ret: Date = this.dateCopy(target);
    ret.setDate(target.getMonth() + addMonths);
    return ret;
  }

  public static dateCopy(target: Date) {
    return new Date(target.getFullYear(), target.getMonth(), target.getDate());
  }
}
