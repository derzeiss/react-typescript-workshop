![](https://raw.githubusercontent.com/derzeiss/react-typescript-workshop/master/tasks/14-add-a-books-and-an-about-screen.png)

- Create a `BooksScreen` and an `AboutScreen` component in `src/screens` (Don't forget to add `book-screen` and `about-screen` class-names!)
- The `BooksScreen` should fetch books from the api and display them using the `BookList` (just like `App.tsx`). The `AboutScreen` should display a friendly message.
- In `router.tsx` add two child routes to the main '/' route:
  - A route with an empty path `""` which renders the `BooksScreen`
  - A route with the path `"about"`, which renders the `AboutScreen`
  ```tsx
  {
    path: "/",
    element: <App />
    children: [
      {
        path: ...
        element: ...
      },
      ...
    ]
  }
  ```
- Replace the `BookList` in the `App.tsx` with an `<Outlet />` element from `react-router-dom` to display the child routes below the `AppHeader`.
- Test the routes by vising [http://localhost:3000/]() and [http://localhost:3000/about]() . Also try the route [http://localhost:3000/something]()

# Hints

```tsx
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorScreen />,
    children: [
      {
        path: "",
        element: <BooksScreen />,
      },
      {
        path: "about",
        element: <AboutScreen />,
      },
    ],
  },
```

```tsx
<div className="App">
  <ThemeEditor />
  <AppHeader />
  <Outlet />
</div>
```

# Bonus

- Instead of rendering the `BooksScreen` on the `/` route, render it on `/books`, but also automatically redirect the `/` route to `/books`. For this you have to add a custom loader to invoke the `redirect` function from `react-router-dom`. [redirect in the router docs](https://reactrouter.com/en/main/fetch/redirect)

```tsx
{
  path: "",
  loader: () => redirect("books"),
}
```
