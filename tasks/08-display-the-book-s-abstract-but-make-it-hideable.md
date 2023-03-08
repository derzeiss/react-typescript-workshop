![](https://raw.githubusercontent.com/derzeiss/react-typescript-workshop/master/tasks/08-display-the-book-s-abstract-but-make-it-hideable.png)

- Display the book's abstract in the `BookListItem` component inside a.
- Make sure the abstract is displayed with a drop-cap (the big letter); See the ui-kit to learn how.
- Add a `<button class="tertiary">` to toggle if the abstract is being shown or hidden. The button text should be "+ show details" or "- hide details" depending on the state
- Create a new `Hideable` component, which encapsulates this behavior. The `Hideable` component should render the children elements passed to it and a button to show/hide them.
- Use the `Hideable` component in `BookListItem`.
- The hideable content should fade-in when you click "+ show details". Make sure to add `className="hideable"` to the component to enable the animation.

# Hints

```tsx
<Hideable>
  <p>{book.abstract}</p>
</Hideable>
```

```tsx
import { ReactNode } from "react";

export interface MyComponentProps {
  children: ReactNode;
}
```

```jsx
<div class="hideable">
  {shouldShowChildren && children}
  ...
</div>
```

# Bonus

- Add a prop to `Hideable` to set the initial state to either hidden or visible.
- Add an optional prop to set a maximum height for the contents of `Hideable` and make sure a scrollbar is shown when this height limit is reached.
