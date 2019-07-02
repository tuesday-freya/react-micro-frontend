import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Zone from '../../components/zone/zone.component'; 
import MicroAppLoader from '../micro-app-loader/micro-app-loader';

/**
 * The template loader component is responsible for retrieving
 * a template from redux that matches the specfied route.
 */
class TemplateLoaderComponent extends Component{

    render() {

        // Reference the route params.
        const { match: { params }, zone } = this.props;

        // Retrieve the name of the product line from the route.
        var productLineName = params.productLine;

        // Retrieve the name of the template from the route. 
        var templateName = params.page === undefined ? 'default' : params.page;

        // Lookup the template configuration in redux.
        // 
        // Zone is an optional value that may be present in props. Zone is used to 
        // identify the location (zone) within a template that will recieve the hot loaded
        // component or micro-app. When loading the root page, zone will not be present.
        var templateConfig = this.templateConfig(templateName, productLineName, zone);

        let Placeholder;

        if(templateConfig.isMicroApp) {

            // Hot load the micro-app into the placeholder.
            Placeholder = <MicroAppLoader {...this.props} config={templateConfig} />
        } else{

            // Hot load the component into the placeholder.
            Placeholder = <Zone {...this.props} config={templateConfig} />
        }

        return Placeholder;
    }

    templateConfig(pageType, productLineName, zone) {

        // Attempt the retrieve the templates configuration by product line and page name.
        var config = this.props.siteTemplates.templates.find(page => { return page.productLine === productLineName && page.type === pageType });

        if (config === undefined) {

            // Attempt to retrieve the templates configuration by page name.
            config = this.props.siteTemplates.templates.find(page => { return page.productLine === undefined && page.type === pageType });
        }

        if( zone !== null) {

            // Retrieve the templates configuration from the page zones.
            config = config.zones.find(obj => { return obj.zone === zone });
        } 

        return config;
    }
 }

 const mapStateToProps = (state) => {

    const design = state;

    return {
        siteTemplates: design.siteTemplates
    };
 }

 TemplateLoaderComponent.propTypes = {
    zone: PropTypes.string
  };
  
  TemplateLoaderComponent.defaultProps = {
    zone: null
  };

 export default connect(mapStateToProps, null)(TemplateLoaderComponent);