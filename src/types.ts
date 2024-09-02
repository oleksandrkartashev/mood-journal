export interface User {
  email: string;
  password: string;
}

export interface AuthState {
  token: string | null;
  isAuthenticated: boolean;
}
export interface UserData {
  id: number;
  email: string;
  password: string;
  name: string;
  role: string;
  avatar: string;
}
