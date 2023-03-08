![](https://raw.githubusercontent.com/derzeiss/react-typescript-workshop/master/tasks/07-add-a-like-counter-to-the-book-list-item-component.png)

- Add a `<button className="secondary">` element to the BookListItem component that shows a clapping hands emoji (`👏`)
- Don't forget to wrap the emoji in a `<span>`
- Keep track how many times the button was clicked and display that number next to the emoji.
- If the button was clicked 5 or more times show a star emoji (`⭐️`) in front of the book title (and the money bag).

# Hints

```tsx
const [numLikes, setNumLikes] = useState(0);
```

```tsx
<button onClick={() => setNumLikes(numLikes + 1)}>👏</button>
```

# Bonus

- There's a class to animate an icon when it appears. Find it in the ui-kit and apply it to the star icon
- Extract the like counter into a separate `LikeCounter` component. Pass both the current count as well as a callback function to set the count as props.
- Add another button for dislike. Only show the star when there's a +5 positive balance towards likes
- If the num Likes is 0, don't display that number
