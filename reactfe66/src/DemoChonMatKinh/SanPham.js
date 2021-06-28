import React, { Component } from 'react'

export default class SanPham extends Component {
    render() {
        let {sp} = this.props;
        return (
                <img src={sp.img} alt="" onClick={()=>{this.props.xemChiTiet(sp)}}/>
        )
    }
}
