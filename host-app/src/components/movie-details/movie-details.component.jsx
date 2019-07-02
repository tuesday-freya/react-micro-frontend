import React, {PureComponent} from 'react';
import TemplateLoaderComponent from '../template-loader/template-loader.component';

class MovieDetailsZone extends PureComponent {

    render() {

        return <TemplateLoaderComponent {...this.props} zone='movie-details'/>
    }
}

export default MovieDetailsZone;