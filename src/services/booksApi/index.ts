import { BooksApiAxiosInstance } from "services/BaseAxiosSetup";
import { getToken } from "utils/FirebaseUtils";

export const searchBooks = async (
  subject: string,
  maxResult: number,
  startIndex: number,
  q: string = ""
) => {
  const token = await getToken();

  try {
    const data = await BooksApiAxiosInstance(token).get(
      `?q=${q}+subject:"${subject}"&printType=books&langRestrict=pt&maxResults=${maxResult}&startIndex=${startIndex}`
    );
    return data.data;
  } catch (e) {
    alert("Não foi possível buscar os livros!");
  }
};

export const searchOneBook = async (
  q: string = "",
  author: string = "",
  publisher: string = "",
  isbn: string = ""
) => {
  const token = await getToken();

  try {
    const data = await BooksApiAxiosInstance(token).get(
      `?q=${q}+inauthor:${author}+inpublisher:${publisher}+isbn:${isbn}&printType=books&maxResults=1`
    );
    return data.data;
  } catch (e) {
    alert("Não foi possível buscar o livro!");
  }
};
