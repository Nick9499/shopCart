import { createStore, applyMiddleware, combineReducers } from 'redux'
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'
import {
    productDeleteReducer,
    productDetailsReducer,
    productListReducer,
} from './reducers/productReducers'
import { cartReducer } from './reducers/cartreducers'
import {
    userDetailReducer,
    userLoginReducer,
    userRegisterReducer,
    userListReducer,
    userUpdateProfileReducer,
    userDeleteReducer,
    userUpdateReducer,
} from './reducers/userReducers'
import {
    orderCreateReducer,
    orderDetailsReducer,
    orderListMyRuducer,
    orderPayReducer,
} from './reducers/orderReducer'

const reducer = combineReducers({
    productList: productListReducer,
    productDetails: productDetailsReducer,
    productDelete: productDeleteReducer,
    cart: cartReducer,
    userLogin: userLoginReducer,
    userRegister: userRegisterReducer,
    userDetails: userDetailReducer,
    userUpdateProfile: userUpdateProfileReducer,
    userList: userListReducer,
    userDelete: userDeleteReducer,
    userUpdate: userUpdateReducer,
    orderCreate: orderCreateReducer,
    orderDetails: orderDetailsReducer,
    orderPay: orderPayReducer,
    orderListMy: orderListMyRuducer,
})

const cartItemFromStorage = localStorage.getItem('cartItems')
    ? JSON.parse(localStorage.getItem('cartItems'))
    : []

const userInfoFromStorage = localStorage.getItem('userInfo')
    ? JSON.parse(localStorage.getItem('userInfo'))
    : null

const shippingAddressFromStorage = localStorage.getItem('shippingAddress')
    ? JSON.parse(localStorage.getItem('shippingAddress'))
    : {}

const initialState = {
    cart: {
        cartItems: cartItemFromStorage,
        shippingAddress: shippingAddressFromStorage,
    },
    userLogin: {
        userInfo: userInfoFromStorage,
    },
}

const middleware = [thunk]

const store = createStore(
    reducer,
    initialState,
    composeWithDevTools(applyMiddleware(...middleware))
)

export default store
