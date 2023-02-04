import { IDType } from "./constants";

export type ValueType = string | number | boolean | null;
export type FlatJSONType = Record<string, ValueType | ValueType[]>

/**
 * 타입 상관 없이 String으로 반환합니다.
 */
export function forceString(value: string | number | boolean | null): string {
  if (value === null || value === undefined) {
    return "";
  }
  return value.toString();
}

/**
 * 타입 상관 없이 ID로 반환합니다.
 */
export function forceId(value: ValueType): IDType {
  if (value == null) {
    throw new Error(`Invalid ID: ${value}`);
  }
  const n = Number(value);
  if (Number.isNaN(n) || !Number.isSafeInteger(n)) {
    throw new Error(`Invalid ID: ${value}`);
  }
  return n;
}

/**
 * SQL Date를 Date로 변환합니다.
 */
export function sqlDateToDate(sqlDateString: string): Date {
  if (sqlDateString.indexOf(" ") < 0) {
    sqlDateString += " 00:00:00";
  }
  const [date, time] = sqlDateString.split(" ");
  const [year, month, day] = date.split("-");
  const [hour, minute, second] = time.split(":");

  const valueDate = new Date(Date.UTC(
    Number(year), Number(month) - 1, Number(day),
    Number(hour), Number(minute), Number(second),
  ))

  if (Number.isNaN(valueDate.getTime())) {
    throw new Error(`Invalid Date: ${sqlDateString}`);
  }
  return valueDate;
}