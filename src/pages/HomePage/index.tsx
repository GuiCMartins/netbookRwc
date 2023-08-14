import BooksCarousel from 'components/BooksCarousel';

const HomePage = () => {
  const books = {
    fiction: { subject: 'Fiction', title: 'Ficção' },
    juvenile_fiction: { subject: 'Juvenile Fiction', title: 'Ficção juvenil' },
    science_fiction: { subject: 'Science fiction', title: 'Ficção científica' },
    travel: { subject: 'Travel', title: 'Viagem' },
    science: { subject: 'Science', title: 'Ciência' },
  };

  return (
    <>
      {Object.keys(books).map((book) => (
        <BooksCarousel
          key={(books as any)[book].title}
          subject={(books as any)[book].subject}
          sessionTitle={(books as any)[book].title}
        />
      ))}
    </>
  );
};

export default HomePage;
