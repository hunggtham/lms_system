import { observer } from "mobx-react-lite";
import { Route, Redirect } from "react-router-dom";

// Giả sử có một hàm để kiểm tra trạng thái đăng nhập
const isAuthenticated = () => {
  // Logic để kiểm tra người dùng đã đăng nhập hay chưa
  return !!localStorage.getItem("authToken");
};

const AuthenticatedLayout = ({ component: Component, ...rest }) => (
  <Route
    {...rest}
    render={(props) =>
      isAuthenticated() ? <Component {...props} /> : <Redirect to="/login" />
    }
  />
);
const AuthenticateRoute = observer(AuthenticatedLayout);
export default AuthenticateRoute;
// Sử dụng trong ứng dụng
{
  /* <AuthenticatedRoute path="/profile" component={ProfilePage} /> */
}
