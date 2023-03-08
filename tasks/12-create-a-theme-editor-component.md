![](https://raw.githubusercontent.com/derzeiss/react-typescript-workshop/master/tasks/12-create-a-theme-editor-component.png)

- Wrap the return of `App.tsx` in a `ThemeContext.Provider`. Create a local `primaryColor` state with `useState` and use both the value and the setter to construct the theme value for the `ThemeContext.Provider`. Set the default primaryColor to `tomato` and check if the styling has changed.

  ```tsx
  const [primaryColor, setPrimaryColor] = useState("tomato");

  return (
    <ThemeContext.Provider value={{ primaryColor, setPrimaryColor }}>
      <div className="App">
        <>...</>
      </div>
    </ThemeContext.Provider>
  );
  ```

- Create a `ThemeEditor` component, which has two buttons to set the primary color to either `tomato` or `olivedrab` and add it to the `AppHeader` component.

# Hints

```tsx
<button
  style={{ background: "tomato" }}
  onClick={() => theme.setPrimaryColor("tomato");}
/>
```

# Bonus

- Create an array from the given colors plus some more [CSS color names](https://www.w3schools.com/colors/colors_names.asp) and generate the buttons from this array
- Highlight the current primary color in the theme editor by adding `outline: 1px solid #333` to the button
- Try overwriting the Theme in the `BookList` component with a nested ThemeContext.Provider
