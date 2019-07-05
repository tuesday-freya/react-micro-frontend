import React, { Component } from 'react';
import Script from 'react-load-script';

const getScriptUrl = async (url, entryFile) => {
    const manifestInfo = await fetch(url);
    const json = await manifestInfo.json();

    return json[entryFile];
}

/**
 * The MicroAppLoader component is responsible for injecting a
 * micro-app and its bundle. It also insures the bundle is only 
 * loaded once if the micro-app is referenced in the host multiple times.
 */
class MicroAppLoader extends Component {

    constructor(props) {
        super(props);
        this.placeholder = React.createRef();
        this.state = {
            scriptUrl: '',
            loaded: false,
            mounted: false,
        };

        this.handleScriptCreate = this.handleScriptCreate.bind(this);
        this.handleScriptError = this.handleScriptError.bind(this);
        this.handleScriptLoad = this.handleScriptLoad.bind(this);
    }

    componentDidMount() {
        // Check to see if bundle for this micro-app has already been injected.
        const { plugin } = this.props.config;
        const manifestUrl = `${plugin.path}${plugin.manifest}`;

        getScriptUrl(manifestUrl, plugin.entry).then(fileName => {
            this.setState({scriptUrl: `${plugin.path}${fileName}`});
        });
    }

    componentDidUpdate(prevProps) {
        if (!this.state.mounted && this.state.loaded) {
            // mount the microapp
            window[this.props.config.plugin.name].mount(this.props, this.placeholder.current);
            this.setState({ mounted: true });
        }

        if(this.state.mounted && prevProps !== this.props) {
            // Update the micro app with new props.
            window[this.props.config.plugin.name].mount(this.props, this.placeholder.current);
        }
    }

    componentWillUnmount(){
        // Destroy the micro app.
        window[this.props.config.plugin.name].unmount(this.placeholder.current);
    }

    handleScriptCreate() {
        console.log(`script ${this.props.config.plugin.path} created`);
    }

    handleScriptError() {
        console.log(`script ${this.props.config.plugin.path} failed to load`);
    }   
       
    handleScriptLoad() {
        this.setState({ loaded: true });

        console.log(`script ${this.props.config.plugin.path} loaded`);

        if (window[this.props.config.plugin.name] !== undefined) {
            // Render the micro app with props.
            window[this.props.config.plugin.name].mount(this.props, this.placeholder.current);
        } else {
            throw Error(`Unable to mount micro-app ${this.props.config.plugin.name}, window.${this.props.config.plugin.name} is not defined`)
        }
    }

    render() {

        let script = null;
        const { loaded, scriptUrl } = this.state;

        return  (
            <div style={{width: '100%'}}>
                {script}
                {!loaded && scriptUrl && (
                    <Script 
                        url={scriptUrl}
                        onCreate={this.handleScriptCreate}
                        onError={this.handleScriptError}
                        onLoad={this.handleScriptLoad} />
                )}
                <div style={{height: '100%'}} ref={this.placeholder}></div>
            </div>)
    }
}

export default MicroAppLoader;