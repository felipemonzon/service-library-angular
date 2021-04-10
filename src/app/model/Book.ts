import { Author } from "./Author";
import { Publisher } from "./Publisher";

export interface Book {
    id: number;
    title: string;
    isbn: string;
    status: string;
    authors: Author[];
    publisher: Publisher;
}