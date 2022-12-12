import { useEffect, useState } from "react";
import { AppHeader } from "./components/AppHeader";
import { BookList } from "./components/BookList";
import { fetchBooks } from "./domain/book/api";
import { Book } from "./domain/book/Book";

function App() {
  const [books, setBooks] = useState<Book[]>([]);

  useEffect(() => {
    fetchBooks().then((b) => setBooks(b));
  }, []);

  return (
    <div className="App">
      <AppHeader />
      <BookList books={books} />
    </div>
  );
}

export default App;
