export interface User {
  email: string;
  password: string;
}

export interface AuthState {
  token: string | null;
  isAuthenticated: boolean;
}
