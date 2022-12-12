import { FormEvent, useRef } from "react";

export const BookEditScreen = () => {
  const ref = useRef<HTMLInputElement>(null);

  const handleSubmit = (ev: FormEvent) => {
    ev.preventDefault();
    
    const title = ref.current?.value;
    console.log("entered title:", title);
  };

  return (
    <form className="book-edit-screen" onSubmit={handleSubmit}>
      <label htmlFor="title">Title</label>
      <input id="title" ref={ref} />
      <button type="submit" className="m-top">
        <span>💾</span>
        Save
      </button>
    </form>
  );
};
