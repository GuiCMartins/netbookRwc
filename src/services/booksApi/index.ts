import { BooksApiAxiosInstance } from 'services/BaseAxiosSetup';
import { getToken } from 'utils/FirebaseUtils';

export const searchBooks = async (
  subject: string,
  maxResult: number,
  startIndex: number,
  q: string = ''
) => {
  const token = await getToken();

  try {
    const data = await BooksApiAxiosInstance(token).get(
      `?q=${q}+subject:"${subject}"&printType=books&langRestrict=pt&maxResults=${maxResult}&startIndex=${startIndex}`
    );
    return data.data;
  } catch (e) {
    alert('Não foi possível buscar os livros!');
  }
};
