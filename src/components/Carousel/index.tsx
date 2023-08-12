import { ReactNode } from 'react';
import { SpanPointer } from './styles';

interface CarouselProps {
  handlePrev: () => void;
  handleNext: () => void;
  children: ReactNode;
}

const Carousel = ({ handlePrev, handleNext, children }: CarouselProps) => {
  return (
    <div id="carouselExample" className="carousel slide">
      <div className="carousel-inner">
        <div className="carousel-item active">{children}</div>
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
  );
};

export default Carousel;
