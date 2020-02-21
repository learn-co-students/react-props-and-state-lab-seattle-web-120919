import React from 'react'

import Pet from './Pet'

class PetBrowser extends React.Component {
  render() {
    return
    this.props.pets.map(pet => {
      return (
      <div key={pet.id} className="ui cards">
        <Pet pet={pet}/> //pet passed to class Pet as props
      </div>
      )
    })
  }
}

export default PetBrowser
