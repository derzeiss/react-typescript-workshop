![](https://raw.githubusercontent.com/derzeiss/react-typescript-workshop/master/tasks/03-display-an-example-book.png)

- Create a new component called `ExampleBook` and add it to the `App`. Follow the same folder and files patterns as used for the `AppHeader`.
- Create a directory for domain specific code `src/domain`
- Write a typescript interface that matches the following example book and place it in `src/domain/book/Book.ts`.

  ```ts
  const book: Book = {
    id: "1001606140805",
    title: "Java Web Scraping Handbook",
    subtitle: "Learn advanced Web Scraping techniques",
    isbn: "1001606140805",
    abstract:
      "Web scraping or crawling is the art of fetching data from a third party website by downloading and parsing the HTML code to extract the data you want. It can be hard. From bad HTML code to heavy Javascript use and anti-bot techniques, it is often tricky. Lots of companies use it to obtain knowledge ...",
    author: "Kevin Sahin",
    publisher: "Leanpub",
    price: "$0.00",
    numPages: 115,
    cover:
      "https://raw.githubusercontent.com/workshops-de/bookmonkey-api/master/public/covers/1001606140805.png",
  };
  ```

- Add this `const book ` binding to the function body of the `ExampleBook` component. Display the title, subtitle and author of the example book. For correct styling wrap the title in h2, subtitle in h3 and author in div with class „text-meta“

# Hint

```ts
export interface Book {
  id: string;
  title: string;
  subtitle: string;
  isbn: string;
  abstract: string;
  author: string;
  publisher: string;
  price: string;
  numPages: number;
  cover: string;
}
```

```ts
import { Book } from "../../domain/book";
```

```tsx
return (
  <div className="example-book">
    <h2>{book.title}</h2>
    <h3>{book.subtitle}</h3>
    <div className="text-meta">by {book.author}</div>
  </div>
);
```

# Bonus

- Display the cover of the book (contained within a 100px x 100px square)
- Display the example book 3 times
- Display the example book 100 times
