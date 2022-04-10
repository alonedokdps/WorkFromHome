import "./App.css";
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import Landing from "./components/Layout/Landing";
import AuthContextProvider from "./context/AuthContext";
import Auth from "./view/Auth";
import Dashboard from "./view/Dashboard";
function App() {
  return (
    <AuthContextProvider>
      <Router>
        <Switch>
          <Route exact path="/" component={Landing} />
          <Route
            path="/login"
            render={(props) => <Auth {...props} authRoute="login" />}
          />
          <Route
            path="/register"
            render={(props) => <Auth {...props} authRoute="register" />}
          />
          <Route exact path="/dashboard" component={Dashboard} />
        </Switch>
      </Router>
    </AuthContextProvider>
  );
}

export default App;
