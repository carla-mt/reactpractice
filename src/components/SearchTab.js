import React, { Component } from 'react';

class SearchTab extends Component {
  render() {
    const { searchTerm, handleChange, handleSubmit } = this.props;
    return (
      <div className="box">
        <div className="button">
          <h1>github search</h1>
          <input type="text" value={searchTerm} onChange={handleChange} />
          <button className="button search" onClick={handleSubmit}>
            SEARCH
          </button>
        </div>
      </div>
    )
  }
}

export default SearchTab;