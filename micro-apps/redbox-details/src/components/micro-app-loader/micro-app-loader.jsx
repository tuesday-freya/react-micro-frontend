import React, {PureComponent} from 'react';
import Script from 'react-load-script'

/**
 * The MicroAppLoader component is responsible for injecting a
 * micro-app and its bundle. It also insures the bundle is only 
 * loaded once if the micro-app is referenced in the host multiple times.
 */
class MicroAppLoader extends PureComponent {

    // Create a placeholder to mount and unmount the micro app.
    placeholder = React.createRef();

    componentDidMount() {
        
        // Check to see if bundle for this micro-app has already been injected.
        if(window.loadedScripts !== undefined) {

            if(window[this.props.config.plugin.name] !== undefined && window.loadedScripts.indexOf(this.props.config.plugin.path) > -1) {

                // Render the micro app with props.
                window[this.props.config.plugin.name].mount(this.props, this.placeholder.current);
            }
        }
    }

    componentDidUpdate(prevProps) {

        if(prevProps !== this.props){

            // Update the micro app with new props.
            window[this.props.config.plugin.name].mount(this.props, this.placeholder.current);
        }
    }

    componentWillUnmount(){

        // Destroy the micro app.
        window[this.props.config.plugin.name].unmount(this.placeholder.current);
    }

    handleScriptCreate() {
        console.log(`script ${this.props.config.plugin.path} created`)
      }

      handleScriptError() {
        console.log(`script ${this.props.config.plugin.path} failed to load`)
      }
       
      handleScriptLoad() {

        // Verify script collection has been instantiated.
        if (window.loadedScripts === undefined) {
            window.loadedScripts = [];
        }

        // Add the new script to the collection.
        window.loadedScripts.push(this.props.config.plugin);

        console.log(`script ${this.props.config.plugin.path} loaded`)

        if (window[this.props.config.plugin.name] !== undefined) {

            // Render the micro app with props.
            window[this.props.config.plugin.name].mount(this.props, this.placeholder.current);
        } else {

            throw Error(`Unable to mount micro-app ${this.props.config.plugin.name}, window.${this.props.config.plugin.name} is not defined`)
        }
      }

    render() {

        let script;

        // Inject the bundle with a script tag.
        if(window.loadedScripts === undefined || window.loadedScripts.indexOf(this.props.config.plugin.path) === -1) {
            script = <Script url={this.props.config.plugin.path}
                             onCreate={this.handleScriptCreate.bind(this)}
                             onError={this.handleScriptError.bind(this)}
                             onLoad={this.handleScriptLoad.bind(this)} />
        } else{

            script = null;
        }

        return <div style={{width: '100%'}}>
                    {script}
                    <div style={{height: '100%'}} ref={this.placeholder}></div>
                </div>
    }
}

export default MicroAppLoader;