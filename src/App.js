import React from "react"; //React library to create component and use jsx
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"; // include link after routeReact router => * router: wraps the entire app to enable routing *routes A container for all the route def *Route : Defines a single route (URL to component mapping) *Link: Provides navigation link for client side routing, avoiding page reloads
import Home from "./pages/Home"; //Page imports Home, task1 and task2 are components representing different pages of the app.
import Task1 from "./pages/Task1";
import Task2 from "./pages/Task2";
import Task3 from "./pages/Task3";
import State from "./components/Hooks/State";

function App() {
  return (
    <Router>
      {" "}
      {/*Wraps the application, enabling routing functionality*/}
      {/* <nav
        style={{
          padding: "1rem",
          backgroundColor: "white",
          position: "sticky",
          borderBottom: "1px solid #ddd",
        }}
      > */}
      {/* A navigation bar at the top of the page with links to Home, Task 1, and Task 2*
        <Link to="/" style={{ margin: "0 1rem" }}>
          Home
        </Link>{" "}
        {/* to="/": Navigates to the Home page. */}{" "}
      {/*Provides client-side navigation to the defined routes.Prevents the page from refreshing, ensuring smooth navigation. *
        <Link to="/task1" style={{ margin: "0 1rem" }}>
          Task 1
        </Link>{" "}
        {/*to="/task1": Navigates to Task 1 *
        <Link to="/task2" style={{ margin: "0 1rem" }}>
          Task 2
        </Link>{" "}
        {/*to="/task2": Navigates to Task 2. *
        <Link to="/task3" style={{ margin: "0 1rem" }}>
          Task 2
        </Link>{" "}
        {/*to="/task2": Navigates to Task 2. */}
      {/* </nav> */}
      <Routes>
        {" "}
        {/* Container for all route definitions. Ensures only one route is rendered at a time */}
        <Route path="/" element={<Home />} />{" "}
        {/* Maps a URL path to a specific React component (element).*/}
        <Route path="/task1" element={<Task1 />} /> {/* */}
        <Route path="/task2" element={<Task2 />} />
        <Route path="/task3" element={<Task3 />} />State
        <Route path="/hook" element={<State />} />
      </Routes>
    </Router>
  );
}

export default App; //The App component is exported so it can be rendered by the entry point (index.js) of the application.

// //At / (Home):
// The app displays the Home component, and the user can navigate to Task1 or Task2 using the links.
// At /task1:
// The Task1 component is displayed when the user clicks on "Task 1".
// At /task2:
// The Task2 component is displayed when the user clicks on "Task 2".
// The navigation bar remains visible on all pages, allowing users to switch between tasks.
