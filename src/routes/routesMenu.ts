import React, { type ComponentType } from "react"
import { LOGIN_PAGE, HOME_PAGE, ADMIN_PAGE } from "./routes"



interface Route {
    path: string;
    component: React.LazyExoticComponent<ComponentType>;
    botNavDisabled?: boolean;
}


const LoginPage = React.lazy(() => import("@/pages/LoginPage"));
const HomePage = React.lazy(() => import("@/pages/HomePage"));
const LoginPageAdmin = React.lazy(() => import("@/pages/Admin/LoginPage"));

// const SplashScreen = React.lazy(() => import("@/component/templates/SplashScreen"));

const ROUTES_MENU: Route[] = [
      {
        path: LOGIN_PAGE,
        component: LoginPage,
        botNavDisabled: true
    },
    {
        path: HOME_PAGE,
        component: HomePage,
    },
    {
        path: ADMIN_PAGE,
        component: LoginPageAdmin,
        botNavDisabled: true
    },
];

export default ROUTES_MENU