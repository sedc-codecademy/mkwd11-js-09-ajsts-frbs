export interface Movie {
  id: string;
  director: string;
  genre: string;
  name: string;
  imageUrl: string;
}

export interface MovieRequestBody {
  name: string;
  genre: string;
  director: string;
  imageUrl: string;
}
