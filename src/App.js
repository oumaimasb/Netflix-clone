import "./App.scss";
import Nav from "./Components/Nav";
import Banner from "./Components/Banner";
import Rows from "./Components/Rows";
import Footer from "./Components/Footer";
import requests from "./Config/Requests";
import Video from "./Components/Video";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/">
            <Nav />
            <Banner />
            <Rows
              title="Tendances actuelles"
              fetchUrl={requests.fetchTrending}
              isPoster={true}
            />
            <Rows
              title="Programmes originaux Netflix"
              fetchUrl={requests.fetchNetflixOriginals}
            />

            <Rows title="Films comédie" fetchUrl={requests.fetchComedyMovies} />
            <Rows
              title="Films d'action"
              fetchUrl={requests.fetchActionMovies}
            />
            <Rows
              title="Films d'horreur"
              fetchUrl={requests.fetchHorrorMovies}
            />
            <Rows
              title="Films romantique"
              fetchUrl={requests.fetchRomanceMovies}
            />

            <Footer />
          </Route>
          <Route path="/video/:id" component={Video} />
          <Route path="*">
            <Redirect to="/" />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
