import { Heart, Home, User } from "lucide-react";
import { NavLink } from "react-router";

const menu = [
  { to: "/home", icon: Home, label: "Home" },
  { to: "/favorite", icon: Heart, label: "Favorite" },
  { to: "/profile", icon: User, label: "Profile" },
];

export default function Botnav() {
  return (
    <div className="fixed bottom-5 left-0 right-0 z-50 max-w-[610px] mx-auto">
      <nav className="border-2 w-[90%] mx-auto bg-white text-slate-500 font-poppins text-center py-2 rounded-xl shadow-md">
        {/* <nav className="bg-green-300 absolute bottom-0 left-0 right-0"> */}
        <div className="flex justify-around">
          {menu.map((item, idx) => (
            <NavLink
              key={idx}
              to={item.to}
              className={({ isActive }) =>
                `flex flex-col items-center text-xs space-y-2 ${
                  isActive ? "text-[#AA762A] font-semibold" : "text-gray-400"
                }`
              }
            >
              <item.icon />
              <span className="text-[10px]">{item.label}</span>
            </NavLink>
          ))}
          {/* <h1>Navbar</h1> */}
        </div>
      </nav>
    </div>
  );
}
