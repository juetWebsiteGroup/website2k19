import React from 'react'
import ReactDOM from 'react-dom'
import {BrowserRouter as Router} from 'react-router-dom'
import IndexRender from '../main.jsx'
import * as webfont from 'webfontloader'
import window from 'global'
import {Provider} from 'react-redux'
import configureStore from '../redux/configureStore'
import {detect} from 'detect-browser'
import Loadable from 'react-loadable'

webfont.load({
    google:{
        families:['Lato','Dosis','Courgette','Alegreya Sans','Abel','Playfair Display','sans-serif','cursive']
    },
    timeout:2000
    })
    
const state = window.__DATA_FROM_SERVER__;
delete window.__DATA_FROM_SERVER__;

const juetStore = configureStore(state)
const browser = detect();

console.log(browser);
if(browser.name === 'ie')
{
    window.location = "https://www.juet.ac.in"
}

Loadable.preloadReady().then(()=>{
    ReactDOM.hydrate(
        <Provider store={juetStore}>
        <Router>
           <IndexRender />
       </Router>
        </Provider>   
       ,document.getElementById('juetroot'))
})
