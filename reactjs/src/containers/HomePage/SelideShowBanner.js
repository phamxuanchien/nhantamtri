import React from 'react';
import { Slide } from 'react-slideshow-image';
import './SelideShowBanner.scss';
import 'react-slideshow-image/dist/styles.css'
import facebook from '../../assets/header/facebook.png';

const slideImages = [
    {
        url: 'https://bcp.cdnchinhphu.vn/Uploaded/hatheluc/2020_10_25/_BAC3697.jpg',
        caption: 'Slide 1'
    },
    {
        url: 'https://vnn-imgs-f.vgcloud.vn/2021/05/30/08/cong-dong-trach-nhiem-va-chuyen-lam-tu-thien-tu-nuoc-duc-1.jpg',
        caption: 'Slide 2'
    },
    {
        url: 'https://ucmasvietnam.com/pic/News/images/kinh-doanh-giao-duc-sieu-loi-nhuan.jpg',
        caption: 'Slide 3'
    },
    {
        url: 'https://thirdtext.com/wp-content/uploads/2021/06/luong-nganh-y-te-2021.jpg',
        caption: 'Slide 4'
    },
    {
        url: 'https://tuyengiao.vn/Uploads/2019/11/29/25/000iii.jpg',
        caption: 'Slide 5'
    },

];

const SelideShowBanner = () => {
    return (
        <div className="slide-container">
            <Slide>
                {slideImages.map((slideImage, index) => (
                    <div className="each-slide" key={index}>
                        <div className="show-banner" style={{ 'backgroundImage': `url(${slideImage.url})` }}>
                            <span>{slideImage.caption}</span>
                        </div>
                    </div>
                ))}
            </Slide>
        </div>
    )
}


export default SelideShowBanner