![](https://raw.githubusercontent.com/derzeiss/react-typescript-workshop/master/tasks/06-display-a-money-bag-emoji-next-to-free-books.png)

- Display the money bag emoji (`💰`)right before the title of books that cost `$0.00`.
- Don't forget to wrap the emoji in a `<span>`
- Add an `underline` text decoration aswell to all free books. You can either use `className` or a `style` binding
- Add the class `book-list-item_free` to all free books.

# Hints

```tsx
<h1>
  {isFree && <span>💰 </span>}
  ...
</h1>
```

```tsx
<div className={`book-list-item ${isFree ? "book-list-item_free" : ""}`}>
  ...
</div>
```

# Bonus

- Display one to three dollar sign emojis (💲) below the subtitle depending on their price, e.g. $0 - $10, $10 - $30, $30 - $999
