import React, { Component } from 'react';
import store from '../../redux/store';
import { loadSite } from '../../redux/actions/core.actions';
import TemplateLoaderComponent from '../../components/template-loader/template-loader.component'

/**
 * The site container component is responsible for retrieving the sites configuration
 * that contains information on which micro-apps to use in the page templates.
 */
class SiteContainer extends Component{

    render() {

        // Reference the route params.
        const { match: { params } } = this.props;

        // Retrieve the name of the site from the route, default if not found.
        var siteName = params.site === undefined ? 'default' : params.site;

        // Store the configuration in redux.
        this.loadSiteConfig(siteName);
            
        return  <TemplateLoaderComponent {...this.props} />
    }

    loadSiteConfig(siteName) {

        // Lookup the site configuration in redux.
        var site = store.getState().siteTemplates;

        // Verify we found the site configuration.
        if(site === undefined || site.name !== siteName) {
    
            // The site has not been loaded yet, import the configuration.
            const promise = import(`../../configurations/site/${siteName}.js`).then(
                result => 
                { 
                    // Store the site configuration in redux.
                    store.dispatch(loadSite(result.config));
                }
            )

            throw promise;
        }
    }
 }

 export default(SiteContainer);