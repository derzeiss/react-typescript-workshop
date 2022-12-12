import { BookList } from "../components/BookList";
import { useBooks } from "../domain/book/useBooks";

export const BooksScreen = () => {
  const books = useBooks();

  return <BookList books={books} />;
};
