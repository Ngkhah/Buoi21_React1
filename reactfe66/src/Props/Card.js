import React, { Component } from 'react'

export default class Card extends Component {
    render() {

        //this.props là thuộc tính có sẵn của react class component
        // let tenSP = this.props.tenSP;
        // let gia = this.props.gia;

        /*câu hỏi: khác nhau giữa this.state và this.props
            Giống nhau:
                là điều là thuộc tính class component react đề chứa giá tri reander ra giao diện
            Khác nhau: 
                +state: dùng để chứa giá trị thay đổi khi người dùng thao tác trên giao diện. Props dùng nhận giá trị cha truyện vào.
                +state: có thể gán lại dc giá trị ms = phương thức setState.
                +props ko thể gán một giá trị ms chồng lên
        */
        let {product} = this.props;
        return (
            // <div className="card bg-dark text-light ">
            //     <img src={product.img} alt="" />
            //     <div className="card-body">
            //         {/* <p className="font-weight-bold">{tenSP}</p>
            //         <p>{gia}</p> */}
            //         <p className="font-weight-bold">{product.name}</p>
            //         <p>{product.price}</p>
            //         <button className="btn btn-dark text-light">xsasdsadas</button>
            //     </div>
            // </div>
             <div className="card bg-white text-black  pl-10">
             <img src={product.image} alt="" />
             <div className="card-body">
                 {/* <p className="font-weight-bold">{tenSP}</p>
                 <p>{gia}</p> */}
                 <p className="font-weight-bold">{product.name}</p>
                 <p>{product.price}$</p>
                 <button className="btn " style={{background:'#000', color:'white', padding:'0.5rem 1rem'}}>Add to cart <i class="fas fa-shopping-cart"></i></button>
             </div>
         </div>
        )
    }
}
