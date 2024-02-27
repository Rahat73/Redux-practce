import { Navigate, useLocation } from "react-router-dom";
import Loading from "./Loading";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { onAuthStateChanged } from "firebase/auth";
import auth from "../../utils/firebase.config";
import { setLoading, setUser } from "../../redux/features/user/userSlice";
import toast from "react-hot-toast";

const PrivateRoute = ({ children }) => {
  const { pathname } = useLocation();

  const { email, isLoading, isError, error } = useSelector(
    (state) => state.userSlice
  );
  const dispatch = useDispatch();

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        dispatch(setUser({ name: user.displayName, email: user.email }));
        dispatch(setLoading(false));
      } else {
        dispatch(setLoading(false));
      }
    });
  }, []);

  useEffect(() => {
    if (isError) {
      toast.error(error);
      console.log(error);
    }
  }, [isError, error]);

  if (isLoading) {
    return <Loading />;
  }

  if (!isLoading && !email) {
    return <Navigate to="/login" state={{ path: pathname }} />;
  }

  return children;
};

export default PrivateRoute;
