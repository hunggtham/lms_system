import React from "react";
import ProfilePage from "../pages/user/Profile";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/course" element={<Course />} />
      <Route path="/blog" element={<Blog />} />
      <Route path="/faq" element={<Blog />} />

      <AuthenticatedRoute path="/profile" component={ProfilePage} />
    </Routes>
  );
};

export default AppRoutes;
