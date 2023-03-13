![](https://raw.githubusercontent.com/derzeiss/react-typescript-workshop/master/tasks/15-add-navigation-links-to-the-books-and-about-screen.png)

- In the `AppHeader` add a `NavLink` to the Books and to the About page

# Hints

```tsx
<NavLink to="/about">About</NavLink>
```

# Bonus

- Render the `NavLinks` from a `links` array using `.map`:

```ts
const links = [
  {path: "/books", text: "Books"}
  {path: "/about", text: "About"}
]
```

- Use the primary color from the ThemeContext to additionally highlight the currently active link. Tip: The `NavLink` component's style prop can be a function that receives the `isActive` state as an argument

```tsx
<NavLink style={({ isActive }) => ({ color: "green" })}>Books</NavLink>
```
