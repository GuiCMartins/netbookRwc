import { firebaseApp } from 'config/firebase';
import {
  createUserWithEmailAndPassword,
  getAuth,
  signInWithEmailAndPassword,
} from 'firebase/auth';
import ISignInInfo from 'interfaces/ISignInInfo';
import ISignUpInfo from 'interfaces/ISignUpInfo';

export const createFirebaseUser = ({ email, pass }: ISignUpInfo) => {
  const auth = getAuth(firebaseApp);

  return createUserWithEmailAndPassword(auth, email, pass)
    .then((data) => {
      return data;
    })
    .catch((e) => {
      throw new Error('Erro ao cadastrar usuário');
    });
};

export const signInFirebaseUser = ({ email, pass }: ISignInInfo) => {
  const auth = getAuth(firebaseApp);

  return signInWithEmailAndPassword(auth, email, pass)
    .then((user) => {
      return user;
    })
    .catch((e) => {
      throw new Error('Credenciais inválidas');
    });
};
