import React, { Component } from 'react';
// import logo from '../../logo.svg';
import { object } from 'prop-types'
// import './App.css';

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
        <div style={{display: 'flex', flexDirection: 'column', height: '100%'}}>

          <div style={{borderStyle: 'solid', borderWidth: '1px', borderColor: '#ccc', height: '160px', display: 'flex', flexDirection: 'column', backgroundColor: '#fff', alignItems: 'center'}}>
            <div style={{display: 'flex', flex: '1 1 auto', flexDirection: 'column', alignSelf: 'center', width: '100%', maxWidth: '1200px', backgroundImage: `url(${'/images/redbox.jpeg'}`, backgroundRepeat: 'no-repeat'}}>

            <div style={{display: 'flex', flex: '1 1 auto', flexDirection: 'row', alignSelf: 'center', width: 'auto'}}>
              <input style={{alignSelf: 'center', height: '30px', borderRadius: '15px', borderStyle: 'solid', borderWidth: '1px', borderColor: '#ccc', padding: '6px', outline: 'none', paddingLeft: '20px', paddingRight: '20px'}} value={searchTerm} placeholder='Search movie title...' onChange={this.onSearchTermChange}/>  
            </div>

            </div>
          </div>

          <div style={{display: 'flex', flexDirection: 'column', height: '100%', padding: '30px', color: '#fff'}}>

            <div style={{display: 'flex', flex: '1 1', marginBottom: '30px'}}>
              <MovieDetailsZone {...this.props} selectedVideo={selectedVideo}/>
            </div>

            <div style={{display: 'flex', flex: '0 1 auto', height: '300px'}}>
              <MovieListZone {...this.props} search={searchTerm} onSelectionChange={this.onSelectionChange}/>
            </div>

          </div>
        </div>
      </div>
    );
  }
}

export default LayoutOneTemplate;
