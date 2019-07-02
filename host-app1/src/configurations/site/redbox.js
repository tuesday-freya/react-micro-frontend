export const config = {
    name: 'redbox',
    templates: [
        {
            type: 'search',
            productLine: 'movies',
            plugin: 'components/layout-one/layout-one.template',
            zones: [
                {
                    isMicroApp: true,
                    zone: 'movie-list',                    
                    name: 'MovieSearchApp',
                    plugin: '/micro-apps/redbox/search/static/js/redbox-search-micro-app.js',
                    props: {

                    }
                },
                {
                    isMicroApp: true,
                    zone: 'movie-details',
                    name: 'MovieDetailsApp',
                    plugin: '/micro-apps/redbox/details/static/js/redbox-details-micro-app.js',
                    props: {
                        
                    }
                }
            ]
        }
    ]
}