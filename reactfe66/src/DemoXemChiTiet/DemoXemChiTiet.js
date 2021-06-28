import React, { Component } from 'react'
import SanPham from './SanPham'
export default class DemoXemChiTiet extends Component {
    mangSP=[
        { "maSP": 1, "tenSP": "VinSmart Live", "manHinh": "AMOLED, 6.2, Full HD+", "heDieuHanh": "Android 9.0 (Pie)", "cameraTruoc": "20 MP", "cameraSau": "Chính 48 MP & Phụ 8 MP, 5 MP", "ram": "4 GB", "rom": "64 GB", "giaBan": 5700000, "hinhAnh": "./img/DienThoai/vsphone.jpg" },
        { "maSP": 2, "tenSP": "Meizu 16Xs", "manHinh": "AMOLED, FHD+ 2232 x 1080 pixels", "heDieuHanh": "Android 9.0 (Pie); Flyme", "cameraTruoc": "20 MP", "cameraSau": "Chính 48 MP & Phụ 8 MP, 5 MP", "ram": "4 GB", "rom": "64 GB", "giaBan": 7600000, "hinhAnh": "./img/DienThoai/meizuphone.jpg" },
        { "maSP": 3, "tenSP": "Iphone XS Max", "manHinh": "OLED, 6.5, 1242 x 2688 Pixels", "heDieuHanh": "iOS 12", "cameraSau": "Chính 12 MP & Phụ 12 MP", "cameraTruoc": "7 MP", "ram": "4 GB", "rom": "64 GB", "giaBan": 27000000, "hinhAnh": "./img/DienThoai/applephone.jpg" }
        ]
        state = {
            sanPhamChiTiet :{ "maSP": 3, "tenSP": "Iphone XS Max", "manHinh": "OLED, 6.5, 1242 x 2688 Pixels", "heDieuHanh": "iOS 12", "cameraSau": "Chính 12 MP & Phụ 12 MP", "cameraTruoc": "7 MP", "ram": "4 GB", "rom": "64 GB", "giaBan": 27000000, "hinhAnh": "./img/DienThoai/applephone.jpg" }

        }

        renderSP =()=>{
            return this.mangSP.map((sanPham,index) => {
                return <div className="col-4" key={index}>
                

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

            
            <div className="container">
                <h3 className="text-center">Danh Sách Sản Phẩm</h3>
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
