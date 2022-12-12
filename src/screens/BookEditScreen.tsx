import { FormEvent, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchBook } from "../domain/book/api";

export const BookEditScreen = () => {
  const { isbn } = useParams<{ isbn: string }>();
  const [title, setTitle] = useState("");
  const titleError =
    title.length < 5 && "The title must be at least 5 characters long.";

  useEffect(() => {
    if (!isbn) return;
    fetchBook(isbn).then((book) => {
      setTitle(book.title);
    });
  }, [isbn]);

  const handleSubmit = (ev: FormEvent) => {
    ev.preventDefault();
    if (titleError) return;

    alert(`entered title: "${title}"`);
  };

  return (
    <form className="book-edit-screen" onSubmit={handleSubmit}>
      <label htmlFor="title">Title</label>
      <input
        id="title"
        value={title}
        onChange={(ev) => setTitle(ev.target.value)}
      />
      {titleError && <div className="error">{titleError}</div>}
      <button type="submit" className="m-top">
        <span>💾</span>
        Save
      </button>
    </form>
  );
};
