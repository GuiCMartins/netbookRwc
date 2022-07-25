import ISignUpInfo from 'interfaces/ISignUpInfo';
import { UserModel } from 'model/UserModel';
import { createFirebaseUser } from 'services/Firebase';
import { createNetbookUser } from 'services/Netbook/User';

export const create = (signUpInfo: ISignUpInfo) => {
  createFirebaseUser(signUpInfo)
    .then(async (firebaseUserCredentials) => {
      const firebaseUser = firebaseUserCredentials.user;
      const userModel = UserModel(firebaseUser, signUpInfo.name);

      await createNetbookUser(userModel.user, firebaseUserCredentials);
    })
    .catch((e) => {
      alert(e.message);
    });
};
