import { POST } from "@/lib/api/client";
import type { LoginPayload, LoginResponse } from "@/types/auth";

export const authService = {
  login,
  logout,
};

async function login(payload: LoginPayload) {
  return await POST<LoginResponse>("/auth/login", payload);
}

async function logout(): Promise<void> {
  await POST("/auth/logout");
}
