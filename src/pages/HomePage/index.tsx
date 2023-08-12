import { useEffect, useState } from 'react';
import { searchBooks } from 'services/booksApi';
import { SpanPointer } from './styles';

interface teste {
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

const HomePage = () => {
  const [books, setBooks] = useState<teste[] | undefined>(undefined);
  const [pagination, setPagination] = useState<number>(0);
  const maxResult = 5;

  useEffect(() => {
    const search = async () => {
      const data = await searchBooks('Fiction', maxResult, pagination);

      setBooks(data?.items);
    };

    search();
  }, [pagination]);

  const handlePrev = () => {
    if (pagination > 0) {
      setPagination((current) => current - maxResult - 1);
    }
  };

  const handleNext = () => {
    setPagination((current) => current + maxResult + 1);
  };

  return (
    <>
      <div id="carouselExample" className="carousel slide">
        <div className="carousel-inner">
          <div className="carousel-item active">
            {books &&
              books.map(({ volumeInfo }) => {
                const { imageLinks } = volumeInfo;
                return (
                  <div className="card col-md-2 d-inline-block mb-2 ms-2">
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
                      <h5 className="card-title text-truncate">
                        {volumeInfo.title}
                      </h5>
                    </div>
                  </div>
                );
              })}
          </div>
        </div>
        <div
          className="carousel-control-prev"
          data-bs-target="#carouselExample"
          data-bs-slide="prev"
        >
          <SpanPointer
            className="carousel-control-prev-icon me-4"
            aria-hidden="true"
            onClick={handlePrev}
          ></SpanPointer>
          <span className="visually-hidden">Previous</span>
        </div>
        <div
          className="carousel-control-next"
          data-bs-target="#carouselExample"
          data-bs-slide="next"
        >
          <SpanPointer
            className="carousel-control-next-icon ms-5"
            aria-hidden="true"
            onClick={handleNext}
          ></SpanPointer>
          <span className="visually-hidden">Next</span>
        </div>
      </div>
    </>
  );
};

export default HomePage;
