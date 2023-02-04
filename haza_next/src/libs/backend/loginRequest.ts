import { request } from "./request";

export async function login(token: string, body: {userId: string, email: string, name: string}) {
  throw new Error("TODO")
  return request<{isModifySuccess: boolean}>({
    route: `/api/users/${body.userId}`,
    token,
    method: "PUT",
  });
}