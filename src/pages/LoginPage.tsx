import Logo from "@/assets/logo/LogoMain.png";
import { Button } from "@/components/ui/button";
import { ArrowUpRight } from "lucide-react";
import { NavLink } from "react-router";

export default function LoginPage() {
  return (
    <main className=" min-h-[100dvh] flex flex-col text-center justify-center px-5">
      <div className="flex flex-col justify-around h-screen">
        <div className="pt-10">
          <img src={Logo} alt="Logo Bisnis" className="min-[600px]:w-[50%] min-[600px]:mx-auto size-70 mx-auto my-auto" />
        </div>
        <div className="font-poppins text-start space-y-2 w-[80%] mb ">
          <div>
            <h4 className="text-black font-alumni text-2xl text-start leading-1">
              WarKop
            </h4>
            <h4 className="text-black font-alumni text-5xl text-start">
              HEL0VESENA
            </h4>
          </div>
          <h4 className="text-black font-poppins text-sm">Tempat nostalgia, cerita, dan tawa berkumpul, serta rasa yang bikin betah, suasana yang bikin happy. Selamat datang di tempat yang bikin senyum!.</h4>
        </div>
        <NavLink to={"/home"} className={`min-[600px]:pb-8`}>
          <div className="bg-black p-[10px_8px] flex justify-between rounded-full">
            <span className="pl-5 srink-0 my-auto font-poppins text-white font-light text-base">
              Mulai Pesan
            </span>
            <Button className=" srink-0 size-12 rounded-full bg-[#AA762A] hover:bg-[#AA762A]/70">
              <ArrowUpRight className="text-white" />
            </Button>
            {/* <Button className="w-full p-5 srink-0 mx-auto flex-none bg-[#AA762A] hover:bg-[#AA762A]/70">Start</Button> */}
          </div>
        </NavLink>
      </div>
    </main>
  );
}
