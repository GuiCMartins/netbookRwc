import { firebaseApp } from 'config/firebase';
import {
  createUserWithEmailAndPassword,
  getAuth,
  signInWithEmailAndPassword,
} from 'firebase/auth';
import ISignUpInfo from 'interfaces/ISignUpInfo';

export const createFirebaseUser = async ({ email, pass }: ISignUpInfo) => {
  const auth = getAuth(firebaseApp);

  try {
    return await createUserWithEmailAndPassword(auth, email, pass);
  } catch (error) {
    alert('Não foi possível cadastrar o usuário no firebase');
  }
};

export const signInFirebaseUser = async ({ email, pass }: ISignUpInfo) => {
  const auth = getAuth(firebaseApp);

  try {
    return await signInWithEmailAndPassword(auth, email, pass);
  } catch (error) {
    alert('Credenciais inválidas');
  }
};
