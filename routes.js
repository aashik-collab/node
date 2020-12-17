// some  routes that does not fit in components
const Router = require('express').Router();

const Room = require('./components/room/models/Room');
const Hall = require('./components/hall/models/Hall');

Router.get('/fetch-num-of-people', async (req, res) => {
    try {
        let no_of_people_for_rooms = [];
        let no_of_people_for_halls = [];
        let rooms = await Room.find().select('no_of_people');
        let halls = await Hall.find().select('no_of_people');

        rooms = rooms.filter((room) => room.no_of_people);
        halls = halls.filter((hall) => hall.no_of_people);

        no_of_people_for_rooms = [...rooms];
        no_of_people_for_halls = [...halls];

        no_of_people_for_rooms = no_of_people_for_rooms.map((obj) => obj.no_of_people);
        no_of_people_for_halls = no_of_people_for_halls.map((obj) => obj.no_of_people);

        return res.status(200).json({
            success: true,
            no_of_people_for_rooms: [...new Set(no_of_people_for_rooms)],
            no_of_people_for_halls: [...new Set(no_of_people_for_halls)],
        });
    } catch (err) {
        console.log(err);
        return res.status(500).json({ success: false, message: err.message });
    }
});

Router.get('/check-room-availability', async (req, res) => {
    let { room_type, room_category, no_of_people } = req.query;
    const rooms = await Room.find({
        room_type_id: room_type,
        room_category_id: room_category,
        availability: true,
        no_of_people: {
            $gte: no_of_people,
        },
    }).select('_id title');

    return res.status(200).json({
        success: true,
        rooms,
    });
});

Router.get('/check-hall-availability', async (req, res) => {
    const { hall_category, no_of_people } = req.query;

    const halls = await Hall.find({
        hall_category_id: hall_category,
        availability: true,
        no_of_people: {
            $gte: no_of_people,
        },
    }).select('_id title ');

    return res.status(200).json({
        success: true,
        halls,
    });
});

module.exports = Router;
