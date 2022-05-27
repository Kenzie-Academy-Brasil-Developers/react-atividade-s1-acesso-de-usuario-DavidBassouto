import { useState } from "react";
import "./App.css";
import RestrictPage from "./components/RestrictPage";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const user = "David";

  function Login() {
    setIsLoggedIn(true);
  }

  function Logout() {
    setIsLoggedIn(false);
  }
  return (
    <div className="App">
      <div className="App-header">
        <RestrictPage
          isLoggedIn={isLoggedIn}
          user={user}
          Login={Login}
          Logout={Logout}
        />
      </div>
    </div>
  );
}

export default App;
