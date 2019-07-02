import React from 'react';
import ReactDOM from 'react-dom';
import MovieDetailsComponent from './components/movie-details/movie-details.component';

window.MovieDetailsApp = {
    mount: (props, container) => {
        ReactDOM.render(<MovieDetailsComponent {...props} />, container);
    },
    unmount: (container) => {
        ReactDOM.unmountComponentAtNode(container);
    }
}