import "./App.scss";
import Nav from "./Components/Nav";
import Banner from "./Components/Banner";
import Rows from "./Components/Rows";
import Footer from "./Components/Footer";
import requests from "./Config/Requests";

function App() {
  return (
    <div className="App">
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
      <Rows title="Films d'action" fetchUrl={requests.fetchActionMovies} />
      <Rows title="Films d'horreur" fetchUrl={requests.fetchHorrorMovies} />
      <Rows title="Films romantique" fetchUrl={requests.fetchRomanceMovies} />

      {/*videos */}

      {/*quick views */}

      <Footer />
    </div>
  );
}

export default App;
