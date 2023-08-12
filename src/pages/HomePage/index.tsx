import BooksCarousel from 'components/BooksCarousel';

const HomePage = () => {
  const subjects = [
    'Fiction',
    'Juvenile Fiction',
    'Science fiction',
    'Travel',
    'Science',
  ];

  return (
    <>
      {subjects.map((subject) => (
        <BooksCarousel key={subject} subject={subject} />
      ))}
    </>
  );
};

export default HomePage;
