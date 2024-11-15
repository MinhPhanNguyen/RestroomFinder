import React from 'react';
import kiemduyet from '../assets/images/logosalenoti.png'
import facebook from '../assets/images/fbsquare.png'
import youtube from '../assets/images/ytbsquare.png'

const footer = () => {
    return (
        <footer>
            <div className='TotalFooter'>
                <ul className='Total_1'>
                    <h2>CÔNG TY TNHH NGUYEN MINH GROUP- TP.HCM</h2>
                    <li>Giấy ĐKKD: 0317119491 - Ngày cấp: 16/10/2024</li>
                    <li>Cơ quan cấp: Phòng Đăng ký kinh doanh Sở Kế hoạch</li>
                    <li>Địa chỉ 1: 827A-829 Trường Chinh, Phường Tây Thạnh, Q. Tân Phú</li>
                    <li>Địa chỉ 2: Thành phố Hồ Chí Minh</li>
                    <li><a><img src={kiemduyet} alt='kiemduyet' className='kiemduyet'></img></a></li>
                </ul>
                <ul>
                    <h2>SẢN PHẨM</h2>
                    <li><a>Restroom Finder - Tìm nhà vệ sinh</a></li>
                    <li><a>Dự án: Hệ thống nhà vệ sinh trên quốc lộ</a></li>
                    <li><a>Dự án: Hệ thống vệ sinh Restroom Finder</a></li>
                </ul>
                <ul>
                    <ul>
                        <h2>DỊCH VỤ</h2>
                        <li><a>Trồng cây - Xây rừng</a></li>
                        <li><a>Trẻ vùng cao - khó khăn</a></li>
                        <li><a>Bữa cơm tình thương</a></li>
                        <li><a>Đường phố sạch đẹp</a></li>
                    </ul>
                </ul>
                <ul>
                    <h2>LIÊN HỆ VỚI CHÚNG TÔI</h2>
                    <li> <a href="tel:0934190061">Hotline Tham gia tình nguyện: 0934.1900.61</a></li>
                    <li> <a href="tel:0934190061">Hotline Hỗ trợ: 0934.1900.61</a></li>
                    <li> <a href="mailto:SWminh0918195615@gmail.com">Email: SWminh0918195615@gmail.com</a></li>
                    <li className='icon'>
                        <a href="https://www.facebook.com/MazdaTruongChinh/" target="_blank">
                            <img src={facebook} alt='facebook'></img>
                        </a>
                        <a href="https://www.youtube.com/channel/UCJ1-r69F98y4wOa4Z392tlg" target="_blank">
                            <img src={youtube} alt='youtube'></img>
                        </a>
                    </li>
                </ul>
            </div>
            <p>© 2024 NguyenMinhGroup Việt Nam</p>
        </footer>
    )
}

export default footer;