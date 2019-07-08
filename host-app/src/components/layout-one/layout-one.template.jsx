import React, { Component } from 'react';
import { object } from 'prop-types'

import MovieListZone from '../movie-list/movie-list.component';
import MovieDetailsZone from '../movie-details/movie-details.component';

class LayoutOneTemplate extends Component {

  static propTypes = {
    config: object.isRequired
  }

  state = {
    searchTerm: '',
    selectedVideo: undefined
  }

  onSearchTermChange = ({ target }) => this.setState({ searchTerm: target.value });
  
  onSelectionChange = selectedVideo => this.setState({ selectedVideo });

  render() {

    const { searchTerm, selectedVideo } = this.state;
    
    return (

      <div>
        <div className='layout-one'>

          <div className='layout-one-header'>
            
            <div className='layout-one-header-body' style={{backgroundImage: `url(${'/images/redbox.jpeg'}`}}>

            <div className='movie-search-container'>
              <input className='movie-search-field' value={searchTerm} placeholder='Search movie title...' onChange={this.onSearchTermChange}/>  
            </div>

            </div>
            
          </div>

          <div className='movie-container'>

            <div className='movie-details-zone'>
              <MovieDetailsZone {...this.props} selectedVideo={selectedVideo}/>
            </div>

            <div className='movie-list-zone'>
              <MovieListZone {...this.props} search={searchTerm} onSelectionChange={this.onSelectionChange}/>
            </div>

          </div>
        </div>
      </div>
    );
  }
}

export default LayoutOneTemplate;
