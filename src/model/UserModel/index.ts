import { IUserComplete, IUser, IUserCredential } from 'interfaces/IUser';

export function UserModel({ email, uid, stsTokenManager }: any, name: string) {
  const user: IUser = {
    name,
    email,
    uid,
  };

  const userCredential: IUserCredential = {
    accessToken: stsTokenManager.accessToken,
    refreshToken: stsTokenManager.refreshToken,
  };

  const userComplete: IUserComplete = {
    user,
    userCredential,
  };

  return {
    user,
    userComplete,
    userCredential,
  };
}
