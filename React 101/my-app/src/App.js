import './App.css';
import React from 'react';
// import Item from './MyItem';
// import Click from './click';
// import StateCom from './state';


class FilmItemRow extends React.Component {

  render() {
    return(
      <li>
        <a href={this.props.url}>{this.props.url}</a>
      </li>
    )
  }
}

class StarWars extends React.Component {
  constructor(){
    super()
    this.state = {
      loadedCharacter: false,
      name: null,
      height: null,
      homeworld: null,
      films: [],
    }
  }
  setNewCharacter() {
    console.log("Get New character");
    const randomNumber = Math.ceil(Math.random() * 82)
    const url = `https://swapi.dev/api/people/${randomNumber}`;
    fetch(url)
      .then(response => response.json())
      .then(data => {
 this.setState({
   loadedCharacter: true,
   name: data.name,
   height: data.height,
   homeworld: data.homeworld,
   films: data.films,
 });
      });
    
     
  }

  render() {
    const movies = this.state.films.map((url, i) => {
      return <FilmItemRow key={i} url={url} />
    })
    return (
      <div>
        {this.state.loadedCharacter && (
          <div>
            <h1>{this.state.name} </h1>
            <p>{this.state.height}</p>
            <p><a href={this.state.homeworld} > HomeWorld </a> </p>
            <ul>
              {movies}
            </ul>
          </div>
        )}

        <button
          type="button"
          onClick={() => this.setNewCharacter()}
          className="btn"
        >
          Randomize Character
        </button>
      </div>
    );
  }
}



function App() {
  return (
    <div className="App">
      <header className="App-header">
       <StarWars />
      </header>
    </div>
  );
}

export default App;
