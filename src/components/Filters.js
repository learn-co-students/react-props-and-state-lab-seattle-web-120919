import React from 'react'

class Filters extends React.Component {
  render() {
    // console.log(this.props)
    return ( //JSX only.  no console.log unless within {}
      <div className="ui form">
        <h3>Animal type</h3>
        <div className="field">
          <select name="type" id="type" 
          value={this.props.filters} //filters.type??? 
          onChange={this.props.handleChangeType}>
            <option value="all">All</option>
            <option value="cat">Cats</option>
            <option value="dog">Dogs</option>
            <option value="micropig">Micropigs</option>
          </select>
        </div>

        <div className="field">
          <button 
          onClick={this.props.onFindPetsClick}
          className="ui secondary button">Find pets</button>
        </div>
      </div>
    )
  }
}

export default Filters
