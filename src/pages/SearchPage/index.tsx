import Input from "components/FormWrapped/Input";
import Button from "components/HtmlWrapped/Button";
import { Form } from "./styles";
import { ChangeEvent, useEffect, useState } from "react";
import { ISearchBook } from "interfaces/ISearchBook";
import { searchOneBook } from "services/booksApi";

const initialValues: ISearchBook = {
  title: "",
  author: "",
  publisher: "",
  isbn: "",
};

const SearchPage = () => {
  const [searchBook, setSearchBook] = useState(initialValues);
  const [isTitleValid, setIsTitleValid] = useState(true);

  const inputs = {
    title: {
      title: "Título do livro",
      value: searchBook.title,
      isValid: isTitleValid,
    },
    author: {
      title: "Autor (a)",
      value: searchBook.author,
      isValid: true,
    },
    publisher: {
      title: "Editora",
      value: searchBook.publisher,
      isValid: true,
    },
    isbn: {
      title: "ISBN",
      value: searchBook.isbn,
      isValid: true,
    },
  };

  useEffect(() => {
    const searchOneBookEffect = async () => {
      const book = await searchOneBook(
        searchBook.title,
        searchBook.author,
        searchBook.publisher,
        searchBook.isbn
      );
      console.log(book);
    };

    if (isTitleValid) {
      searchOneBookEffect();
    }
  }, [isTitleValid]);

  const handleOnChange = (event: ChangeEvent<HTMLInputElement>) => {
    const name = event.target.name;
    const value = event.target.value;

    setSearchBook((current) => ({
      ...current,
      [name]: value,
    }));
  };

  const formValidation = () => {
    if (!searchBook.title.trim()) {
      setIsTitleValid(false);
    } else {
      setIsTitleValid(true);
    }
  };

  const onClick = async (
    event: React.FormEvent<HTMLFormElement> | undefined
  ) => {
    event?.preventDefault();

    formValidation();
  };

  return (
    <Form className="row g-3 needs-validation" onSubmit={onClick}>
      {Object.keys(inputs).map((input) => {
        const { title, value, isValid } = (inputs as any)[input];

        return (
          <Input
            key={input}
            title={title}
            value={value}
            onChange={handleOnChange}
            name={input}
            isValid={isValid}
            feedback="Preencha este campo!"
          />
        );
      })}

      <div className="col-12">
        <Button type="submit" text="Pesquisar livro" />
      </div>
    </Form>
  );
};

export default SearchPage;
