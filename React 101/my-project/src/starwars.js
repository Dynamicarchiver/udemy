import React from 'react';


class AffiliationsRow extends React.Component{
    render() {
        return (
            <li >{this.props.name}</li>
        )
    }
}

class StarWars extends React.Component {
  constructor() {
    super();
    this.state = {
        name: "Boluwatife",
        height: 172,
        gender: "male",
        homeworld: "Lagos",
        image: "image1",
        imageName: "image1",
        species: "human",
        loadedCharacter: false,
        affiliations: []
    }
  }

  getNewCharacter() {
    const randomNumber = Math.ceil(Math.random() * 88)
    fetch(`https://akabab.github.io/starwars-api/api/id/${randomNumber}.json`)
    .then(response => response.json())
    .then(data => {
        this.setState({
            name: data.name,
            height: data.height,
            gender: data.gender,
            homeworld: data.homeworld,
            image: data.image,
            species: data.species,
            loadedCharacter: true, 
            imageName : `${data.name} image`,
            affiliations: data.affiliations
        })
    });
  }
  render() {
    const affiliations = this.state.affiliations.map((name, i) => {
        return (
            <AffiliationsRow key={i} name={name} />
        );
    })
    return (
      <div>
        {this.state.loadedCharacter && (
          <div>
            <img src={this.state.image} alt={this.state.imageName} />
            <h1>{this.state.name}</h1>
            <h3 className='title'> Height: </h3><p>{this.state.height}</p>
            <h3 className='title'>Gender: </h3><p>{this.state.gender}</p>
            <h3 className='title'>Homeworld: </h3> <p>{this.state.homeworld}</p>
            <h3 className='title'>Species: </h3><p>{this.state.species}</p>
            <h3>Affiliations</h3>
            <ul>{affiliations}</ul>
          </div>
        )}
        <button onClick={() => this.getNewCharacter()}>
          Randomize Character
        </button>
      </div>
    );
  }
}


export default StarWars;