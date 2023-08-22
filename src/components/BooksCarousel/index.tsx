import Carousel from 'components/Carousel';
import { useEffect, useState } from 'react';
import { searchBooks } from 'services/booksApi';
import { Title, BookCard, Img } from './styles';
import ContainerCenter from 'components/ContainerCenter';

interface booksProps {
  id: string;
  volumeInfo: {
    title: string;
    authors: string[];
    description: string;
    imageLinks: {
      smallThumbnail: string;
      thumbnail: string;
    };
  };
}

interface BooksCarouselProps {
  subject: string;
  sessionTitle: string;
}

const BooksCarousel = ({ subject, sessionTitle }: BooksCarouselProps) => {
  const [books, setBooks] = useState<booksProps[] | undefined>(undefined);
  const [pagination, setPagination] = useState<number>(0);
  const maxResult = 5;

  useEffect(() => {
    const search = async () => {
      const data = await searchBooks(subject, maxResult, pagination);

      setBooks(data?.items);
    };

    search();
  }, [subject, pagination]);

  const handlePrev = () => {
    if (pagination > 0) {
      setPagination((current) => current - maxResult - 1);
    }
  };

  const handleNext = () => {
    setPagination((current) => current + maxResult + 1);
  };

  return (
    <div className="mb-3 mt-3">
      <ContainerCenter>
        <Carousel handleNext={handleNext} handlePrev={handlePrev}>
          <p>{sessionTitle}</p>
          {books &&
            books.map(({ volumeInfo, id }) => {
              const { imageLinks, title } = volumeInfo;
              return (
                <BookCard
                  key={id}
                  className="card col-md-2 d-inline-block mb-2 ms-2"
                >
                  <Img
                    src={
                      imageLinks?.thumbnail
                        ? imageLinks?.thumbnail
                        : imageLinks?.smallThumbnail ?? '/book.png'
                    }
                    className="card-img-top"
                    alt="..."
                  />
                  <div className="card-body">
                    <Title className="card-title text-truncate">{title}</Title>
                  </div>
                </BookCard>
              );
            })}
        </Carousel>
      </ContainerCenter>
    </div>
  );
};

export default BooksCarousel;
