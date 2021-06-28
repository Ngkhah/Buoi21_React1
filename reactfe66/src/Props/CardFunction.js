import React from 'react'

export default function CardFunction(props) {
    const product = props.product;
    
    return (
        <div className="card bg-dark text-light ">
                <img src={product.img} alt="" />
                <div className="card-body">
                    {/* <p className="font-weight-bold">{tenSP}</p>
                    <p>{gia}</p> */}
                    <p className="font-weight-bold">{product.name}</p>
                    <p>{product.price}</p>
                </div>
            </div>
    )
}
