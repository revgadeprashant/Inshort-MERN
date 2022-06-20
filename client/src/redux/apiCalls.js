import { loginFailure, loginStart, loginSuccess } from "./userSlice";
import { publicRequest } from "../service/api";
import { useDispatch } from "react-redux";
// const dispatch=useDispatch();
export const loginacc = async(dispatch, user) => {
    // const dispatch = useDispatch();
    dispatch(loginStart());
    try {
        // const res = await publicRequest.post("/signin", user);
        const res = await publicRequest(user);
        dispatch(loginSuccess(res.data));
    } catch (err) {
        dispatch(loginFailure());
    }
};