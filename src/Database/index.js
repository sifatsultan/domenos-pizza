import dummyData from "../dummyData/foods";



const getUser = () => {
    const existingUser = localStorage.getItem('userId');
    if (existingUser) {
        return existingUser;
    } else {
        const newUser = 'user-' + new Date().getTime();
        localStorage.setItem('userId', newUser)
        return newUser;
    }
}


const getDataKey = () => {
    const userId = getUser();
    return `moja-pizza/carts/${userId}`
}

const getCartFoodItems = () => {
    const cartItems = getDatabaseCart();
    return cartItems.map(item => {
        var item = dummyData.find(f => f.id === item.key);
        return {
            id: item.id,
            name: item.name,
            img: item.img,
            price: item.price,
            shortDescription: item.shortDescription
        }
    })

}


// push to local storage: a temporary place for database
const getDatabaseCart = () => {
    const dataKey = getDataKey();
    const data = localStorage.getItem(dataKey) || "[]";
    return JSON.parse(data);
}

const addToDatabaseCart = (key, count) => {
    let currentCart = getDatabaseCart();
    var targetItem = currentCart.filter(c => c.key === key)[0]
    if (targetItem != null) {
        targetItem.count = count;
    } else {
        currentCart.push(
            {
                key: key,
                count: count
            }
        )
    }
    localStorage.setItem(getDataKey(), JSON.stringify(currentCart));
}

const getNumberOfCartItems = () => {
    let currentCart = getDatabaseCart();
    if (currentCart == null)
        return 0
    else {
        return currentCart
            .reduce((previousValue, currentValue) => previousValue + currentValue.count, 0);
    }
}

const getCartTotal = () => {
    const TOTAL_CART_SHIPPING = 15.00;
    const TOTAL_CART_TAX = 0.05;
    let currentCart = getDatabaseCart();


    var subtotal = 0;
    currentCart.map(c => {
        var item = dummyData.find(f => f.id.toString() === c.key)
        subtotal += c.count * item.price
    })

    let tax = subtotal * TOTAL_CART_TAX;
    let grand_total = subtotal + tax + TOTAL_CART_SHIPPING
    const cartTotal = {
        subtotal: subtotal,
        tax: subtotal * TOTAL_CART_TAX,
        shipping: TOTAL_CART_SHIPPING,
        grand_total: grand_total
    }

    return cartTotal
}

const removeFromDatabaseCart = key => {
    const currentCart = getDatabaseCart();
    var itemToDelete = currentCart.find((x) => x.key === key)
    var index = currentCart.indexOf(itemToDelete)
    if (index > -1) {
        currentCart.splice(index, 1)
    }
    localStorage.setItem(getDataKey(), JSON.stringify(currentCart));
}

const clearLocalShoppingOrder = (cart) => {
    localStorage.removeItem(getDataKey());
}

export {getCartFoodItems, getNumberOfCartItems, getCartTotal, addToDatabaseCart, getDatabaseCart, removeFromDatabaseCart, clearLocalShoppingOrder };
