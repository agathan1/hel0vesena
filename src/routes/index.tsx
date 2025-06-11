import {
  createBrowserRouter,
  Navigate,
  RouterProvider,
} from "react-router-dom";
import Layouts from "@/component/templates/Layouts";
import ROUTES_MENU from "./routesMenu";
import { LOGIN_PAGE } from "./routes";

const routesMenu = ROUTES_MENU.map((route) => ({
  path: route.path,
  element: <route.component />,
  // loader: route.private ? getAuthLoader(queryClient) : guestLoader,
}));

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layouts />,
    children: [
      ...routesMenu,
      {
          path: '*',
          element: <Navigate to={LOGIN_PAGE}/>,
        },
      // {
      //     path: "/",
      //     element: <Navigate to="/login" />,
      // },
    ],
  },
]);
const Routes = () => {
  return <RouterProvider router={router} />;
};

export default Routes;