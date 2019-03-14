import React from 'react'
import {render} from 'react-dom'

import PureComponent from "../../src/components/PureComponent";
import XenaGeneSetApp from "../../src/components/XenaGeneSetApp";
import {Helmet} from "react-helmet";
import ReactGA from 'react-ga';


function initializeReactGA() {
    ReactGA.initialize('UA-136203053-1');
    ReactGA.pageview('/');
}

class Demo extends PureComponent {


    render() {

        if (!process.env.NODE_ENV || process.env.NODE_ENV === 'development') {
            console.log('Xena Gene Set Viewer Dev environment')
        } else {
            // production code
            console.log('Xena Gene Set Viewer Initialized')
            initializeReactGA();
        }

        return (
            <div>
                <Helmet>
                    <title>Xena Gene Set Viewer</title>
                    <meta name="description" content="Xena Gene Set Viewer" />
                </Helmet>
                <XenaGeneSetApp/>
            </div>)
    }

}

render(<Demo/>, document.querySelector('#demo'));
