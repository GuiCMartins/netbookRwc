import Input from 'components/FormWrapped/Input';
import Button from 'components/HtmlWrapped/Button';

const SearchPage = () => {
  return (
    <div className="p-5">
      <Input name="Título" placeHolder="Título" />
      <Input name="Autor (a)" placeHolder="Autor (a)" />
      <Button text="Buscar livro" />
    </div>
  );
};

export default SearchPage;
