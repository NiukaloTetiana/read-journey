export interface IAuthResponse {
  email: string;
  name: string;
  token: string;
  refreshToken: string;
}

export interface IRegisterRequest {
  email: string;
  name: string;
  password: string;
}

export interface ILoginRequest extends Omit<IRegisterRequest, "name"> {}

export interface IRefreshResponse
  extends Omit<IAuthResponse, "name" | "email"> {}

export interface IUser {
  _id: string;
  name: string;
  email: string;
}

export interface ICurrentUserResponse {
  _id: string;
  name: string;
  email: string;
  token: string;
  refreshToken: string;
}
