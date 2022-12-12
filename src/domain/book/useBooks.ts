import { useEffect, useState } from "react";
import { fetchBooks } from "./api";
import { Book } from "./Book";

export const useBooks = () => {
  const [books, setBooks] = useState<Book[]>([]);

  useEffect(() => {
    fetchBooks().then((b) => setBooks(b));
  }, []);

  return books;
};
