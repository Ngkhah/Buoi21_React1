import React, { Component } from 'react'
import './DemoChonMatKinh.css'
import SanPham from './SanPham'
export default class DemoChonMatKinh extends Component {
    ArrSP = [
    {id:1,name:"Gucci V1",price:500,info:"Lorem ipsum dolor, sit amet consectetur adipisicing elit.",img:"./img/glassesImage/v1.png"},
    {id:2,name:"Gucci V2",price:500,info:"Lorem ipsum dolor, sit amet consectetur adipisicing elit.",img:"./img/glassesImage/v2.png"},
    {id:3,name:"Gucci V3",price:500,info:"Lorem ipsum dolor, sit amet consectetur adipisicing elit.",img:"./img/glassesImage/v3.png"},
    {id:4,name:"Fendi D1",price:500,info:"Lorem ipsum dolor, sit amet consectetur adipisicing elit.",img:"./img/glassesImage/v4.png"},
    {id:5,name:"Fendi D2",price:500,info:"Lorem ipsum dolor, sit amet consectetur adipisicing elit.",img:"./img/glassesImage/v5.png"},
    {id:6,name:"Fendi D3",price:500,info:"Lorem ipsum dolor, sit amet consectetur adipisicing elit.",img:"./img/glassesImage/v6.png"},
    {id:7,name:"Dior T1",price:500,info:"Lorem ipsum dolor, sit amet consectetur adipisicing elit.",img:"./img/glassesImage/v7.png"},
    {id:8,name:"Dior T2",price:500,info:"Lorem ipsum dolor, sit amet consectetur adipisicing elit.",img:"./img/glassesImage/v8.png"},
    {id:9,name:"Dior T3",price:500,info:"Lorem ipsum dolor, sit amet consectetur adipisicing elit.",img:"./img/glassesImage/v9.png"}
]
state = {
    sanPhamChiTiet :{id:1, name:"Gucci V1", price:500, info:"Lorem ipsum dolor, sit amet consectetur adipisicing elit.", img:"./img/glassesImage/v1.png"}
} 
renderSP =()=>{
    return this.ArrSP.map((sanPham,index) => {
        return <div className="col-2" style={{ cursor: 'pointer' }} key={index}>
        

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
        let {sanPhamChiTiet} = this.state;
        return (

            <div id="header" className="container-fluid pl-0 pr-0">
                <img  src="./img/glassesImage/bg.jpg" alt="" style={{width:"100%"}} />
                <div className="MatKinh">
                    <div className="header"> 
                        <h3 className="text-center"> TRY GLASSES APP ONLINE</h3>
                    </div>
                    <div className="container">
                        <div className="body">
                            <div className="row">
                                <div className="model col-6 text-center">
                                    <img src="./img/glassesImage/model.jpg" style={{borderRadius:"10px"}} width={300} alt="" />
                                    <div className="SanPham">
                                        <img src={sanPhamChiTiet.img} alt="" />
                                    </div>
                                    <div className="info">
                                        <h4>{sanPhamChiTiet.name}</h4>
                                        <p>{sanPhamChiTiet.info}</p>
                                    </div>
                                </div>
                                <div className="col-6 text-center">
                                    <img src="./img/glassesImage/model.jpg" style={{borderRadius:"10px"}} width={300} alt="" />
                                </div>
                            </div>
                            <div className="row ChonSP"> 
                                
                                {this.renderSP()}
                                
                            </div>
                        </div>
                    </div>
                </div>
                
            </div>
        )
    }
}
