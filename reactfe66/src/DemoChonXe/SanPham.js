import React, { Component } from 'react'

export default class SanPham extends Component {
    render() {
        let {sp} = this.props;
        return (
            <div className="sanpham">
                <img className="img" src={sp.img} alt="..."/>
                    <h3>{sp.name}</h3>
                    <p>{(sp.price).toLocaleString()} USD</p>
                    <button onClick={()=>{this.props.xemChiTiet(sp)}} data-toggle="modal" data-target="#modelId" className="btn btn-success">Xem chi tiết</button>
            </div>
        )
    }
}
