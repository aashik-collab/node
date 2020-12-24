const addToCart = (obj) => {
    console.log(obj);
    let items = JSON.parse(localStorage.getItem('items')) || [];
    items = [...items, { ...obj }];
    localStorage.setItem('items', JSON.stringify(items));
};

export default addToCart;
