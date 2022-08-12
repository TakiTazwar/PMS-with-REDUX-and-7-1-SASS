import {
    logout, addAmount
} from "../reducers/userSlice";
const userRemove = async (dispatch) =>{
    dispatch(logout());
}

const addUser = async (loginData,dispatch) =>{
    dispatch(addAmount(loginData));
}

export default {userRemove,addUser};
