import { Suspense, useEffect, useState } from "react";
import { Outlet, useLocation } from "react-router";
import Botnav from "./Botnav";
import ROUTES_MENU from "@/routes/routesMenu";
import LoadingRender from "./LoadingRender";
import SplashScreen from "./SplashScreen";

export default function Layouts() {
  const { pathname } = useLocation();
  const route = ROUTES_MENU.find((routeMenu) => routeMenu.path === pathname);

  const [showSplash, setShowSplash] = useState(false);

  // useEffect(() => {
  //   const timer = setTimeout(() => setShowSplash(false), 2000); // 3 detik
  //   return () => clearTimeout(timer);
  // }, []);

const isVisisted = localStorage.getItem("firstVisitHeloveseyna");

useEffect(() => {
  if (isVisisted === null) {
    setShowSplash(true);
    const timer = setTimeout(() => {
      localStorage.setItem("firstVisitHeloveseyna", "true");
      setShowSplash(false);
    }, 2000);
    return () => clearTimeout(timer);
  }
}, [isVisisted]);

// console.log(showSplash);
  if (showSplash) return <SplashScreen />;

  return (
    <main className="flex flex-col h-screen m-[0_auto]  max-w-[600px] relative">
      {/* <Suspense fallback={<div>Loading...</div>}> */}
      <Suspense fallback={<LoadingRender />}>
        <div>
          {route?.botNavDisabled ? null : <Botnav />}
          <div className="relative block flex-1 z-5">
            <div className="block">
              <Outlet />
            </div>
          </div>
        </div>
      </Suspense>
    </main>
  );
}
