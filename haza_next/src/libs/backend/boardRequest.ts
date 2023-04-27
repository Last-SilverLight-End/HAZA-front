import { IDType } from "../constants";
import { FlatJSONType, forceId, sqlDateToDate, ValueType } from "../util";
import { request } from "./request";

/**
 * 게시글 데이터
 */


export interface BoardData extends BasicBoardData {
  /**
   * 게시글 ID
   */
  boardId: IDType;
  /**
   * 조회 수
   */
  hit: number;
  /**
   * 게시글 생성 일자
   */
  createdDate: Date;
  /**
   * 게시글 수정 일자
   */
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
export interface BasicBoardData {
  /**
   * 게시글 제목
   */
  title: string;
  /**
   * 게시글 내용 (아마도 HTML)
   */
  content: string;
  /**
   * 대분류
   */
  mainCategory: string | null;
  /**
   * 소분류
   */
  midCategory: string | null;
}


/**
 * 게시글 생성 및 변경 응답
 */
interface BoardModifyResult {
  BoardMakeSuccess: boolean
  IsModified: boolean
}

/**
 * 메인 카테고리 데이터 
 */
export interface MainCategory {
  /**
   * 메인 카테고리 ID
   */
  mainCategoryId: number;
  /**
   * 메인 카테고리 이름 ex) Movie, Game
   */
  mainCategoryName: string;
}

export interface MidCategory {
  midCategoryId: number;

}

/**
 * 개개인 칸반 카테고리 이름 정하기
 */

export interface NameKanban {
  title : string;
}

/** 
 * 전체 메인 카테고리를 받아 옵니다.
 */


export async function boardAllMainCategory(token: string | null, body: Record<string, never> = {}) {
  const data = await request<Record<string, ValueType>>({
    route: `/api/categories/mainAll`,
    token,
    method: "GET",
    // body,
  
  })
  console.log(data);
  return data.map(convertMainCategoryToClient)
}

/** 
 * 특정 메인 카테고리를 받아 옵니다.
 */
export async function boardMainCategory(token: string, body: Required<MainCategory>) {
  const data = await request<Record<string, ValueType>>({
    route: `/api/boards?main=${body.mainCategoryName}`,
    token,
    method: "GET",
    body,
  })
  return {
    mainCategoryId: body.mainCategoryId,
    Genre_Category: body.mainCategoryName,
  }
}
/**
 * 로그인 구현 (아직 토큰 받아오는 상태를 완성하지 못함)
 */
export async function login(token: string, body: { userId: string, email: string, name: string }) {
  throw new Error("TODO")
  return request<{ isModifySuccess: boolean }>({
    route: `/api/users/${body.userId}`,
    token,
    method: "PUT",
  });
}

/**
 * 게시글을 생성합니다.
 */
export async function createBoard(token: string, body: BasicBoardData) {
  const data = await request<BoardModifyResult>({
    route: "/api/boards",
    token,
    method: "POST",
    body,
  })
  return {
    /**
     * 게시글 생성 성공 여부
     */
    isCreateSuccess: data[0].BoardMakeSuccess,
    /**
     * 게시글 수정 여부
     */
    isModified: data[0].IsModified,
  }
}

/**
 * 특정 게시글 정보를 수정합니다.
 */
export async function modifyBoard(token: string, body: Partial<BasicBoardData> & { boardId: IDType }) {
  const data = await request<BoardModifyResult>({
    route: `/api/boards/${body.boardId}`,
    token,
    method: "POST", // @todo PUT으로 바꾸기
    body: {
      id: body.boardId,
      ...convertBoardToServer(body),
    },
  })
  return {
    /**
     * 게시글 수정 성공 여부
     */
    isModifySuccess: data[0].BoardMakeSuccess,
    /**
     * 게시글 수정 여부
     */
    isModified: data[0].IsModified,
  }
}

/**
 * 특정 게시글을 삭제합니다.
 */
export async function deleteBoard(token: string, body: { boardId: IDType }) {
  const data = await request<{ BoardDeleteSuccess: boolean, IsModified: boolean }>({
    route: `/api/boards/${body.boardId}`,
    token,
    method: "DELETE",
  })
  return {
    /**
     * 게시글 삭제 성공 여부
     */
    isDeleteSuccess: data[0].BoardDeleteSuccess,
    /**
     * 게시글 수정 여부
     */
    isModified: data[0].IsModified,
  }
}

/**
 * 특정 게시글 정보를 가져옵니다.
 */
export async function getBoard(token: string | null, body: { boardId: IDType }) {
  const data = await request<Record<string, ValueType>>({
    route: `/api/boards/${body.boardId}`,
    token,
    method: "GET",
  })
  return convertBoardToClient(data[0])
}

/**
 * 전체 게시글 정보를 가져옵니다.
 */
export async function getBoardList(token: string | null, body: Record<string, never> = {}) {
  const data = await request<Record<string, ValueType>>({
    route: `/api/boards/all`,
    token,
    method: "GET",
    // body,
 
  })

  return data.map(convertBoardToClient)
}

/**
 * 서버에서 응답한 Board 데이터를 내부 Board 데이터로 변환합니다.
 */
export function convertBoardToClient(data: Record<string, ValueType>): BoardData {
  return {
    boardId: forceId(data["board_id"]),
    title: data.title as string,
    content: data.content as string,
    hit: Number(data.hit),
    createdDate: sqlDateToDate(data.created_date as string),
    modifiedDate: sqlDateToDate(data.modified_date as string),
    userName: data.user_name as string | null,
    userEmail: data.user_email as string | null,
    mainCategory: data.main_category as string | null,
    midCategory: data.mid_category as string | null,
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
    mainCategoryId: forceId (data["mainCategory_Id"]),
    mainCategoryName : data.name as string,
  }
}


/**
 * 클라이언트의 Board 데이터를 서버 Board 데이터로 변환합니다.
 */
export function convertBoardToServer(data: Partial<BasicBoardData>) {
  return {
    title: data.title,
    content: data.content,
    main_category: data.mainCategory,
    mid_category: data.midCategory,
  }
}
/*
* 칸반보드의 형태를 저장하기 위한 데이터 입니다. (제작중)
*/
