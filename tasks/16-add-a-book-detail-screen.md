![](https://raw.githubusercontent.com/derzeiss/react-typescript-workshop/master/tasks/16-add-a-book-detail-screen.png)

- Create a `BookDetailScreen` component and display it on the route `/books/:isbn`
- Go to the `BookListItem` component and add a link to the book details.
- Use the `useParams` function to get access to the isbn in the `BookDetailScreen`. Test it either by rendering the isbn or a console.log.
- Create an `async fetchBook(isbn: string): Promise<Book>` function in `src/domain/book/api` and use it to fetch a single book in the `BookDetailScreen`
- Display information about the book in the component.

# Hints

```tsx
<NavLink to={`/books/${book.isbn}`}>...</NavLink>
```

```tsx
const { isbn } = useParams<{ isbn: string }>();
```

```ts
const response = (await fetch("http://localhost:4730/books/" + isbn)) as Book;
```

# Bonus

- Add a "return" link to `BookDetailsScreen` to return to the `/books` route.
- Add a custom `useBook` hook, similar to `useBooks`.
- Try using a custom `loader` to fetch the books in the route definition. Then use the `useLoaderData` hook from `react-router-dom` to get the book data in the `BookDetailsScreen`. Does this alternative approach change the user experience in any way?

```tsx
// router.tsx
{
  path: "books/:isbn",
  loader: ({ params }) => {
    return fetchBook(params.isbn!);
  },
  element: <BookDetailScreen />,
},

// BookDetailScreen.tsx
const book = useLoaderData() as Book;
```
