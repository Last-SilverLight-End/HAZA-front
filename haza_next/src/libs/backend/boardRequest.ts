import { IdType } from '../constants';
import { forceId, sqlDateToDate, ValueType } from '../util';
import { request } from './request';

/**
 * 게시글 데이터
 */
export interface BoardData extends RequiredBoardData {
  id: IdType;
  /**
   * 조회수
   */
  hit: number;
  createdDate: Date;
  modifiedDate: Date;
  /**
   * 사용자 이름
   */
  userName: string | null;
  /**
   * 사용자 이메일
   */
  userEmail: string | null;
}

/**
 * 기본 게시글 데이터 (업로드 시 필요)
 */
export interface RequiredBoardData {
  title: string;
  /**
   * 게시글 내용 (아마도 HTML)
   */
  content: string;
  mainCategoryId: IdType | null;
  midCategoryId: IdType | null;
}

/**
 * 게시글 생성 및 변경 응답
 */
interface BoardModifyResult {
  success: boolean;
  modified: boolean;
}

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

export interface MidCategory {
  id: IdType;
}

/**
 * 개개인 칸반 카테고리 이름 정하기
 */
export interface NameKanban {
  title: string;
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
  return {
    id: body.id,
    name: body.name,
  };
}
/**
 * 로그인 구현 (아직 토큰 받아오는 상태를 완성하지 못함)
 */
export async function login(token: string, body: { userId: string, email: string, name: string }) {
  throw new Error('TODO');
  return request<{ isModifySuccess: boolean }>({
    route: `/api/users/${body.userId}`,
    token,
    method: 'PUT',
  });
}

/**
 * 게시글을 생성합니다.
 */
export async function createBoard(
  token: string,
  body:
    Omit<RequiredBoardData, 'mainCategoryId' | 'midCategoryId'>
    & Record<'mainCategoryName' | 'midCategoryName', string>
): Promise<BoardModifyResult> {
  const data = await request<BoardModifyResult>({
    route: '/api/boards',
    token,
    method: 'POST',
    body,
  });
  return data[0];
}

/**
 * 특정 게시글 정보를 수정합니다.
 */
export async function modifyBoard(token: string, body: Partial<RequiredBoardData> & { boardId: IdType }) {
  const data = await request<BoardModifyResult>({
    route: `/api/boards/${body.boardId}`,
    token,
    method: 'POST', // @todo PUT으로 바꾸기
    body: {
      id: body.boardId,
      ...convertBoardToServer(body),
    },
  });
  return data[0];
}

/**
 * 특정 게시글을 삭제합니다.
 */
export async function deleteBoard(token: string, boardId: IdType) {
  const data = await request<{ BoardDeleteSuccess: boolean, IsModified: boolean }>({
    route: `/api/boards/${boardId}`,
    token,
    method: 'DELETE',
  });
  return {
    success: data[0].BoardDeleteSuccess,
    modified: data[0].IsModified,
  }
}

/**
 * 특정 카테고리 게시글 정보들을 가져옵니다.
 */
export async function getMainCategoryBoardList(token: string | null, mainCategoryId: IdType) {
  const data = await request<Record<string, ValueType>>({
    route: `/api/boards?main_category_id=${mainCategoryId}`,
    token,
    method: 'GET',
    // body,
  });
  return data.map(convertBoardToClient);
}

/**
 * 특정 게시글 정보를 가져옵니다.
 */
export async function getBoard(token: string | null, boardId: IdType) {
  const data = await request<Record<string, ValueType>>({
    route: `/api/boards?id=${boardId}`,
    token,
    method: 'GET',
  })
  return convertBoardToClient(data[0]);
}

/**
 * 전체 게시글 정보를 가져옵니다.
 */
export async function getBoardList(token: string | null) {
  const data = await request<Record<string, ValueType>>({
    route: `/api/boards/all`,
    token,
    method: 'GET',
  });
  return data.map(convertBoardToClient);
}

/**
 * 서버에서 응답한 Board 데이터를 내부 Board 데이터로 변환합니다.
 */
export function convertBoardToClient(data: Record<string, ValueType>): BoardData {
  console.log(data);
  return {
    id: forceId(data.board_id),
    title: data.title as string,
    content: data.content as string,
    hit: Number(data.hit),
    createdDate: sqlDateToDate(data.created_date as string),
    modifiedDate: sqlDateToDate(data.modified_date as string),
    userName: data.user_name as string | null,
    userEmail: data.user_email as string | null,
    mainCategoryId: data.main_category_id as number | null,
    midCategoryId: data.mid_category_id as number | null,
  }
}

/**
 * 서버에서 응답한 Maincategory 데이터를 내부 category 데이터로 변환 합니다.
 */

export function convertMainCategoryToClient(data: Record<string, ValueType>): MainCategory {
  //console.log(data);
  //console.log(data.mainCategory_Id);
 // console.log(data.name);
  return {
    id: forceId(data.main_category_id),
    name: data.name as string,
  };
}

/**
 * 클라이언트의 Board 데이터를 서버 Board 데이터로 변환합니다.
 */
export function convertBoardToServer(data: Partial<RequiredBoardData>) {
  return {
    title: data.title,
    content: data.content,
    main_category: data.mainCategoryId,
    mid_category: data.midCategoryId,
  };
}
