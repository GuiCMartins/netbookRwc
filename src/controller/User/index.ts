import ISignUpInfo from 'interfaces/ISignUpInfo';
import { UserModel } from 'model/UserModel';
import { createFirebaseUser } from 'services/Firebase';
import { createNetbookUser } from 'services/Netbook/User';

export const create = async (signUpInfo: ISignUpInfo) => {
  const firebaseUserCredentials = await createFirebaseUser(signUpInfo);

  if (firebaseUserCredentials) {
    const firebaseUser = Object.assign(firebaseUserCredentials.user.toJSON());
    const userModel = UserModel(firebaseUser, signUpInfo.name);

    createNetbookUser(userModel.user, firebaseUserCredentials);
  }
};
