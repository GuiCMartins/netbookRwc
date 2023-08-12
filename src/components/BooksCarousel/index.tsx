import Carousel from 'components/Carousel';
import { useEffect, useState } from 'react';
import { searchBooks } from 'services/booksApi';

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
}

const BooksCarousel = ({ subject }: BooksCarouselProps) => {
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
    <Carousel handleNext={handleNext} handlePrev={handlePrev}>
      {books &&
        books.map(({ volumeInfo, id }) => {
          const { imageLinks, title } = volumeInfo;
          return (
            <div key={id} className="card col-md-2 d-inline-block mb-2 ms-2">
              <img
                src={
                  imageLinks?.thumbnail
                    ? imageLinks?.thumbnail
                    : imageLinks?.smallThumbnail ?? ''
                }
                className="card-img-top"
                alt="..."
                style={{ height: '200px' }}
              />
              <div className="card-body">
                <h5 className="card-title text-truncate">{title}</h5>
              </div>
            </div>
          );
        })}
    </Carousel>
  );
};

export default BooksCarousel;
