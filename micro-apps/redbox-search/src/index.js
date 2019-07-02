import React from 'react';
import ReactDOM from 'react-dom';
import MovieListComponent from './components/movie-list/movie-list.component';

window.MovieSearchApp = {
    mount: (props, container) => {
        ReactDOM.render(<MovieListComponent {...props} />, container);
    },
    unmount: (container) => {
        ReactDOM.unmountComponentAtNode(container);
    }
}