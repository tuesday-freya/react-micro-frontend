import React from 'react';
import ReactDOM from 'react-dom';
import MovieDetailsComponent from './components/movie-details/movie-details.component';
//import TemplateLoaderComponent from './components/template-loader/template-loader.component';

window.MovieDetailsApp = {
    mount: (props, container) => { console.log(props)
        ReactDOM.render(<MovieDetailsComponent {...props} />, container);
    },
    unmount: (container) => {
        ReactDOM.unmountComponentAtNode(container);
    }
}

// window.MovieDetailsApp = {
//     mount: (props, container) => {
//         ReactDOM.render(<TemplateLoaderComponent {...props} />, container);
//     },
//     unmount: (container) => {
//         ReactDOM.unmountComponentAtNode(container);
//     }
// }