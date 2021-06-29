import React, { Component } from 'react'

export default class SanPham extends Component {
    render() {
        let {sp} =this.props;
        
        return (
            
                <div className="card bg-dark text-white" >
                    <img src={sp.hinhAnh} width={330} height={330} className="text-center" alt="..."/>
                    <div className="card-body">
                    <p className="font-weight-bold">{sp.tenSP}</p>
                 <p>{(sp.giaBan).toLocaleString()}VND</p>
                 <button onClick={()=>{this.props.xemChiTiet(sp)}} className="btn btn-succes" style={{background:'#000', color:'white', padding:'0.5rem 1rem'}}>Xem chi tiết</button>
                 <button className="ml-2 btn btn-danger" onClick={()=>this.props.ThemGioHang(sp)}>Thêm vào giỏ <i class="fas fa-shopping-cart"></i></button>
                    </div>
                </div>
            
        )
    }
}
