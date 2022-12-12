import { Book } from "../domain/book/Book";

interface BookListItemProps {
  book: Book;
}

export const BookListItem: React.FC<BookListItemProps> = ({ book }) => {
  const isFree = book.price === "$0.00";

  return (
    <div className={`book-list-item ${isFree ? "book-list-item_free" : ""}`}>
      <h2>
        {isFree && <span>💰 </span>}
        {book.title}
      </h2>
      <h3>{book.subtitle}</h3>
      <div className="text-meta">by {book.author}</div>
    </div>
  );
};
