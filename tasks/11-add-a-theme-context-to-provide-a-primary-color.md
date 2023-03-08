![](https://raw.githubusercontent.com/derzeiss/react-typescript-workshop/master/tasks/11-add-a-theme-context-to-provide-a-primary-color.png)

- Create a new subdirectory for the theme `src/domain/theme`
- Create this interface for the Theme in `src/domain/theme/Theme.ts`
  ```ts
  export interface Theme {
    primaryColor: string;
    setPrimaryColor: (color: string) => void;
  }
  ```
- In a new file `src/domain/theme/ThemeContext.ts` create a `ThemeContext` that provides a `Theme` object. For the default value, assign `primaryColor` to `darkgrey` and `setPrimaryColor` to a function that does nothing (so called _noop_). Add the necessary exports.
- Use the theme context in the `AppHeader` component and set the text color of the 'Bookmonkey' heading to to the primary color

# Hints

```tsx
export const MyContext = createContext<MyType>(defaultValue);
```

```tsx
import { MyContext } from "...";

const context = useContext(MyContext);
```

# Bonus

- Set the border and text color of the `<button>` in `Hideable` and the `LikeCounter` to the `primaryColor` as well.
- Create a new custom hook `usePrimaryColor` which returns the primaryColor from the `ThemeContext`
- Extract a `BaseButton` component, which is styled using the primary theme color. Use this `BaseButton` to replace the `<button>` html tag in both the `Hideable` component and the `LikeCounter`.
