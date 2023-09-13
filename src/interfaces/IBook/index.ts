export interface IBook {
  accessInfo: {
    epub: { isAvailable: boolean };
    pdf: {
      isAvailable: boolean;
      acsTokenLink: string;
    };
  };
  kind: string;
  selfLink: string;
  volumeInfo: {
    authors: [string];
    categories: [string];
    description: string;
    imageLinks: {
      smallThumbnail: string;
      thumbnail: string;
    };
    infoLink: string;
    language: string;
    pageCount: number;
    previewLink: string;
    publishedDate: string;
    publisher: string;
    ratingsCount: number;
    subtitle: string;
    title: string;
  };
}
