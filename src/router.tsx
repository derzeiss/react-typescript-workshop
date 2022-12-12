import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import { AboutScreen } from "./screens/AboutScreen";
import { BookDetailScreen } from "./screens/BookDetailScreen";
import { BooksScreen } from "./screens/BookScreen";
import { ErrorScreen } from "./screens/ErrorScreen";

export const router = createBrowserRouter([
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
        path: "/about",
        element: <AboutScreen />,
      },
      {
        path: "/books/:isbn",
        element: <BookDetailScreen />,
      },
    ],
  },
]);
