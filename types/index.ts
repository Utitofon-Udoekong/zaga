export interface Image {
    src: string;
    width?: number;
    height?: number;
    alt?: string;
  }
  
export interface Event {
  title: string;
  year: string;
  description: string;
  cover: string
}

export type Gallery = {
  _path: string;
  title: string;
  description?: string;
  cover: Image;
  year: number;
  video?: string;
  igLink: string;
  images: Image[]
};

export type Story = {
  _path: string;
  title: string;
  description?: string;
  cover?: Image;
  date?: string;
  tags?: string[];
};