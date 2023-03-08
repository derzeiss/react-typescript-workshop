![](https://raw.githubusercontent.com/derzeiss/react-typescript-workshop/master/tasks/02-add-an-app-header-component.png)

- In the `src/App.tsx` file, create a new function component called `AppHeader`, which renders a simple h1 heading with the name of your app in it

  - Please use an _arrow function expression_, i.e. the `=>` arrow to create this function component.
  - Don't forget to add the kebab-cased component name as className (`className="app-header"`)

- Add the `AppHeader` at the top of the `App` component (right below the `div` with `className="App"`). Remove the existing demo content.

#### Refactor to a more scalable directory structure

- Create a new directory for reusable components: `src/components` and add a `AppHeader.tsx` file.
  ```
  src/
    components/
      - AppHeader.tsx
  ```
- Move the `AppHeader` function into `AppHeader.tsx` and export it (named export).
- Remove the unused `src/logo.svg` file.

# Hints

```tsx
export const AppHeader = () => {
  return <h1 className="app-header">Bookmonkey</h1>;
};
```

```ts
import { AppHeader } from "./components/AppHeader";
```

```tsx
<div className="App">
  <AppHeader />
</div>
```

# Bonus

[Download the bookmonkey logo](https://raw.githubusercontent.com/workshops-de/bookmonkey-api/master/logo.png) and place it in the app header. You can use an image like this

```tsx
import logo from "../img/image-name.jpg";

...

<img src={logo} alt="Awesome image" />
```
