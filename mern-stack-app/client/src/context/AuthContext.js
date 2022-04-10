import {createContext, useReducer} from "react";
import {AuthReducer} from "../Reducer/AuthReducer";
import axios from "axios";
import {apiUrl, LOCAL_STORAGE_TOKEN_NAME} from "./Constant";
import setAuthToken from "../utils/setAuthToken";
export const AuthContext = createContext();
const AuthContextProvider = ({children}) => {
  const [authState, dispatch] = useReducer(AuthReducer, {
    authLoading: true,
    isAuthenticated: false,
    user: null,
  });
  //check user logged in
  const loadUser = async () => {
    if (localStorage[LOCAL_STORAGE_TOKEN_NAME]) {
      setAuthToken(localStorage[LOCAL_STORAGE_TOKEN_NAME]);
    }
    try {
      const response = await axios.get(`${apiUrl}/auth`);
      if (response.data.success) {
        dispatch({
          type: "SET_AUTH",
          payload: {isAuthenticated: true, user: response.data.user},
        });
      }
    } catch (err) {
      localStorage.removeItem(LOCAL_STORAGE_TOKEN_NAME);
      setAuthToken(null);
      dispatch({
        type: "SET_AUTH",
        payload: {isAuthenticated: false, user: null},
      });
    }
  };
  //login
  const loginUser = async (userForm) => {
    try {
      const response = await axios.post(`${apiUrl}/auth/login`, userForm);

      return response.data;
    } catch (error) {
      if (error.response.data) return error.response.data;
      else return {success: false, message: error.message};
    }
  };
  const AuthContextData = {loginUser};
  //return provider
  return (
    <AuthContext.Provider value={AuthContextData}>
      {children}
    </AuthContext.Provider>
  );
};
export default AuthContextProvider;
