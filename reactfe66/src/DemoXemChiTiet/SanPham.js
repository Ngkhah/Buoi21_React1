import React, { Component } from 'react'

export default class SanPham extends Component {
    render() {
        let {sp} =this.props;
        
        return (
            
                <div className="card bg-dark text-white" >
                    <img src={sp.hinhAnh} width={330} height={330} alt="..."/>
                    <div className="card-body">
                    <p className="font-weight-bold">{sp.tenSP}</p>
                 <p>{sp.giaBan}$</p>
                 <button onClick={()=>{this.props.xemChiTiet(sp)}} className="btn " style={{background:'#000', color:'white', padding:'0.5rem 1rem'}}>Add to cart <i class="fas fa-shopping-cart"></i></button>
                    </div>
                </div>
            
        )
    }
}
