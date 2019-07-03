export const config = {
    name: 'redbox',
    templates: [
        {
            alias: 'search',
            productLine: 'movies',
            plugin: {
                path: 'components/layout-one/layout-one.template'
            },
            zones: [
                {
                    alias: 'movie-list',
                    plugin: {
                        name: 'MovieSearchApp',
                        path: '/micro-apps/redbox/search/static/js/redbox-search-micro-app.js',
                        isMicroApp: true,
                        props: {

                        }
                    },
                },
                {
                    alias: 'movie-details',
                    plugin: {
                        name: 'MovieDetailsApp',
                        path: '/micro-apps/redbox/details/static/js/redbox-details-micro-app.js',
                        isMicroApp: true,
                        props: {

                        }
                    },
                }
            ]
        }
    ]
}