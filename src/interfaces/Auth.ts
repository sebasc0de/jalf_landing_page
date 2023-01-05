export interface RegisterProps {
  username: string;
  email: string;
  password: string;
  password_check?: string;
}

export interface LoginProps {
  identifier: string;
  password: string;
}
