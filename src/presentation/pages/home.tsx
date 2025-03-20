import  {NavBar} from "../components/home/SideBar.tsx";
import ErrorBoundary from "../components/ErrorBoundary.tsx";
import {Outlet} from "react-router-dom";

function Home() {



    return (
        <div className="flex ">

            <NavBar  user={({username: "Stephane Kamga", password: "12345678", email: "steph.contact@gmail.com"})} />

            <ErrorBoundary>

                <div className="lg:ml-[20vw] sm:p-4  max-sm:max-lg:overflow-y-scroll lg:max-w-[80vw] flex-1">

                    <Outlet />

                    <div className="flex justify-center mt-20 space-x-4 text-center mb-30 text-green-950"><p>  © {new Date().getFullYear()} Cette application a été réalisé par Stephane Kamga </p></div>
                </div>
            </ErrorBoundary>
        </div>
    )
}
export default Home




