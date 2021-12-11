import "./App.css";
import "./index.css";
import "./style.css";
import Landing from "./pages/Landing";
import NoMatch from "./pages/NoMatch";
import { BrowserRouter,Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter basename='/'>
      {/* <Route path='*' component={NoMatch} /> */}
      <Route path='/' exact component={Landing} />
    </BrowserRouter>
  );
}

export default App;
