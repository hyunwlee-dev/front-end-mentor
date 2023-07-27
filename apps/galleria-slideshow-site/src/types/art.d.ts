type Art = {
  id?: string;
  name: string;
  year: number;
  description: string;
  source: string;
  artist: {
    image: string;
    name: string;
  };
  images: {
    thumbnail: string;
    hero: {
      small: string;
      large: string;
    };
    gallery: string;
  };
  sizes: {
    artist: {
      width: number;
      height: number;
    };
    thumbnail: {
      width: number;
      height: number;
    };
    hero: {
      small: {
        width: number;
        height: number;
      };
      large: {
        width: number;
        height: number;
      };
    };
    gallery: {
      width: number;
      height: number;
    }
  };
};
