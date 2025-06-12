import Logo from "@/assets/logo/LogoMain.png";
import { Input } from "@/components/ui/input";
import { Label } from "@radix-ui/react-label";
import { Button } from "@/components/ui/button";

function LoginPage() {
  return (
    <main className=" min-h-dvh flex flex-col items-center space-y-8 px-5">
      <section className="pt-10">
        <img src={Logo} alt="logo bisnis" className="h-68 w-68" />
      </section>
      <section className="w-full">
        <form action="" className="space-y-4">
          {["email", "password"].map((item, i) => (
            <div className="font-poppins flex flex-col gap-1">
              <Label key={i}>{item}</Label>
              <Input key={i} type={item} placeholder={item} className="px-4 py-5 focus-visible:border-none border-[#000] border-2 focus-visible:ring-[#AA762A]"/>
            </div>
          ))}
          <Button className="w-full" type="submit">Login</Button>
        </form>
      </section>
      <section className="pb-10 my-auto pt-18">
        <p className="text-black font-poppins text-xs">version 1.0</p>
      </section>
    </main>
  );
}

export default LoginPage;
