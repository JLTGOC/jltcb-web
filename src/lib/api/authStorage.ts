const TOKEN_KEY = "auth_token";

export const authStorage = {
  getToken,
  setToken,
  clearToken,
};

function getToken(): string | null {
  return localStorage.getItem(TOKEN_KEY);
}

function setToken(token: string) {
  localStorage.setItem(TOKEN_KEY, token);
}

function clearToken() {
  localStorage.removeItem(TOKEN_KEY);
}
