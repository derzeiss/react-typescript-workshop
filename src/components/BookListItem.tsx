import { useState } from "react";
import { Book } from "../domain/book/Book";

interface BookListItemProps {
  book: Book;
}

export const BookListItem: React.FC<BookListItemProps> = ({ book }) => {
  const [likes, setLikes] = useState(0);
  const isFree = book.price === "$0.00";

  const handleLikeClick = () => {
    setLikes(likes + 1);
  };

  return (
    <div className={`book-list-item ${isFree ? "book-list-item_free" : ""}`}>
      <h2>
        {likes >= 5 && <span className="icon_entry">⭐ </span>}
        {isFree && <span>💰 </span>}
        {book.title}
      </h2>
      <h3>{book.subtitle}</h3>
      <div className="text-meta">by {book.author}</div>
      <button className="secondary" onClick={handleLikeClick}>
        <span>👏</span>
        {likes}
      </button>
    </div>
  );
};
