import Logo from "@/assets/logo/LogoMain.png";
import { Button } from "@/components/ui/button";
import { ArrowUpRight } from "lucide-react";
import { NavLink } from "react-router";

export default function LoginPage() {
  return (
    <main className=" min-h-dvh flex flex-col items-center justify-around px-5">
      <div className="pt-10">
        <img src={Logo} alt="logo bisnis" className="h-68 w-68" />
      </div>
      <section className="w-full">
        <div className="mb-8">
          <h4 className="text-black font-alumni text-2xl text-start leading-1">
            WarKop
          </h4>
          <h4 className="text-black font-alumni text-5xl text-start">
            HEL0VESENA
          </h4>
          <h4 className="text-black font-poppins text-sm">
            Tempat nostalgia, cerita, dan tawa berkumpul, serta rasa yang bikin
            betah, suasana yang bikin happy. Selamat datang di tempat yang bikin
            senyum!.
          </h4>
        </div>
        <NavLink to={"/home"} className={``}>
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
      </section>
    </main>
  );
}

// {/* <div className="flex flex-col justify-around h-screen">
//         <div className="pt-10">
//           <img src={Logo} alt="Logo Bisnis" className="min-[600px]:w-[50%] min-[600px]:mx-auto size-70 mx-auto my-auto" />
//         </div>
//         <div className="font-poppins text-start space-y-2 w-[80%] mb ">
//           <div>
//             <h4 className="text-black font-alumni text-2xl text-start leading-1">
//               WarKop
//             </h4>
//             <h4 className="text-black font-alumni text-5xl text-start">
//               HEL0VESENA
//             </h4>
//           </div>
//           <h4 className="text-black font-poppins text-sm">Tempat nostalgia, cerita, dan tawa berkumpul, serta rasa yang bikin betah, suasana yang bikin happy. Selamat datang di tempat yang bikin senyum!.</h4>
//         </div>
//         <NavLink to={"/home"} className={`min-[600px]:pb-8`}>
//           <div className="bg-black p-[10px_8px] flex justify-between rounded-full">
//             <span className="pl-5 srink-0 my-auto font-poppins text-white font-light text-base">
//               Mulai Pesan
//             </span>
//             <Button className=" srink-0 size-12 rounded-full bg-[#AA762A] hover:bg-[#AA762A]/70">
//               <ArrowUpRight className="text-white" />
//             </Button>
//             {/* <Button className="w-full p-5 srink-0 mx-auto flex-none bg-[#AA762A] hover:bg-[#AA762A]/70">Start</Button> */}
//           </div>
//         </NavLink>
//       </div> */}

// {/* <div className="flex flex-col min-h-screen items-center justify-center">
//       <HeroLogo className="h-48 w-48 mb-12" img={LogoApp} />
//       <section className="pt-2 px-5 w-full text-center mb-12">
//         {/* <h3 className="text-base font-Poppins font-bold mb-12">Y E S</h3> */}
//         <div className="w-full">
//           <form onSubmit={handleLogin}>
//             <InputForm
//               required
//               className="text-sm mb-5 border border-slate-500 rounded-md px-4 py-2 w-full placeholder: opacity-70"
//               name="nrp"
//               type="text"
//               placeholder="NRP"
//               value={nrp}
//               onChange={(e) => setNRP(e.target.value)}
//             />
//             <InputForm
//               required
//               className="text-sm border mb-5 border-slate-500 rounded-md px-4 py-2 w-full placeholder: opacity-70"
//               name="password"
//               type="password"
//               placeholder="Password"
//               value={password}
//               onChange={(e) => setPassword(e.target.value)}
//             />
//             <Button
//               disabled={isLoading || isDisabled}
//               // variant="bg-[#2E5D9A] text-white"
//               variant={`${
//                 isLoading || isDisabled
//                   ? "bg-slate-500 text-slate-50"
//                   : "bg-[#2E5D9A] text-white"
//               }`}
//               type="submit"
//               // disabled={isLoading}
//               // onClick={handleLogin}
//             >
//               <div className="flex justify-center">
//                 {isLoading ? (
//                   <LoaderCircle className="h-5 w-5 animate-spin items-center" />
//                 ) : (
//                   "Login"
//                 )}
//               </div>
//               {/* Login */}
//             </Button>
//           </form>
//           <div className="my-4">
//             <p className="text-xs font-Poppins font-regular text-red-500">
//               {/* {locked ? `Your account is locked in ${duration} minutes` : null} */}
//               {locked
//                 ? `Your account is locked in ${isduration} minutes`
//                 : null}
//             </p>
//           </div>
//         </div>
//         <div className="mt-5 text-left w-full my-6">
//           <Link to="https://itsm.ykbut.co.id/scp/login.php" target="_blank">
//             <h4 className="text-xs font-semibold font-Poppins text-blue-500 items-left">
//               Forgot Password?
//             </h4>
//           </Link>
//         </div>
//       </section>
//       <Footer />
//       {openModal && (
//         <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50">
//           <div className="flex flex-col justify-center items-center">
//             <ModalHandler
//               colorBtn2="bg-[#CE4B4B]"
//               subtittle={subtitleError}
//               onClick2={handleCloseModal}
//               tittle={error}
//               nameButton="Oke"
//             />
//           </div>
//         </div>
//       )}
//     </div> */}




// {/* <main className="flex flex-col min-h-screen align-center px-5">
//       {isModalOpen && (
//         <ModalPassword
//           subtittle1="Cancel"
//           colorBtn2={"bg-[#2E5D9A]"}
//           subtittle2="Submit"
//           tittle="Enter Password"
//           subtittle="Please enter your password to access E-Slip"
//           // isOpen={isModalOpen}
//           onClose={() => setIsModalOpen(false)}
//           onSubmit={handlePasswordSubmit}
//         />
//       )}
//       <div>
//         <Snackbar
//           open={alertErrorOpen}
//           autoHideDuration={6000}
//           onClose={handleAlertClose}
//           anchorOrigin={{ vertical: "top", horizontal: "center" }}
//         >
//           <Alert
//             onClose={handleAlertClose}
//             severity="error"
//             sx={{ width: "100%" }}
//           >
//             Incorrect password
//           </Alert>
//         </Snackbar>
//       </div>
//       <div className="flex flex-col mt-8">
//         <h4 className="font-Poppins text-xs">Hello, Welcome...</h4>
//         <Link to="/profile">
//           <ProfileHome {...myProps} />
//         </Link>
//       </div>
//       <div className="mt-4">
//         <h4 className="font-Poppins font-semibold text-base">Options</h4>
//         <div className="flex flex-wrap justify-evenly gap-5 mt-2">
//           {appName.map((data, index) => (
//             <div key={index} className="flex-none">
//               {data.link === "/e-slip" ? (
//                 <div onClick={handleESlipClick}>
//                   <LogoApp
//                     styleNext={data.style}
//                     img={data.icon}
//                     Appname={data.title}
//                   />
//                 </div>
//               ) : (
//                 <Link to={data.link}>
//                   <LogoApp
//                     styleNext={data.style}
//                     img={data.icon}
//                     Appname={data.title}
//                   />
//                 </Link>
//               )}
//             </div>
//           ))}
//         </div>
//       </div>

//       <div className="mt-6">
//         {getEvents.length > 0 && (
//           <>
//             <h4 className="font-Poppins font-semibold text-base">Event</h4>
//             <div className="overflow-x-scroll scrollbar-hidden">
//               <div className="flex flex-row gap-4 ">
//                 {getEvents.map((data, id) => (
//                   <div key={id} className="">
//                     <CardCoa
//                       image={`data:image/png;base64,${data.image}`}
//                       header={data.name}
//                       subheader={data.venue}
//                     />
//                   </div>
//                 ))}
//               </div>
//             </div>
//           </>
//         )}
//       </div>
//       <div className="mt-6">
//         <div className="">
//           <Carousel images={images} />
//         </div>
//       </div>
//     </main> */}