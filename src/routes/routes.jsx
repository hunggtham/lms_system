import Layout from "../component/Layout/Layout";
import Faq from "../pages/faq";

const guestRoutes = [
  {
    path: "/faq",
    element: <Layout />,
    child: [
      {
        path: "/faq",
        element: <Faq />,
      },
    ],
  },
];
