import React from 'react';
import Slider from 'react-slick';

import { settings } from '../../slick/homeSettings';
import Card from '../Global/Card';

function HallsSlider(props) {
    const { hallsArr } = props;

    return (
        <div className="my-5">
            <h1 className="display-4 ">Halls</h1>
            <div className="px-4">
                <Slider {...settings}>
                    {hallsArr.length &&
                        hallsArr.map((hall) => {
                            return <Card type={'hall'} key={hall._id} item={hall} />;
                        })}
                </Slider>
            </div>
        </div>
    );
}

export default HallsSlider;
