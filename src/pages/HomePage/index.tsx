import BooksCarousel from 'components/BooksCarousel';

const HomePage = () => {
  return (
    <>
      <BooksCarousel subject="Fiction" />
      <BooksCarousel subject="Juvenile Fiction" />
      <BooksCarousel subject="Travel" />
      <BooksCarousel subject="Science" />
    </>
  );
};

export default HomePage;
