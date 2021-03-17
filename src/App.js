import CssBaseline from "@material-ui/core/CssBaseline";
import { Route } from "react-router-dom";
import "./App.css";
import Home from "./components";
import Resume from "./components/Resume";

function App() {
  return (
    <>
      <CssBaseline />
      <Route exact pathe="/" component={Home} />
      <Route pathe="/resume" component={Resume} />
    </>
  );
}

export default App;
