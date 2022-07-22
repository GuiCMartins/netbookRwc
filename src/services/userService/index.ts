import {
  getAuth,
  createUserWithEmailAndPassword,
  deleteUser,
  UserCredential,
} from 'firebase/auth';
import { firebaseApp } from 'config/firebase';
import { getToken } from 'utils/LocalStorageUtils';
import ILoginInfo from 'interfaces/ILoginInfo';
import { UserModel } from 'model/UserModel';
import { IUser } from 'interfaces/IUser';
import BaseAxiosInstance from 'services/BaseAxiosSetup';

const auth = getAuth(firebaseApp);

export const useUserService = () => {
  const createNetBookUser = async (
    user: IUser,
    userCredential: UserCredential
  ) => {
    const { email, uid, name } = user;

    const token = await getToken();

    try {
      return await BaseAxiosInstance(token).post('/user', {
        firebaseId: uid,
        name,
        email,
      });
    } catch (error) {
      deleteUser(userCredential.user);
      alert('Não foi possível cadastrar o usuário!');
    }
  };

  const createFirebaseUser = async ({ email, name, pass }: ILoginInfo) => {
    try {
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        email,
        pass
      );

      const firebaseUser = Object.assign(userCredential.user.toJSON());
      const userModel = UserModel(firebaseUser, name);

      createNetBookUser(userModel.user, userCredential);
    } catch (error) {
      alert('Não foi possível cadastrar o usuário!');
    }
  };

  const create = (loginInfo: ILoginInfo) => {
    createFirebaseUser(loginInfo);
  };

  return {
    create,
  };
};
