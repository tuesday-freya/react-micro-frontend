import React, { Component } from 'react';
import axios from 'axios';
import { object,string } from 'prop-types'

class MovieDetailsComponent extends Component {

  constructor( props ){
    super( props );
    this.state = {
      movie: undefined
    }
  }

  static propTypes = {
    config: object.isRequired,
    selectedVideo: string
  }

  componentDidUpdate(prevProps, prevState) {

    if (prevProps.selectedVideo !== this.props.selectedVideo) {
     
      const { selectedVideo } = this.props;

      console.log('selectedVideo');
      console.log(selectedVideo);

      if(selectedVideo !== undefined && selectedVideo !== null) {

        axios.get(`http://www.omdbapi.com/?apikey=81fbe921&type=movie&i=${selectedVideo.imdbID}`)
          .then(res => {
            const movie = res.data;
            this.setState({ movie });
        })
      } else {

        this.setState({ movie: undefined });
      }
    }
  }

  render() {

    const { movie } = this.state;

    if(movie !== undefined && movie !== null) {

      return (
              <div style={{display: 'flex', flexDirection: 'column'}}>

                <div style={{display: 'flex', flexDirection: 'row', height: '100%', alignSelf: 'center', maxWidth: '1200px'}}>

                  <div style={{display: 'flex', flexDirection: 'column', height: '100%'}}>
                    <img src={movie.Poster} alt={movie.Title} style={{marginBottom: '10px'}} />
                    <span style={{alignSelf: 'center'}}>Rated {movie.imdbRating}/10</span>
                  </div>

                  <div style={{marginLeft: '30px', display: 'flex', flexDirection: 'column'}}>
                    <span style={{fontSize: '30px', marginRight: '5px'}}>
                      <b>{movie.Title}</b>
                    </span>
                    <div>
                      <span style={{marginRight: '20px'}}>
                        {movie.Rated} | {movie.Year} | {movie.Runtime}
                      </span>
                    </div>
                    <span style={{marginTop: '20px'}}>
                      <b>Summary</b>
                    </span>
                    <span>
                      {movie.Plot}
                    </span>
                    <span style={{marginTop: '20px'}}>
                      <b>Genre</b>
                    </span>
                    <span>
                      {movie.Genre}
                    </span>
                    <span style={{marginTop: '20px'}}>
                      <b>Actors</b>
                    </span>
                    <span>
                      {movie.Actors}
                    </span>
                    <span style={{marginTop: '20px'}}>
                      <b>Directors</b>
                    </span>
                    <span>
                      {movie.Director}
                    </span>
                  </div>

                </div>
                
              </div>)
    } else {

      return null;
    }
  }
}

export default MovieDetailsComponent;
