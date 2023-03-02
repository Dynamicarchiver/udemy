import './App.css';
import {useState, useEffect} from 'react'
import { Navbar } from './components/Navbar';
import { Home } from './components/Home';
import { AboutView } from './components/About';
import { Route, Routes } from 'react-router-dom';
import { SearchView } from './components/Search';
import { MovieView } from './components/Movie';
import { Hero } from './components/Hero';


const PageNotFound = () => {
  return (
    <div className="pg_container">
      <Hero text="404, Page not found" />
      <h1 className='pg_text'>OOps Page not found</h1>
    </div>
  );
}

function App() {

  const [searchResults, setSearchResults] = useState([]);
  const [searchText, setSearchText] = useState('');




  useEffect(() => {
    if(searchText) {
      fetch(
        `https://api.themoviedb.org/3/search/movie?api_key=b01ff43f664d21bf218fe98f4cfcd43d&language=en-US&query=${searchText}&page=1&include_adult=false`
      )
        .then((response) => response.json())
        .then((data) => {
          setSearchResults(data.results);
        });
    }
    
  }, [searchText])


  // console.log(searchText, "is the default");
  // setTimeout(() => {
  //   setSearchText("New text");
  //   console.log(searchText, "is the new text")
  // }, 2000)


  return (
    <div>
      <Navbar searchText={searchText} setSearchText={setSearchText} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<AboutView />} />
        <Route
          path="/search"
          element={
            <SearchView keyword={searchText} searchResults={searchResults} />
          }
        />
        <Route
          path="/movies/:id"
          element={
            <MovieView />
          }
        />
        <Route path='*' element={<PageNotFound />}  />
      </Routes>
    </div>
  );
}

export default App;
