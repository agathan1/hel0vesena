import React from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@radix-ui/react-tabs";
// import { Card, CardFooter, CardHeader, CardTitle } from "../ui/card";

interface Recipe {
  id: number;
  nama_menu: string;
  minutes: number;
  tab: string;
//   img: string;
  harga: number;
}

interface Value {
    id: number;
    name: string;
    value: string;
}

interface Props {
  defaultValue: string;
  values: Value[];
  datas: Recipe[];
  handleDetailClick?: (id: number) => void;
  contentMap: Record<string, React.ReactNode>;
  icons?: Record<string, React.ReactNode>; // <== Tambahan
}

export default function TabsCostume({
  defaultValue,
  values,
  datas,
  handleDetailClick,
  contentMap,
  icons,
}: Props) {
  return (
    <Tabs className="space-y-4" defaultValue={defaultValue}>
      <TabsList className="space-x-4 flex">
        {values.map((category, index) => (
          <TabsTrigger
            className={`bg-custom py-2 px-3 w-fit rounded-4xl font-poppins text-white font-medium hover:bg-custom/80 data-[state=active]:bg-custom/50`}
            value={category.value}
            key={index}
          >
            <div className="flex gap-2">
              <span className="shrink-0">{icons?.[category.value.toLowerCase()]}</span>
              {category.name}
            </div>
          </TabsTrigger>
        ))}
      </TabsList>

      {/* content */}
      {values.map((val) => (
        <TabsContent key={val.id} value={val.value.toLowerCase()}>
          {contentMap[val.value.toLowerCase()]}
        </TabsContent>
      ))}
    </Tabs>
  );
}

// {/* <div className="grid grid-cols-2 gap-4 font-poppins hover:cursor-pointer">
//         {datas?.map((recipe) => (
//           // <div key={recipe.id}>
//           <TabsContent key={recipe.id} value={recipe.tab}>
//             {children}
//             {/* <Card
//               onClick={() => handleDetailClick(recipe.id)}
//               className="h-full"
//             >
//               <CardHeader className="space-y-4">
//                 <img
//                   // src={recipe.img}
//                   src="https://images.unsplash.com/photo-1511485977113-f34c92461ad9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
//                   alt="img"
//                   className="w-full size-40 rounded-xl object-cover"
//                 />
//                 <CardTitle className="">{recipe.name_recipe}</CardTitle>
//               </CardHeader>
//               <CardFooter className="text-xs m-0 !pt-0">
//                 {recipe.minutes} Min
//               </CardFooter>
//             </Card> */}
//           </TabsContent>
//           // </div>
//         ))}
//       </div> */}
