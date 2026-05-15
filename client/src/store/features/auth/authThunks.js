import { loginStart, loginSuccess, loginFailure, logout } from "./authSlice";
import { saveAuthState, clearAuthState } from "@/utils/authStorage";

const DUMMY_CREDENTIALS = {
  email: "admin@gmail.com",
  password: "admin123",
};

const DUMMY_USER = {
  id: 1,
  name: "Muhammad Ahsan",
  email: DUMMY_CREDENTIALS.email,
  role: "Admin",
  avatar: "https://i.pravatar.cc/150?img=12",
};

export const loginUser =
  ({ email, password }) =>
  async (dispatch) => {
    dispatch(loginStart());

    await new Promise((resolve) => setTimeout(resolve, 800));

    const normalizedEmail = email.trim().toLowerCase();
    if (
      normalizedEmail === DUMMY_CREDENTIALS.email &&
      password === DUMMY_CREDENTIALS.password
    ) {
      dispatch(loginSuccess(DUMMY_USER));
      saveAuthState({
        user: DUMMY_USER,
        isAuthenticated: true,
      });
    } else {
      dispatch(loginFailure("Invalid email or password"));
    }
  };

export const logoutUser = () => (dispatch) => {
  dispatch(logout());
  clearAuthState();
};
