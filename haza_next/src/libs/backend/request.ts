import { BACKEND_TEST } from "../constants"

export type ResponseStatus = 200 | 404 | 500

/**
 * 회원 가입
 */
export async function createNewUser() {
  // @todo
}
/**
 * 유저 정보 조회
 */
export async function queryUser(token: string | null, body: {userId: string}) {
  return request<{isSearchSuccess: boolean, status: ResponseStatus}>({
    route: `/api/users/${body.userId}`,
    token,
    method: "POST",
  })
}
/**
 * 회원 탈퇴
 */
export async function revokeUser(token: string, body: {userId: string}) {
  return request<{isDeleteSuccess: string, status: ResponseStatus}>({
    route: `/api/users/${body.userId}`,
    token,
    method: "DELETE",
  })
}
/**
 * 회원 정보 수정
 */
export async function modifyUser(token: string, body: {userId: string, email: string, name: string}) {
  return request<{isModifySuccess: boolean}>({
    route: `/api/users/${body.userId}`,
    token,
    method: "PUT",
  })
}



/**
 * 요청을 보내는 함수
 * @param params 
 * @returns 
 */
export async function request<T>(params: {
  route: string,
  token?: string | null,
  method: "GET" | "POST" | "PUT" | "DELETE",
  body?: unknown,
}): Promise<T[]> {
  const {route, token, method, body} = params
  const headers = new Headers()
  if (token != null) {
    headers.append("Authorization", `Bearer ${token}`)
  }
  headers.append("Content-Type", "application/json")
  const response = await fetch(`${BACKEND_TEST}${route}`, {
    method,
    headers,
    body: body == null ? undefined : JSON.stringify(body),
  })
  // 응답이 200 OK인 경우 응답
  const statusCode = response.status
  if (statusCode === 200) {
    const respData = await response.json() as {count: number, status: 200, data: T | Array<T>}
    // 데이터가 없으면 [] 반환
    if (respData.count <= 0) {
      return []
    }
    // 데이터가 1개면 배열로 변환
    if (!Array.isArray(respData.data)) {
      return [respData.data]
    }
    return respData.data
  }
  // 응답이 200이 아닌데 에러 메시지가 없는 경우
  const errorBody = await response.json() as {errorMessage: string, errorCode: string}
  if (errorBody.errorMessage == null || errorBody.errorCode == null) {
    throw new Error(`[Request Error ${statusCode}] Unknown Error Response!!`)
  }
  // 에러 메시지 별 에러 내기
  switch (errorBody.errorCode) {
    case "404":
      throw new NotFoundError(errorBody.errorMessage)
    case "500":
      throw new InternalServerError(errorBody.errorMessage)
    default:
      throw new RequestError(errorBody.errorCode, errorBody.errorMessage)
  }
}

/**
 * 요청 에러
 */
export class RequestError extends Error {
  constructor(public errorCode: string, public errorMessage: string) {
    super(`[${errorCode}] ${errorMessage}`)
  }
}

/**
 * 찾을 수 없는 에러
 */
export class NotFoundError extends RequestError {
  constructor(public errorMessage = "Not Found") {
    super("404", errorMessage)
  }
}
/**
 * 백앤드 서버 에러
 */
export class InternalServerError extends RequestError {
  constructor(public errorMessage = "Internal Server Error") {
    super("500", errorMessage)
  }
}