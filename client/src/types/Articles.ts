export interface Article {
  id: string;
  title: string;
  description: string;
  content?: string;
  uploadedDate: Date;
  publicationDate: any;
  image: string;
}
