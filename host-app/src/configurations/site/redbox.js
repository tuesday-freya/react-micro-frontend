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
                        //path: 'https://micro-app-marketplace.netlify.com/content/micro-apps/search/redbox-search-micro-app.9ce825cf8e68ac5ceaee.js',
                        path: 'https://micro-app-marketplace.netlify.com/content/micro-apps/search/',
                        manifest: 'asset-manifest.json',
                        entry: 'main.js',
                        isMicroApp: true,
                        props: {

                        }
                    },
                },
                {
                    alias: 'movie-details',
                    plugin: {
                        name: 'MovieDetailsApp',
                        // path: 'https://micro-app-marketplace.netlify.com/content/micro-apps/details/redbox-details-micro-app.d8ef60fae4c8e4b1ab4f.js',
                        path: 'https://micro-app-marketplace.netlify.com/content/micro-apps/details/',
                        manifest: 'asset-manifest.json',
                        entry: 'main.js',
                        isMicroApp: true,
                        props: {

                        }
                    },
                }
            ]
        }
    ]
}