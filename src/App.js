import "./App.css";
import { useContext, createContext, useState } from "react";
import { Route, Routes, Link } from "react-router-dom";
import ProtectedRoute from "./components/ProtectedRoute";
import { TodoApp, LoginApp, HomePage } from "./pages";

export const UserContext = createContext(null);
function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  return (
    <div className="App">
      <UserContext.Provider value={{ isAuthenticated, setIsAuthenticated }}>
        {/* <LoginApp/>
     <TodoApp/> */}
        {navbar()}
        <Routes>
          <Route path="/home" element={<HomePage />} />
          <Route path="/login" element={<LoginApp />} />
          <Route path="/todo" element={<ProtectedRoute />}>
            <Route path="/todo" element={<TodoApp />} />
          </Route>
        </Routes>
      </UserContext.Provider>
    </div>
  );
}

function navbar() {
  return (
    <navbar>
      <ul>
        <li>
          <Link to="/to">Todo App</Link>{" "}
        </li>
        <li>
          <Link to="/home">Home Page</Link>{" "}
        </li>
      </ul>
    </navbar>
  );
}

export default App;
