import React, { Component } from 'react'
import SanPham from './SanPham'
import Giohang from './Giohang'
export default class DemoXemChiTiet extends Component {
    mangSP=[
        { "maSP": 1, "tenSP": "VinSmart Live", "manHinh": "AMOLED, 6.2, Full HD+", "heDieuHanh": "Android 9.0 (Pie)", "cameraTruoc": "20 MP", "cameraSau": "Chính 48 MP & Phụ 8 MP, 5 MP", "ram": "4 GB", "rom": "64 GB", "giaBan": 5700000, "hinhAnh": "./img/DienThoai/vsphone.jpg" },
        { "maSP": 2, "tenSP": "Meizu 16Xs", "manHinh": "AMOLED, FHD+ 2232 x 1080 pixels", "heDieuHanh": "Android 9.0 (Pie); Flyme", "cameraTruoc": "20 MP", "cameraSau": "Chính 48 MP & Phụ 8 MP, 5 MP", "ram": "4 GB", "rom": "64 GB", "giaBan": 7600000, "hinhAnh": "./img/DienThoai/meizuphone.jpg" },
        { "maSP": 3, "tenSP": "Iphone XS Max", "manHinh": "OLED, 6.5, 1242 x 2688 Pixels", "heDieuHanh": "iOS 12", "cameraSau": "Chính 12 MP & Phụ 12 MP", "cameraTruoc": "7 MP", "ram": "4 GB", "rom": "64 GB", "giaBan": 27000000, "hinhAnh": "./img/DienThoai/applephone.jpg" }
        ]
        state = {
            sanPhamChiTiet :{ "maSP": 3, "tenSP": "Iphone XS Max", "manHinh": "OLED, 6.5, 1242 x 2688 Pixels", "heDieuHanh": "iOS 12", "cameraSau": "Chính 12 MP & Phụ 12 MP", "cameraTruoc": "7 MP", "ram": "4 GB", "rom": "64 GB", "giaBan": 27000000, "hinhAnh": "./img/DienThoai/applephone.jpg" },
            gioHag : [ 
        ]
    }

    ThemGioHang = (spClick)=>{
        console.log('spClick: ', spClick);

        //the, thuoc tinh so luong cho spclick
        let spGioHang = {...spClick,soLuong:1};
        //khi người dùng click vào => thêm sp dc click vào mảng giỏ hàng
        let gioHangCN = [...this.state.gioHag] ;   

        //tìm sp được click vào giỏ hàng
        let  sp = gioHangCN.find(spGH => spGH.maSP ===spGioHang.maSP)
        
        if(sp){//sp click có trong giỏ hàng
            sp.soLuong +=1; //tăng số lượng
        }else{
            //them sp dc click vào gio hàng
            gioHangCN.push(spGioHang);
        }
        console.log('Giỏ hàng của bạn đã đươc cập nhật ', gioHangCN);
        //chắc gọi hàm setstate
        this.setState({
            gioHag:gioHangCN
        })
    }
    //hàm xóa sp giỏ hàng đặt ở nơi chứa các state giỏ hàng xử lý
    xoaGH = (maSP) =>{
        
        let gioHangCN = [...this.state.gioHag];
        let  index = gioHangCN.findIndex(spGH => spGH.maSP === maSP);
        if(index !==-1){
            gioHangCN.splice(index,1);
        }
        this.setState({
            gioHag:gioHangCN
        })
    }

    tangGiamGH = (maSP,soLuong) =>{
        console.log(maSP,soLuong);
        let gioHangCN = [...this.state.gioHag];

        let spGH = gioHangCN.find(spGH => spGH.maSP === maSP);

        if(spGH){
            spGH.soLuong += soLuong;
            if(spGH.soLuong < 1){
                alert('Số lượng tối thiểu bằng 1');
                spGH.soLuong -= soLuong;
                // xóa khi bằng 0
                //this.xoaGH(maSP);
                //return;
            }
        }
        this.setState({
            gioHag:gioHangCN
        })
    }

    renderSP =()=>{
        return this.mangSP.map((sanPham,index) => {
            return <div className="col-4" key={index}>
                

            <SanPham sp={sanPham} xemChiTiet={this.xemChiTiet} ThemGioHang={this.ThemGioHang}/>
                </div>
            })
    }

    xemChiTiet = (sanPhamDuocClick) => {
            console.log('sanPhamDuocClick: ', sanPhamDuocClick);
            this.setState({
                sanPhamChiTiet: sanPhamDuocClick
            })
            
    }
    tinhTongSL = ()=>{
        let tongSL =this.state.gioHag.reduce((tong,spGH,index)=>{
            return tong += spGH.soLuong;

        },0);
        return tongSL;
    }
    render() {
        let {sanPhamChiTiet} = this.state;

        return (

            
            <div className="container">
                <Giohang gioHag={this.state.gioHag} xoaGH={this.xoaGH} tangGiamGH={this.tangGiamGH}/>
                <h3 className="text-center">Danh Sách Sản Phẩm</h3>
                <div className="text-right">
                    <span className="btn" data-toggle="modal" data-target="#modelId">Giỏ hàng ({this,this.tinhTongSL()})</span>
                </div>
            <div className="row">
                {this.renderSP()}
            </div>
            <div className="row mt-2">
                <div className="col-4">
                    <h3>{sanPhamChiTiet.tenSP}</h3>
                    <img src={sanPhamChiTiet.hinhAnh} width={200} height={200} alt="" />
                </div>
                <civ className="col-8">
                    <h3 className="text-center">Thông số kỹ thuật</h3>
                    <table>
                        <tr>
                            <th>Màn hình</th>
                            <th>{sanPhamChiTiet.manHinh}</th>
                        </tr>
                        <tr>
                            <th>Hệ Điều Hành</th>
                            <th>{sanPhamChiTiet.heDieuHanh}</th>
                        </tr>
                        <tr>
                            <th>Camera Sau</th>
                            <th>{sanPhamChiTiet.cameraSau}</th>
                        </tr>
                        <tr>
                            <th>Camera Trước</th>
                            <th>{sanPhamChiTiet.cameraTruoc}</th>
                        </tr>
                        <tr>
                            <th>Ram</th>
                            <th>{sanPhamChiTiet.ram}</th>
                        </tr>
                        <tr>
                            <th>Rom</th>
                            <th>{sanPhamChiTiet.rom}</th>
                        </tr>
                    </table>
                </civ>
            </div>
            </div>
        )
    }
}
