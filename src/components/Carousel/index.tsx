import { ReactNode } from 'react';
import { SpanPointer, SpanNextContainer, SpanPrevContainer } from './styles';

interface CarouselProps {
  handlePrev: () => void;
  handleNext: () => void;
  children: ReactNode;
}

const Carousel = ({ handlePrev, handleNext, children }: CarouselProps) => {
  return (
    <div id="carousel" className="carousel slide">
      <div className="carousel-inner">
        <div className="carousel-item active">{children}</div>
      </div>
      <SpanPrevContainer
        className="carousel-control-prev"
        data-bs-target="#carousel"
        data-bs-slide="prev"
      >
        <SpanPointer
          className="carousel-control-prev-icon me-4"
          aria-hidden="true"
          onClick={handlePrev}
        ></SpanPointer>
        <span className="visually-hidden">Previous</span>
      </SpanPrevContainer>
      <SpanNextContainer
        className="carousel-control-next"
        data-bs-target="#carousel"
        data-bs-slide="next"
      >
        <SpanPointer
          className="carousel-control-next-icon ms-5"
          aria-hidden="true"
          onClick={handleNext}
        ></SpanPointer>
        <span className="visually-hidden">Next</span>
      </SpanNextContainer>
    </div>
  );
};

export default Carousel;
