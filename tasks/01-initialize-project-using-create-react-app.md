![](https://raw.githubusercontent.com/derzeiss/react-typescript-workshop/master/tasks/01-initialize-project-using-create-react-app.png)

1. Create a new React + Typescript project using `create-react-app`. This command will create a new sub folder `react-workshop` containing a template project.

   ```bash
   npx create-react-app react-workshop --template=typescript
   ```

1. Change into the project directory

   ```bash
   cd react-workshop
   ```

1. Start the project (development server with file watching)

   ```bash
   npm run start
   ```

If your browser doesn't open the website automatically, visit the url provided by the `npm run start` command.

#### Update dependencies

1. Run `npx npm-check-updates` in the root folder of the project
2. You should see some `npx npm-check-updates -u` which updates the dependency versions in `package.json` file. Observe the changes.
3. Run `npm install` to install the new versions.
4. Run `npm start` again to verify that the app still runs on `localhost:3000`

#### Add styling

1. Inside the `src/` directory, delete `App.css` and remove `import './App.css'` from `App.tsx`.
2. Remove everything inside `index.css` (Ctrl+A, Backspace) and replace it with the content of [this file](https://raw.githubusercontent.com/derzeiss/react-typescript-workshop/master/src/index.css).
3. Inside the `public/` folder, create a `ui-kit.html` file and paste the content of [this file](https://raw.githubusercontent.com/derzeiss/react-typescript-workshop/master/public/ui.html) into it.
4. Find the `ui-kit.html` file in Explorer / Finder. Double click it to open it in the browser.
5. Take a few minutes to get familiar with the UI-Kit.

# Bonus

- Explore the directory structure of the repository. Can you guess what each file's purpose is?
- Try to change the title of the page (the text shown in the browser tab handle next to the favicon) to 'Bookmonkey'
- Make the React Logo spin faster and counter-clock-wise. You might want to restore some of the css from `App.css`. See VSCodes git tab to restore it.
