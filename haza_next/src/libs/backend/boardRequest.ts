import { IDType } from "../constants";
import { request } from "./request";

/**
 * 게시글 데이터
 */
export interface BoardData {
  id: IDType;
  /**
   * 게시글 제목
   */
  title: string;
  /**
   * 게시글 내용 (아마도 HTML)
   */
  content: string;
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
  userName: string;
  /**
   * 사용자 이메일
   */
  userEmail: string;
  /**
   * 대분류
   */
  mainCategory: string | null;
  /**
   * 소분류
   */
  midCategory: string | null;
}

export async function login(token: string, body: {userId: string, email: string, name: string}) {
  throw new Error("TODO")
  return request<{isModifySuccess: boolean}>({
    route: `/api/users/${body.userId}`,
    token,
    method: "PUT",
  });
}