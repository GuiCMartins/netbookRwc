import {
  getAuth,
  createUserWithEmailAndPassword,
  deleteUser,
  UserCredential,
} from 'firebase/auth';
import { firebaseApp } from 'config/firebase';
import { deleteToken, setToken } from 'utils/LocalStorageUtils';
import ConstantsUtils from 'utils/ConstantsUtils';
import BaseAxiosInstance from 'services/BaseAxiosSetup';
import ILoginInfo from 'interfaces/ILoginInfo';
import { UserModel } from 'model/UserModel';
import { IUser, IUserCredential } from 'interfaces/IUser';

const auth = getAuth(firebaseApp);

export const useUserService = () => {
  const createNetBookUser = async (
    user: IUser,
    userCredential: UserCredential
  ) => {
    const { email, uid, name } = user;

    try {
      return await BaseAxiosInstance.post('/user', {
        firebaseId: uid,
        name,
        email,
      });
    } catch (error) {
      deleteUser(userCredential.user);
      alert('Não foi possível cadastrar o usuário!');
    }
  };

  const setAccessAndRefreshToken = async (user: IUserCredential) => {
    const { refreshToken, accessToken } = user;

    setToken(ConstantsUtils.NETBOOK_ACCESS_TOKEN, accessToken);
    setToken(ConstantsUtils.NETBOOK_REFRESH_TOKEN, refreshToken);
  };

  const deleteAccessAndRefreshToken = async () => {
    deleteToken(ConstantsUtils.NETBOOK_ACCESS_TOKEN);
    deleteToken(ConstantsUtils.NETBOOK_REFRESH_TOKEN);
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

      deleteAccessAndRefreshToken();
      setAccessAndRefreshToken(userModel.userCredential);
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
