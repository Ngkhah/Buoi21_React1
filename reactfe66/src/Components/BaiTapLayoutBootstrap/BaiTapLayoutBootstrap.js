import React, { Component } from 'react';

import './BTBootstraps.css';
import BTHeader from './BTHeader';
import BTBody from './BTBody';
import BTFooter from './BTFooter';
import style from './BaiTapChonXe.module.css'

export default class BaiTapLayoutBootstrap extends Component {
    render() {
        return (
            <div className="container-fluid pl-0 pr-0" >
                <BTHeader />
                <BTBody />
                <BTFooter />
            </div>
        )
    }
}
