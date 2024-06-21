import { Route, Redirect } from "react-router-dom";

// Giả sử có một hàm để kiểm tra quyền truy cập
const hasAccess = (requiredRole) => {
  // Logic để kiểm tra quyền của người dùng
  const userRole = localStorage.getItem("userRole");
  return userRole === requiredRole;
};

const ProtectedLayoutView = ({
  component: Component,
  requiredRole,
  ...rest
}) => (
  <Route
    {...rest}
    render={(props) =>
      isAuthenticated() ? (
        hasAccess(requiredRole) ? (
          <Component {...props} />
        ) : (
          <Redirect to="/no-access" />
        )
      ) : (
        <Redirect to="/login" />
      )
    }
  />
);
const ProtectedLayout = observer(ProtectedLayoutView);
export default ProtectedLayout;
// Sử dụng trong ứng dụng
{
  /* <ProtectedRoute path="/admin" component={AdminPage} requiredRole="admin" /> */
}
