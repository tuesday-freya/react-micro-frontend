import React, { Component } from 'react';
import { object } from 'prop-types'
import universal from 'react-universal-component'

class ZoneComponent extends Component{

    static propTypes = {
        config: object.isRequired
    }

    render() {
    
        let Component = null;

        const { config } = this.props;

        if(config != null && config.plugin != null) {

            Component = universal(import(`../../${config.plugin.path}`));

            return <Component {...this.props} {...config.props} config={config}/>
        }

       return null;
    }
 }

 export default(ZoneComponent);