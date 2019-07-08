import React, {PureComponent} from 'react';
import TemplateLoaderComponent from '../template-loader/template-loader.component';

class MovieListZone extends PureComponent {

    render() {

        return <TemplateLoaderComponent {...this.props} zone='movie-list'  />
    }
}

export default MovieListZone;