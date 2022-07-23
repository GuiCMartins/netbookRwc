import { deleteUser, UserCredential } from 'firebase/auth';
import { IUser } from 'interfaces/IUser';
import BaseAxiosInstance from 'services/BaseAxiosSetup';
import { getToken } from 'utils/LocalStorageUtils';

export const createNetbookUser = async (
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
