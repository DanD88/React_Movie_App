import React, { useState } from "react";
import axios from "axios";
import Search from "./components/Search";
import Results from "./components/Results";
import Detail from "./components/Detail";
import "./App.css";
  
function App() {
  const [state, setState] = useState({
    s: "",
    results: [],
    selected: {},
  });
  
  const apiurl = "https://www.omdbapi.com/?apikey=d0e49549";
  
  const searchInput = (e) => {
    let s = e.target.value;
  
    setState((prevState) => {
      return { ...prevState, s: s };
    });
  };
  
  const search = (e) => {
    if (e.key === "Enter") {
      axios(apiurl + "&s=" + state.s).then(({ data }) => {
        let results = data.Search;
  
        console.log(results);
  
        setState((prevState) => {
          return { ...prevState, results: results };
        });
      });
    }
  };
  
  const openDetail = (id) => {
    axios(apiurl + "&i=" + id).then(({ data }) => {
      let result = data;
  
      setState((prevState) => {
        return { ...prevState, selected: result };
      });
    });
  };
  
  const closeDetail = () => {
    setState((prevState) => {
      return { ...prevState, selected: {} };
    });
  };
  
  return (
    <div className="App">
      <header className="App-header">
        <h1>Movie Madness</h1>
      </header>
      <main>
        <Search searchInput={searchInput} search={search} />
  
        <Results results={state.results} openDetail={openDetail} />
  
        {typeof state.selected.Title != "undefined" ? (
          <Detail selected={state.selected} closeDetail={closeDetail} />
        ) : (
          false
        )}
      </main>
      <section className="footer">
        <span>
         
        </span>
      </section>
    </div>
  );
}
  
export default App;