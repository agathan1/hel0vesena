// import TabsCostume from "@/component/moleculs/TabsCustom";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardHeader,
} from "@/components/ui/card";
import {  menu_favorit } from "@/lib/dataDumy";
// import LoadingRender from "@/component/templates/LoadingRender";

export const Header = () => {
  return (
    <div className="w-full pt-8">
      <p className="text-base font-poppins font-light text-black">Halo...</p>
      <h2 className="text-2xl font-jakarta font-bold text-black">
        Selamat datang di WarKop
      </h2>
    </div>
  );
};

export default function HomePage() {
  // const contentMap = {
  //   ingredients: (
  //     <ul className="list-disc list-inside space-y-1 text-lg mt-2 font-poppins">
  //       {recipe?.ingredients.map((item, i) => (
  //         <li key={i}>
  //           {item.quantity} {item.name}
  //         </li>
  //       ))}
  //     </ul>
  //   ),
  //   instructions: (
  //     <ol className="list-decimal list-inside space-y-1 text-lg mt-2 font-poppins">
  //       {recipe?.instructions.map((item, i) => (
  //         <li key={i}>
  //           Step {item.step_number}: {item.step_description}
  //         </li>
  //       ))}
  //     </ol>
  //   ),
  // };

  return (
    <main className="min-h-dvh px-5">
      <Header />
      <section className="w-full mt-8">
        <div className="size-88 w-full bg-slate-100"></div>
        {/* <TabsCostume values={category} datas={}/> */}
      </section>
      <section className="mt-8 space-y-4 pb-30">
        <div className="flex justify-between">
        <h2 className="text-2xl font-jakarta font-bold text-black">
          Favorit Menu
        </h2>
          <Button className="bg-transparent border-none shadow-none hover:bg-transparent font-poppins text-black">
            See All
          </Button>
        </div>

        <div className="flex gap-4 flex-nowrap overflow-x-auto">
          {menu_favorit.map((item, idx) => (
            <Card key={idx} className="min-w-[200px] bg-slate-200 py-[8px_18px] px-2">
              <CardHeader className="size-30 w-full bg-slate-500"></CardHeader>
              <CardContent className="p-0 space-y-4">
                <div>
                  <h3 className="text-xl font-poppins font-semibold">
                    {item.name}
                  </h3>
                  <p className="text-xs font-poppins">{item.category}</p>
                </div>
                <h4 className="text-lg font-poppins font-semibold">
                  Rp.{item.price}
                </h4>
              </CardContent>
              {/* <CardFooter className="p-0">
            </CardFooter> */}
            </Card>
          ))}
        </div>
      </section>
      {/* <LoadingRender /> */}
    </main>
  );
}
