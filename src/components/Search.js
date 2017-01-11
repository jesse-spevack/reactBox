// src/components/Search
import React from 'react';

class Search extends React.Component {

  handleSearch(event) {
    this.props.searchIdeas(event.target.value)
  }

  render() {
    return (
      <div className="row">
        <div className="input-field">
          <label>Search</label>
          <input type="text" onKeyUp={this.handleSearch.bind(this)}/>
        </div>
      </div>
    )
  }
}

export default Search;
