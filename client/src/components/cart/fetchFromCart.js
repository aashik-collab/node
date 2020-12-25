const fetchItemsFromCart = () => {
    const items = JSON.parse(localStorage.getItem('items'));
    return items || [];
};

export default fetchItemsFromCart;
