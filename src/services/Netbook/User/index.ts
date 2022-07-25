import { deleteUser, UserCredential } from 'firebase/auth';
import { IUser } from 'interfaces/IUser';
import BaseAxiosInstance from 'services/BaseAxiosSetup';
import { getToken } from 'utils/FirebaseUtils';

export const createNetbookUser = async (
  user: IUser,
  userCredential: UserCredential
) => {
  const { email, uid, name } = user;
  const token = await getToken();

  try {
    const data = await BaseAxiosInstance(token).post('/user', {
      firebaseId: uid,
      name,
      email,
    });
    return data;
  } catch (e) {
    deleteUser(userCredential.user);
    alert('Não foi possível cadastrar o usuário!');
  }
};

export const logInNetbookUser = async (
  userCredential: void | UserCredential
) => {
  try {
    const token = await getToken();

    const data = await BaseAxiosInstance(token).get('/user', {});
    return data;
  } catch (e) {
    alert('Não foi possível logar o usuário!');
  }
};
