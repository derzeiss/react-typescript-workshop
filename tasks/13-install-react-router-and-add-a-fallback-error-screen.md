![](https://raw.githubusercontent.com/derzeiss/react-typescript-workshop/master/tasks/13-install-react-router-and-add-a-fallback-error-screen.png)

- Install the `react-router-dom` npm package (restart the dev server after installation)
  ```bash
  npm install react-router-dom
  ```
- In a new file called `src/router.tsx` use the `createBrowserRouter` function to create and export a router. Register the `App` component as the element for the root `/` path

  ```ts
  import { createBrowserRouter } from "react-router-dom";
  import App from "./App";

  export const router = createBrowserRouter([
    {
      path: "/",
      element: <App />,
    },
  ]);
  ```

- In the `index.tsx` file replace the `<App />` with a `<RouterProvider />` and bind the router prop to the `router` you just created

  ```tsx
  root.render(
    <React.StrictMode>
      <RouterProvider router={router} />
    </React.StrictMode>
  );
  ```

  The app should now work just as before.

- Create a new directory for your screens: `src/screens`. In a new `src/screens/ErrorScreen` folder create an `ErrorScreen` component (with `ErrorScreen.tsx` and `index.ts` files) that displays a generic error message.
- In `router.tsx` add the `<ErrorScreen />` as the `errorElement` for the root `/` path. Visit [localhost:3000/some-faulty-url]() to verify that it works.

# Hints

```tsx
{
  path: "/",
  element: <App />,
  errorElement: <ErrorScreen />,
}
```

```tsx
<div className="error-screen">
  <h1>Oops, something went wrong...</h1>
</div>
```

# Bonus

- Use the `useRouteError` hook from `react-router-dom` in the `ErrorScreen` component to display a more specific error message. (use `isRouteErrorResponse` from `react-router-dom` to analyze the error object you get from `useRouteError`)
- Tryout what happens if you throw an Error from the `BookList` component.
