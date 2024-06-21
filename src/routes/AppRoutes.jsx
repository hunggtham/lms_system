import React from "react";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/course" element={<Course />} />
      <Route path="/blog" element={<Blog />} />
      <Route path="/faq" element={<Blog />} />
    </Routes>
  );
};

export default AppRoutes;
