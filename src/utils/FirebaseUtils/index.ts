import { firebaseApp } from 'config/firebase';
import { getAuth } from 'firebase/auth';

export const getToken = async () => {
  const auth = getAuth(firebaseApp);

  try {
    const token = await auth.currentUser?.getIdToken(true);

    return token;
  } catch (error) {
    alert(error);
  }
};
