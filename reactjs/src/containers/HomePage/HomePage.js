import React, { Component } from 'react';
import { connect } from 'react-redux';
import HomeHeader from './HomeHeader';
import SliderNewsEvents from './Section/SliderNewsEvents';
import SliderProjectneedhelp from './Section/SliderProjectneedhelp';
import SliderHonorBenefactor from './Section/SliderHonorBenefactor';
import SliderHumanneedhelp from './Section/SliderHumanneedhelp';
// import About from './Section/About';
import HomeFooter from './HomeFooter';
import './HomePage.scss';
import { FormattedMessage } from 'react-intl';
import SliderYoutube from './Section/SliderYoutube';

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


class HomePage extends Component {

    render() {
        let settings = {
            dots: false,
            infinite: false,
            speed: 500,
            slidesToShow: 4,
            slidesToScroll: 1,
            autoplay: true,
            autoplayspeed: 4000,
            pauseOnHover: true,
            pauseOnFocus: true,
            responsive: [
                {
                    breakpoint: 1350,
                    settings: {
                        slidesToShow: 3,
                        slidesToScroll: 1,
                        infinite: false,
                        dots: false,
                        speed: 500,
                    }
                },
                {
                    breakpoint: 1024,
                    settings: {
                        slidesToShow: 2,
                        slidesToScroll: 1,
                        initialSlide: 1,
                        speed: 500,
                    }
                },
                {
                    breakpoint: 740,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1,
                        initialSlide: 1,
                        speed: 500,
                    }
                }
            ]

        };
        return (
            <div className="homepage-container">
                <HomeHeader isShowBanner={true} />
                <SliderHonorBenefactor
                    settings={settings} />
                <SliderNewsEvents
                    settings={settings} />
                <SliderProjectneedhelp
                    settings={settings} />
                <SliderHumanneedhelp
                    settings={settings} />
                <div className="homepage-media"><FormattedMessage id="homepage.media-us" /></div>
                <SliderYoutube
                    settings={settings} />
                {/* <About /> */}
                <HomeFooter />
            </div>
        );
    }

}

const mapStateToProps = state => {
    return {
        isLoggedIn: state.user.isLoggedIn
    };
};

const mapDispatchToProps = dispatch => {
    return {
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(HomePage);
