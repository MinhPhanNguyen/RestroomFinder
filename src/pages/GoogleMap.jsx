import React, { useState } from "react";
import { IoMenu } from "react-icons/io5";
import { MdWc } from "react-icons/md";
import { FaStar } from "react-icons/fa";
import { BiSolidCommentAdd } from "react-icons/bi";
import { FaHistory } from "react-icons/fa";
import { RxExit } from "react-icons/rx";
import { Link} from "react-router-dom"
import { FaWalking } from "react-icons/fa";

const Menu = ({status, location, title, odo, rate}) => {
    return (
        <div className="Content" >
            <h3>{title} </h3>
            <div className="StautsType">
                <p>{status}</p>
                <p>{location}</p>
            </div>
            <div className="OdoType">
                <p><FaWalking/> {odo} km</p>
                <p>{rate} <FaStar/> </p>
            </div>
        </div>
    )
}

const GoogleMap = () => {
    const [activeMenu, setActiveMenu] = useState('Mở Rộng');

    const ListMenu = {
        'Mở Rộng' : [
            { status:"Free", location:"School", title:"67 Nguyen Thi Tu", odo:"7", rate:"5" },
            { status:"Free", location:"School", title:"67 Nguyen Thi Tu", odo:"7", rate:"5" },
            { status:"Free", location:"School", title:"67 Nguyen Thi Tu", odo:"7", rate:"5" },
            { status:"Free", location:"School", title:"67 Nguyen Thi Tu", odo:"7", rate:"5" }
        ],

        'Gần Đây' : [
            { status:"Free", location:"School", title:"67 Nguyen Thi Tu", odo:"7", rate:"5" },
            { status:"Free", location:"School", title:"67 Nguyen Thi Tu", odo:"7", rate:"5" },
            { status:"Free", location:"School", title:"67 Nguyen Thi Tu", odo:"7", rate:"5" },
            { status:"Free", location:"School", title:"67 Nguyen Thi Tu", odo:"7", rate:"5" }
        ],

        'Đánh Giá' : [
            { status:"Free", location:"School", title:"67 Nguyen Thi Tu", odo:"7", rate:"5" },
            { status:"Free", location:"School", title:"67 Nguyen Thi Tu", odo:"7", rate:"5" },
            { status:"Free", location:"School", title:"67 Nguyen Thi Tu", odo:"7", rate:"5" },
            { status:"Free", location:"School", title:"67 Nguyen Thi Tu", odo:"7", rate:"5" }
        ],

        'Diễn Đàn' : [
            { status:"Free", location:"School", title:"67 Nguyen Thi Tu", odo:"7", rate:"5" },
            { status:"Free", location:"School", title:"67 Nguyen Thi Tu", odo:"7", rate:"5" },
            { status:"Free", location:"School", title:"67 Nguyen Thi Tu", odo:"7", rate:"5" },
            { status:"Free", location:"School", title:"67 Nguyen Thi Tu", odo:"7", rate:"5" }
        ],

        'Lịch Sử' : [
            { status:"Free", location:"School", title:"67 Nguyen Thi Tu", odo:"7", rate:"5" },
            { status:"Free", location:"School", title:"67 Nguyen Thi Tu", odo:"7", rate:"5" },
            { status:"Free", location:"School", title:"67 Nguyen Thi Tu", odo:"7", rate:"5" },
            { status:"Free", location:"School", title:"67 Nguyen Thi Tu", odo:"7", rate:"5" }
        ]
    }
    
    return (
        <div>
            <div className="GoogleMap" data-aos='fade-right'> 
                <div className="Container" data-aos='fade-right' >
                    <ul>
                        <li onClick={() => setActiveMenu('Mở Rộng')} 
                        className={activeMenu === 'Mở Rộng' ? 'active' : ''} >
                            <IoMenu data-aos='fade-right'/>
                            <h3 data-aos='fade-right'>Mở Rộng</h3>
                        </li>
                        <li onClick={() => setActiveMenu('Gần Đây')}
                        className={activeMenu === 'Gần Đây' ? 'active' : ''}>
                            <MdWc data-aos='fade-right'/>
                            <h3 ata-aos='fade-right'>Gần Đây</h3>
                        </li>
                        <li onClick={() => setActiveMenu('Đánh Giá')}
                        className={activeMenu === 'Đánh Giá' ? 'active' : ''}>
                            <FaStar data-aos='fade-right'/>
                            <h3 ata-aos='fade-right'>Đánh Giá</h3>
                        </li>
                        <li onClick={() => setActiveMenu('Diễn Đàn')}
                        className={activeMenu === 'Diễn Đàn' ? 'active' : ''}>
                            <BiSolidCommentAdd data-aos='fade-right'/>
                            <h3 ata-aos='fade-right'>Diễn Đàn</h3>
                        </li>
                        <li onClick={() => setActiveMenu('Lịch Sử')}
                        className={activeMenu === 'Lịch Sử' ? 'active' : ''}>
                            <FaHistory data-aos='fade-right'/>
                            <h3 ata-aos='fade-right'>Lịch Sử</h3>
                        </li>
                        <Link to='/'><li>
                            <RxExit data-aos='fade-right'/>
                            <h3 ata-aos='fade-right'>Thoát</h3>
                        </li></Link>
                    </ul>
                </div>

                <div className="Contain" >
                    {
                        ListMenu[activeMenu].map((item, index) => (
                            <Menu 
                            key={index}
                            status={item.status}
                            location={item.location}
                            title={item.title}
                            odo={item.odo}
                            rate={item.rate} />
                        ))
                    }
                </div>
            </div>
        </div>
    )
}

export default GoogleMap;
