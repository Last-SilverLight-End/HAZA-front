import { IdType } from '../constants';
import { forceId, sqlDateToDate, ValueType } from '../util';
import { MainCategory } from './categoryRequest';
import { request } from './request';

/**
 * 댓글 데이터
 */
export interface CommentData {
  /**
   * 댓글 id
   */
  id : number;
  /**
   * 유저 id
   */
  userId: number;
  /**
   * 유저 이름
   */
  userName : string;
  /**
   * 유저 이메일
   */
  userEmail : string;
  /**
   * 보드 id
   */
  boardId: number;
  /**
   * 댓글 내용
   */
  content: string;
  /**
   * 댓글 생성 날짜
   */
  createdDate: Date;
  /**
   * 댓글 수정 날짜
   */
  modifiedDate: Date;

}

/**
 * 특정 보드 id 의 댓글들을 받아 옵니다.
 */
export async function getComments(token: string | null, body: CommentData) {
  const data = await request<Record<string, ValueType>>({
    route : `api/commnets?board_id=${body.boardId}`,
    token,
    method: "GET",
    //body.
  })
  console.log(data);
  return data.map(convertCommentToClient);
}

/**
 *서버에서 응답한 comment 데이터를 내부 comment 데이터로 변환 합니다.
 */

export function convertCommentToClient(data : Record<string,ValueType>) : CommentData{

  console.log(data);
  return{
    id :data.id as number,
    userId: data.userId as number,
    userName : data.userName as string,
    userEmail : data.userEmail as string,
    boardId: data.boardId as number,
    content: data.content as string,
    createdDate: sqlDateToDate(data.createdDate as string),
    modifiedDate: sqlDateToDate(data.modifiedDate as string),
  }
}