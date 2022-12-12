import { Book } from "./Book";

export const fetchBooks = () => {
  const result = fetch("http://localhost:4730/books").then((res) => res.json());
  return result as Promise<Book[]>;
};

export const fetchBook = (isbn: string) => {
  const result = fetch(`http://localhost:4730/books/${isbn}`).then((res) =>
    res.json()
  );
  return result as Promise<Book>;
};
