import { IdType } from '../constants';
import { forceId, sqlDateToDate, ValueType } from '../util';

import { request } from './request';

/**
 * 메인 카테고리 데이터 
 */
export interface MainCategory {
  id: IdType; 
  /**
   * ex) Movie, Game
   */
  name: string;
}
/**
 * 미드 카테고리 데이터를 가져옵니다.
 */
export interface MidCategory {
  id: IdType;
  name: string;
  mainCategoryId: number;
}

/**
 * 전체 메인 카테고리를 받아 옵니다.
 */
export async function getAllMainCategory(token: string | null) {
  const data = await request<Record<string, ValueType>>({
    route: `/api/categories/mainAll`,
    token,
    method: 'GET',
  });
  console.log(data);
  return data.map(convertMainCategoryToClient);
}


/**
 * 특정 메인 카테고리를 받아 옵니다.
 */
export async function getMainCategory(token: string, body: Required<MainCategory>): Promise<MainCategory> {
  const data = await request<Record<string, ValueType>>({
    route: `/api/boards?main=${body.name}`,
    token,
    method: 'GET',
    body,
  });
  console.log(data);
  return {
    id: body.id,
    name: body.name,
  };
}

/**
 * 서버에서 응답한 Maincategory 데이터를 내부 category 데이터로 변환 합니다.
 */

export function convertMainCategoryToClient(data: Record<string, ValueType>): MainCategory {
  //console.log(data);
  //console.log(data.mainCategory_Id);
 // console.log(data.name);
  return {
    id: forceId(data.mainCategoryId),
    name: data.name as string,
  };
}
