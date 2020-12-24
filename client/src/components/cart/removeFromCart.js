const removeFromCart = (_id) => {
    const items = JSON.parse(localStorage.getItem('items'));
    const filteredItems = items.filter((item) => item._id !== _id);
    localStorage.removeItem('items');
    localStorage.setItem('items', JSON.stringify(filteredItems));
};

export default removeFromCart;
