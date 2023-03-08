![](https://raw.githubusercontent.com/derzeiss/react-typescript-workshop/master/tasks/09-fetch-and-display-books-from-the-bookmonkey-api.png)

- Start the bookmonkey-api server in a separate terminal. Visit [http://localhost:4730/books](http://localhost:4730/books) to verify.
  ```bash
  npx bookmonkey-api
  ```
- In `src/domain/book/api.ts` create a new function called `fetchBooks` which sends a GET request to [http://localhost:4730/books](http://localhost:4730/books), parses the response body as json and returns an array of books.
- In `App.tsx`, instead of displaying the exampleBooks, start out with an empty books array and initiate fetching the books on the first render.

# Hints

```ts
const fetchSomething = () => {
  return fetch(url)
    .then((res) => res.json()) as MyType;
}
};
```

```ts
const [books, setBooks] = useState<Book[]>([]);
```

```ts
useEffect(() => {
  fetchBooks().then((books) => setBooks(books));
}, []);
```

# Bonus

- Show the text 'Loading...' while waiting for a response from the server. You'll probably have to artificially throttle the network speed in the browser's devtools to notice.
- Show an error message, if the server is not reachable or returns an error status code
- Make the `BOOKMONKEY_API_URL` an environment variable. [Create-React-App Documentation: Adding custom environment variables](https://create-react-app.dev/docs/adding-custom-environment-variables/)
