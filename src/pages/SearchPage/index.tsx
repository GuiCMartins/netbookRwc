import Input from "components/FormWrapped/Input";
import Button from "components/HtmlWrapped/Button";
import { Form } from "./styles";
import { ChangeEvent, useEffect, useReducer, useRef } from "react";
import { searchOneBook } from "services/booksApi";
import { IReducerAction } from "interfaces/IReducerAction";
import { ISearchBookForm } from "interfaces/ISearchBookForm";

enum actions {
  ON_CHANGE_VALUE = "ON_CHANGE_VALUE",
  ON_SUBMIT = "ON_SUBMIT",
  CHANGE_VALIDATION = "CHANGE_VALIDATION",
}

const initialValues: ISearchBookForm = {
  searchBook: {
    title: "",
    author: "",
    publisher: "",
    isbn: "",
  },
  book: {
    accessInfo: {
      epub: { isAvailable: false },
      pdf: {
        isAvailable: false,
        acsTokenLink: "",
      },
    },
    kind: "",
    selfLink: "",
    volumeInfo: {
      authors: [""],
      categories: [""],
      description: "",
      imageLinks: {
        smallThumbnail: "",
        thumbnail: "",
      },
      infoLink: "",
      language: "",
      pageCount: 0,
      previewLink: "",
      publishedDate: "",
      publisher: "",
      ratingsCount: 0,
      subtitle: "",
      title: "",
    },
  },
  isValid: true,
};

const reducer = (state: ISearchBookForm, action: IReducerAction) => {
  const { type, payload } = action;

  switch (type) {
    case actions.ON_CHANGE_VALUE:
      const { name, value }: { name: string; value: string } = payload;

      return {
        searchBook: { ...state.searchBook, [name]: value },
        book: state.book,
        isValid: state.isValid,
      };
    case actions.ON_SUBMIT:
      return {
        searchBook: state.searchBook,
        book: payload,
        isValid: state.isValid,
      };
    case actions.CHANGE_VALIDATION:
      return {
        searchBook: state.searchBook,
        book: state.book,
        isValid: payload,
      };
    default:
      return state;
  }
};

const SearchPage = () => {
  const [state, dispatch] = useReducer(reducer, initialValues);
  const firstUpdate = useRef(true);

  const inputs = {
    title: {
      title: "Título do livro",
      value: state.searchBook.title,
      isValid: state.isValid,
    },
    author: {
      title: "Autor (a)",
      value: state.searchBook.author,
      isValid: true,
    },
    publisher: {
      title: "Editora",
      value: state.searchBook.publisher,
      isValid: true,
    },
    isbn: {
      title: "ISBN",
      value: state.searchBook.isbn,
      isValid: true,
    },
  };

  useEffect(() => {
    if (firstUpdate.current) {
      firstUpdate.current = false;
      return;
    }

    if (!state.searchBook.title.trim()) {
      dispatch({ type: actions.CHANGE_VALIDATION, payload: false });
    } else {
      dispatch({ type: actions.CHANGE_VALIDATION, payload: true });
    }
  }, [state.searchBook.title]);

  const handleOnChange = (event: ChangeEvent<HTMLInputElement>) => {
    const name = event.target.name;
    const value = event.target.value;

    dispatch({ type: actions.ON_CHANGE_VALUE, payload: { name, value } });
  };

  const onClick = async (
    event: React.FormEvent<HTMLFormElement> | undefined
  ) => {
    event?.preventDefault();

    if (!state.searchBook.title.trim()) {
      dispatch({ type: actions.CHANGE_VALIDATION, payload: false });
    } else {
      const book = await searchOneBook(
        state.searchBook.title,
        state.searchBook.author,
        state.searchBook.publisher,
        state.searchBook.isbn
      );
      dispatch({
        type: actions.ON_SUBMIT,
        payload: book.items ? book.items[0] : initialValues,
      });
    }
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
