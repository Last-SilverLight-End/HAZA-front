import { IdType } from './constants';

export type ValueType = string | number | boolean | null;
export type FlatJSONType = Record<string, ValueType | Array<ValueType>>;

/**
 * 타입 상관 없이 String으로 반환합니다.
 */
export function forceString(value: ValueType): string {
  return value?.toString() ?? '';
}

/**
 * 타입 상관 없이 ID로 반환합니다.
 */
export function forceId(value: ValueType): IdType {
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
  return new Date(Date.parse(sqlDateString));
}