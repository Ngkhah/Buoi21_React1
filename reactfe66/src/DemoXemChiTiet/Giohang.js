import React, { Component } from 'react'

export default class Giohang extends Component {
    renderGiohang =() =>{
        let {gioHag} = this.props;
        let {xoaGH} = this.props;
        let {tangGiamGH} = this.props;
        return gioHag.map((spGH,index)=>{
            return <tr key={index}>
                <td>{spGH.maSP}</td>
                <td>{spGH.tenSP}</td>
                <td><img src={spGH.hinhAnh} width={50} height={50} alt="..." /></td>
                <td>{(spGH.giaBan).toLocaleString()}</td>
                <td>
                    <button onClick={()=>{tangGiamGH(spGH.maSP,1)}} className="btn btn-primary mr-2" >+</button>
                    {spGH.soLuong}
                    <button onClick={()=>{tangGiamGH(spGH.maSP,-1)}} className="btn btn-primary mr-2" >-</button>
                    </td>
                <td>{(spGH.soLuong*spGH.giaBan).toLocaleString()}</td>
                <td><button onClick={()=>{xoaGH(spGH.maSP)}} className="btn btn-danger">Xóa</button></td>
            </tr>
        })
    }
    render() {
        return (
            <div>
  
  <div className="modal fade" id="modelId" tabIndex={-1} role="dialog" aria-labelledby="modelTitleId" aria-hidden="true">
    <div className="modal-dialog modal-lg" role="document">
      <div className="modal-content">
        <div className="modal-header">
          <h5 className="modal-title">Modal title</h5>
          <button type="button" className="close" data-dismiss="modal" aria-label="Close">
            <span aria-hidden="true">×</span>
          </button>
        </div>
        <div className="modal-body">
          <table className="table">
            <thead>
                <tr>
                    <th>Mã sản phẩm</th>
                    <th>Tên sản phẩm</th>
                    <th>Hình ảnh</th>
                    <th>Đơn giá</th>
                    <th>Số Lượng</th>
                    <th>Thành Tiền</th>
                    <th></th>
                </tr>
            </thead>
            <tbody>
                {this.renderGiohang()}
                {/* <tr>
                <td>1</td>
                <td>Iphone</td>
                <td><img src="https://picsum.photos/id/10/50/50" alt="..." /></td>
                <td>2000</td>
                <td>2</td>
                <td>4000</td>
                <td><button className="btn btn-danger">Xóa</button></td>
                </tr> */}
            </tbody>
            <tfoot>
                <tr>
                    <td colSpan="5"></td>
                    <td>Tổng tiền</td>
                    <td>{this.props.gioHag.reduce((tongTien,spGH,index)=>
                    {return tongTien += spGH.soLuong*spGH.giaBan;},0).toLocaleString()} VND</td>
                </tr>
            </tfoot>
          </table>
        </div>
        <div className="modal-footer">
          <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
          <button type="button" className="btn btn-primary">Save</button>
        </div>
      </div>
    </div>
  </div>
</div>

        )
    }
}
