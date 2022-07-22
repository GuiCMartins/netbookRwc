export interface IUser {
  name: string;
  email: string;
  uid: string;
}

export interface IUserCredential {
  accessToken: string;
  refreshToken: string;
}

export interface IUserComplete {
  user: IUser;
  userCredential: IUserCredential;
}
