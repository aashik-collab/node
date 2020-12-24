import React from 'react';
import Slider from 'react-slick';

import { settings } from '../../slick/homeSettings';
import Card from '../Global/Card';

function RoomsSlider(props) {
    const { roomsArr } = props;

    return (
        <div className="my-5">
            <h1 className="display-4">Rooms</h1>
            <div className="px-4">
                <Slider {...settings}>
                    {!!roomsArr.length &&
                        roomsArr.map((room) => {
                            return <Card type={'room'} item={room} key={room._id} />;
                        })}
                </Slider>
            </div>
        </div>
    );
}

export default RoomsSlider;
