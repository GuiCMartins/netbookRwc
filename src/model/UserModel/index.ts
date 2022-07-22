import { IUser } from 'interfaces/IUser';

export function UserModel({ email, uid }: any, name: string) {
  const user: IUser = {
    name,
    email,
    uid,
  };

  return {
    user,
  };
}
