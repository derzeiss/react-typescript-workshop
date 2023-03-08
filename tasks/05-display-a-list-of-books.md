![](https://raw.githubusercontent.com/derzeiss/react-typescript-workshop/master/tasks/05-display-a-list-of-books.png)

- Instead of only showing the first two example books, render the entire list using the `map` array method. Don't forget to set the key attribute on each ListItem.
- Move the list rendering logic into a new `BookList` component, which takes the `books` as a prop

# Hints

```tsx
<div className="book-list">
  {books.map((book) => (
    <BookListItem book={book} key={book.id} />
  ))}
</div>
```

# Bonus

- Add a header to the book list that shows the number of books in the list
- Display the minimum and maximum number of pages in the `BookList` header.
- Display the minimum and maximum price of the books in the `BookList` header
