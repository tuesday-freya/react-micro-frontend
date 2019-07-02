import React, {PureComponent} from 'react';
import { object, string } from 'prop-types'
import TemplateLoaderComponent from '../template-loader/template-loader.component';

class MovieListZone extends PureComponent {

    // static propTypes = {
    //     config: object.isRequired,
    //     search: string
    // }

    render() {

        // console.log('internal movie list props');
        // console.log(this.props);

        return <TemplateLoaderComponent {...this.props} zone='movie-list'  />
    }
}

export default MovieListZone;