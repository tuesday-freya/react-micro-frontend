import React, { Component } from 'react';
import axios from 'axios';

class MovieListComponent extends Component {

  constructor( props ){
    super( props );
    this.state = {
      selectedMovie: undefined,
      movies: undefined
    }
  }

  componentDidMount() {

    this.searchMovies(this.props.search);
  }

  componentDidUpdate(prevProps) {

    if(prevProps.search !== this.props.search) {
      this.searchMovies(this.props.search);
    }
  }

  searchMovies(searchTerm) {

    if ( searchTerm !== undefined && searchTerm !== null) {

      axios.get(`http://www.omdbapi.com/?apikey=81fbe921&type=movie&s=${searchTerm}`)
          .then(res => {
            const movies = res.data;
            this.setState({ movies });

            if(this.state.selectedMovie !== undefined && this.state.selectedMovie !== null) {

              console.log(`Deselecting video [${this.state.selectedMovie.Title}]`);
              this.selectionChanged(null)
            }
            
        })
    }
  }

  selectionChanged = (movie) => {

    this.setState({ selectedMovie: movie });

    const { onSelectionChange } = this.props;    
    onSelectionChange(movie);
  }

  renderMoviePods() {

    const { movies, selectedMovie } = this.state;
    var pods = null;

    if(movies !== undefined && movies.Search !== undefined) {

      pods = movies.Search.map((movie, i) => {

        return (<div key={i} style={{display: 'flex', flexDirection: 'column', height: '100%', margin: selectedMovie != null ? '5px' : '0px', marginRight: '10px'}} onClick={() => this.selectionChanged(movie)}>
                  <img src={movie.Poster} alt={movie.Title} style={{width: selectedMovie != null ? '175px' : '230px'}}/>
                </div>);
      })
    }
    
    return pods;
  }

  renderHome() {

    return <div style={{display: 'flex', flexDirection: 'column'}}>
                <div style={{display: 'flex', flexDirection: 'column', maxWidth: '1200px', alignSelf: 'center'}}>
                    <span style={{fontSize: '30px', marginBottom: '20px'}}>
                      Movies
                    </span>

                    <img style={{alignSelf: 'center', marginBottom: '40px', width: '100%', height: 'auto'}} src='https://www.redbox.com/rbweb/image/creative-services/sliders/2019/july/FBCG-D' alt='ad'/>

                    <span style={{fontSize: '45px', marginBottom: '20px', alignSelf: 'center'}}>
                      Search for your favorite titles!
                    </span>
                </div>
             </div>
  }

  render() {

    const { movies, selectedMovie } = this.state;
    
    if(movies !== undefined) {

      if(movies.Search !== undefined){

        return (

          <div style={{display: 'flex', flexDirection: 'column'}}>
    
            <div style={{display: 'flex', flexDirection: 'column', maxWidth: '1200px', alignSelf: 'center', flex: '1 1 auto', width: 'auto'}}>
    
              <span style={{fontSize: '20px', marginBottom: '10px'}}>
                <b>Most Popular DVD & Blu-ray</b>
              </span>
    
              <div style={{display: 'flex', flexDirection: 'row', flexWrap: selectedMovie != null ? 'nowrap' : 'wrap', height: '100%', overflow: 'auto'}}>
                {this.renderMoviePods()}
              </div>
            </div>
          </div>
        );
      }
    }

    return this.renderHome();
  }
}

MovieListComponent.defaultProps = {
  onSelectionChange: () => { }
};

export default MovieListComponent;
