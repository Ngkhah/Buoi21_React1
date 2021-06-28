import React, { Component } from 'react'
import Card from './Card'
import CardFunction from './CardFunction'
export default class DemoProps extends Component {
    arrSP =[
        {id:1, name:'SamSung Galaxy Note 21', price:1500, img:'https://picsum.photos/id/10/200/200'},
        {id:2, name:'SamSung Galaxy Note 21 Ultra', price:2000, img:'https://picsum.photos/id/20/200/200'},
        {id:3, name:'I Phome 12 Pro Max', price:3000, img:'https://picsum.photos/id/30/200/200'},
    ]
    renderSP = ()=>{
        // const jsx = this.arrSP.map ((item,index)=>{
        //     return <div className="col-4" key={index}>
        //         <Card product={item} />
        //     </div>
        // });
        // return jsx;

        const jsx = this.arrSP.map ((item,index)=>{
            return <div className="col-4" key={index}>
                <CardFunction product={item} />
            </div>
        });
        return jsx;
    }
    render() {

        return (
            <div className="container">
                <h3 className="text-center">Danh sách sản phẩm</h3>  
            {/* <Card tenSP="SamSung Galaxy Note 21" gia="100" /> */}

            {/* <Card product={this.arrSP[0]} />
            <Card product={this.arrSP[1]} />
            <Card product={this.arrSP[2]} /> */}
            <div className="row">
                {this.renderSP()}
            </div>
            </div>
        )
    }
}
