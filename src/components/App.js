import React from 'react'

import Filters from './Filters'
import PetBrowser from './PetBrowser'

// const endpoint = '/api/pets';

class App extends React.Component {
  state = {
      pets: [],
      filters: {
        type: 'all'
      }
  }


  onChangeType = e => {
    console.log('onChangeType fires') //recognize dropdown menu change
    console.log(e.target.value)
    console.log(this.state.filters) //previous value
    this.setState({
      filters: {...this.state.filters, type: e.target.value}
    });
    // () => console.log(this.state.filters) //changed value
  };

  onFindPetsClick = () => {
    let endpoint = '/api/pets';
    if (this.state.filters.type !== "all"){
      //string interpolate for variable
      endpoint += `?type=${this.state.filters.type}`
    }
    fetch(endpoint)
      .then(res=> res.json())
      .then(res=>this.setState({pets: res}))
      .catch(err=>console.log(err))
  }

  onAdoptPet = (petId) => {
    console.log(petId);
    const pets = this.state.pets.map(pet => {
      if(pet.id === petId) {
        return (pet.isAdopted = true);
      } return pet
    })
  }

  render() {
    return (
      <div className="ui container">
        <header>
          <h1 className="ui dividing header">React Animal Shelter</h1>
        </header>
        <div className="ui container">
          <div className="ui grid">
            <div className="four wide column">
              <Filters onChangeType={this.onChangeType} 
                        onFindPetsClick={this.onFindPetsClick}/>
            </div>
            <div className="twelve wide column">
              <PetBrowser onAdoptPet={this.onAdoptPet}
                          pets={this.state.pets}/>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default App
