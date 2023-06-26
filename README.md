# Employee directory

**Demo**: [sximenez.github.io/2023jan-employee-directory](https://sximenez.github.io/2023jan-employee-directory/)

**Description**: Directory app for employee management (CRUD).

## Stack

### HTML

1. Integrated more complex form elements with `select` tags.

### CSS

1. Used the CSS framework Tailwind CSS for styling.
2. Used Sass for defining the Dark mode styling.

### Vanilla JS

1. Implemented a pattern separating responsibilities (Model-View-Controller).
2. Defined a router listening for `hashchange` in the url, redirecting to a desired route.
3. Defined a controller per route applying simple logic and loading views.
4. Defined views as components.
5. Defined models containing instructions to perform CRUD operations (_create, read, update, delete_).
6. Implemented a Search function.
7. Implemented a Dark mode function.
8. Used dummy data and `sessionStorage/localStorage` for test purposes (no persistance layer defined).
9. ❗**Improvements**:
   1. Refactor functions
   2. Refactor `fetch` functions using the `async/await` syntax.
