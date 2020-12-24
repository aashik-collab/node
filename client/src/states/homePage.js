let roomsInSlider = null;
let hallsInSlider = null;

let roomTypes = null;
let roomCategories = null;
let hallCategories = null;

/*
 *************************
 */
const setRoomsInSlider = (arr) => {
    roomsInSlider = arr;
};
const getRoomsForSlider = () => {
    return roomsInSlider;
};
/*
 *************************
 */

const setHallsInSlider = (arr) => {
    hallsInSlider = arr;
};
const getHallsForSlider = () => {
    return hallsInSlider;
};
/*
 *************************
 */

const setRoomTypesArr = (arr) => {
    roomTypes = arr;
    return;
};
const getRoomTypes = () => {
    return roomTypes;
};
/*
 *************************
 */

const setRoomCategoriesArr = (arr) => {
    roomCategories = arr;
    return;
};
const getRoomCategories = () => {
    return roomCategories;
};
/*
 *************************
 */

const setHallCategoriesArr = (arr) => {
    hallCategories = arr;
    return;
};
const getHallCategories = () => {
    return hallCategories;
};
/*
 *************************
 */

module.exports = {
    getRoomsForSlider,
    getHallsForSlider,
    setRoomsInSlider,
    setHallsInSlider,
    setRoomCategoriesArr,
    setRoomTypesArr,
    setHallCategoriesArr,

    getRoomCategories,
    getRoomTypes,
    getHallCategories,
};
