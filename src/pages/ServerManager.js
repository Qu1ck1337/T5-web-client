import React, {Component} from 'react';
import SMmeta from './SMmeta.js';
import SMMain from './SMMain.js';
import { Route, Router, Routes } from 'react-router-dom';
export default class ServerManager extends Component{
    render(){
        return(
            <>
                <SMmeta />
                <SMMain />
            </>
        )
    }
}