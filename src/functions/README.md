## functions

The `functions` folder contains essential JavaScript files responsible for various functionalities within the application. These files handle tasks such as generating components, validating forms, managing data storage, and facilitating navigation. This README provides an overview of the files in the `Functions` folder and their respective functionalities.

### Folder Structure

The `Functions` folder includes the following files:

- `footer.js`: Generates the footer, which displays links to the [source code](https://github.com/shahir-47/Todo-List) and [my GitHub profile](https://github.com/shahir-47/). It dynamically adjusts its width based on the sidebar's width, ensuring a consistent and responsive layout.

- `form.js`: Handles form validation for the add todo form, edit todo form, add project form, edit project form, and add note form. This file ensures that the form inputs are valid before calling the appropriate method in `project.js` or `note.js`, which updates the respective lists storing all the projects, todos, and notes.

- `header.js`: Generates the header or navigation bar at the top of the page. It includes elements such as the logo, toggle switch for dark/light theme, search bar for searching, and sidebar button for maximizing and minimizing the sidebar.

- `notes.js`: An Immediately Invoked Function Expression (IIFE) responsible for storing and retrieving all the notes. It manages the storage and retrieval of notes, ensuring effective management of user-created notes.

- `pageLoad.js`: Loads the header, sidebar, footer, and the page content div, which serves as the container for all the page content. This file facilitates the consistent rendering of essential page components.

- `popup.js`: Responsible for generating the add todo form popup, edit todo form popup, add project form popup, edit project form popup, and add note form popup. It provides a convenient way for users to interact with forms within a popup context.

- `project.js`: An Immediately Invoked Function Expression (IIFE) responsible for storing and retrieving all the todos and projects. It manages the sorting of todos based on time and priority, ensuring an organized display of tasks.

- `search.js`: Filters the todos, projects, and notes based on the search query provided by the user. It displays only the items that match the search query and highlights the matching text, enhancing search functionality and user experience.

- `sidebar.js`: Renders the sidebar on the left side of the screen, facilitating navigation and providing access to different pages. It handles the functionality for maximizing and minimizing the sidebar, dynamically adjusting the page content and footer width accordingly.

- `storage.js`: Provides functionality to retrieve and store notes, projects, and todos in the local storage. It checks for the existence and availability of local storage, ensuring smooth data management within the application.