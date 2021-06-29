import React, { Component } from 'react'
import SanPham from './SanPham'
import Chitiet from './Chitiet'
import './DemoChonXe.css'
export default class DemoChonXe extends Component {
    ArrSP = [
        {id:1, name: 'Black Car', img:'./img/CarBasic/products/black-car.jpg', price:200000},
        {id:2, name: 'Red Car', img:'./img/CarBasic/products/red-car.jpg', price:300000},
        {id:3, name: 'Silver Car', img:'./img/CarBasic/products/silver-car.jpg', price:350000},
        {id:4, name: 'Steel Car', img:'./img/CarBasic/products/steel-car.jpg', price:400000}
    ]
    state = {
        sanPhamChiTiet :{}    
        }
    renderSP =()=>{
        return this.ArrSP.map((sanPham,index) => {
            return <div className="model-car col-3" style={{ cursor: 'pointer' }} key={index}>
            
    
            <SanPham sp={sanPham} xemChiTiet={this.xemChiTiet}/>
            </div>
        })
    }
    xemChiTiet = (sanPhamDuocClick) => {
        console.log('sanPhamDuocClick: ', sanPhamDuocClick);
        this.setState({
            sanPhamChiTiet: sanPhamDuocClick
        })
    }
    render() {      
        return (
            <div className="container">
            <Chitiet sp={this.state.sanPhamChiTiet} />
                <h3>Danh sách sản phẩm</h3>
                <div className="row">
                    {this.renderSP()}
                </div>
            </div>
        )
    }
}
