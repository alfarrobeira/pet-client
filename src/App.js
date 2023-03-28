import { Routes, Route, Link } from "react-router-dom";
import PetTypesList from "./components/PetTypesList";
import PetsPerTypeList from "./components/PetsPerTypeList";
import PetCard from "./components/PetCard";
import "./App.css";

const App = () => {
  return (
    <div className="App">
      <nav>
        <Link className="link" to="/">Home</Link>&nbsp;
        <Link className="link" to="/pets">Pets</Link>
      </nav>
      <div>
        <h2>Adopt a pet!</h2>
      </div>
      <div className="block">
        <Routes>
          <Route path="/" element={<h1>HOME</h1>} />
          <Route path="pets" element={ <PetTypesList /> } />
          <Route path="pets/:type" element={ <PetsPerTypeList /> } />
          <Route path="pets/:type/:id" element={ <PetCard /> } />
        
          {/* xxx why do the nested routes not work? */}
          {/* <Route path="/pets" element={ <PetTypesList /> } >
              <Route path=":type" element={ <PetsPerTypeList /> } >
              <Route path=":id" element={ <PetCard /> } />
            </Route>
          </Route> */}
        </Routes>
      </div>
    </div>
  );
};

export default App;
