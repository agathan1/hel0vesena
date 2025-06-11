import Logo from "@/assets/logo/logo.png";

export default function SplashScreen() {
  return (
    <main className=" h-screen flex flex-col text-center justify-around px-5">
      <div className="m-auto">
        <img src={Logo} alt="Logo Bisnis" className="size-88 mx-auto " />
      </div>
      <div className="pb-10">
        <p className="text-black font-poppins text-xs">version 1.0</p>
      </div>
    </main>
  );
}
