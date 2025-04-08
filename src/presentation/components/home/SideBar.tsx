import { BoxArrowLeft, HouseGear, People, FileBarGraph, PersonBadge, Gear,AlarmFill ,TagFill ,PlusCircle} from "react-bootstrap-icons"
import React, { PropsWithChildren, ReactNode } from "react"
import { useLocation, useNavigate, } from "react-router-dom";
import { STRING_ROUTE_HOME, STRING_ROUTE_OUT, STRING_ROUTE_CATEGORIE, STRING_ROUTE_ORDERS, STRING_ROUTE_COUPON,STRING_ROUTE_REGISTER ,STRING_ROUTE_CONNEXION,TRING_ROUTE_LISTPRODUIT,TRING_ROUTE_ADD} from "../../utils/const.ts";
import { useState } from "react";
export const SideBar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const route = useNavigate()
    const location = useLocation();

    const handleChangePage = (index: number) => {
        switch (index) {
            case 0: {
                route(STRING_ROUTE_HOME);
                break;
            }
            case 2:
                {
                    route(STRING_ROUTE_CONNEXION);
                    break;
                }
            case 3:
                {
                    route(STRING_ROUTE_CATEGORIE);
                    break;
                }
            case 4:
                {
                    route(STRING_ROUTE_ORDERS);
                    break;
                }
            case 5:
                {
                    route(STRING_ROUTE_COUPON);
                    break;
                }
            case 6:
                {
                    route(STRING_ROUTE_REGISTER);
                    break;
                }
            case 7:
                {
                    route(TRING_ROUTE_LISTPRODUIT);
                    break;
                }
            case 8:
                {
                    route(TRING_ROUTE_ADD);
                    break;
                }

        }
    }

    return (

        <div className="fixed w-64 h-screen p-5 mt-5 text-white bg-primary" >
            <nav className="mt-10">

                <NavBarItem title="Dasboard" icon={<HouseGear />} isActive={location.pathname == STRING_ROUTE_HOME} index={0}
                    onClick={handleChangePage} />
                {/* <NavBarItem title="user" icon={<People />} isActive={location.pathname == STRING_ROUTE_REGISTER} index={6}
                    onClick={handleChangePage} />
                <NavBarItem title="login" icon={<People />} isActive={location.pathname == STRING_ROUTE_CONNEXION} index={2}
                    onClick={handleChangePage} /> */}
                <NavBarItem title="coupon" icon={<People />} isActive={location.pathname == STRING_ROUTE_COUPON} index={5}
                    onClick={handleChangePage} />
                <NavBarItem title="Product List" icon={<TagFill />} isActive={location.pathname == TRING_ROUTE_LISTPRODUIT} index={7}
                    onClick={handleChangePage} />
                <NavBarItem title="Add Product" icon={<PlusCircle />} isActive={location.pathname == TRING_ROUTE_ADD} index={8}
                    onClick={handleChangePage} />
                <NavBarItem title="categorie" icon={<PersonBadge />} isActive={location.pathname == STRING_ROUTE_CATEGORIE} index={3}
                    onClick={handleChangePage} />
                <NavBarItem title="Orders" icon={<HouseGear />} isActive={location.pathname == STRING_ROUTE_ORDERS} index={4}
                    onClick={handleChangePage} />
                <NavBarItem title="reports" icon={<FileBarGraph />} isActive={location.pathname == STRING_ROUTE_OUT} index={2}
                    onClick={handleChangePage} />
                <NavBarItem title="settings" icon={<Gear />} isActive={location.pathname == STRING_ROUTE_OUT} index={2}
                    onClick={handleChangePage} />
                <NavBarItem title="Logout" icon={<BoxArrowLeft />} isActive={location.pathname == STRING_ROUTE_OUT} index={2}
                    onClick={handleChangePage} />

            </nav>
        </div>
    )
}

export const NavBarItem: React.FC<PropsWithChildren<{
    icon: ReactNode,
    index: number,
    title: string,
    isActive?: boolean,
    onClick: (index: number) => void
}>> = ({ icon, title, isActive = false, onClick, index }) => {
    return (
        <div onClick={() => onClick(index)}
            className={`flex items-center max-sm:max-lg:justify-evenly sm:justify-evenly lg:justify-start  px-2 mx-0 my-5 py-3 space-x-4 hover:bg-white hover:text-texthover hover:rounded-md ${isActive ? "bg-white text-texthover rounded-md" : null}`}>

            {icon}
            <span className="max-sm:max-lg:hidden sm:hidden lg:block">{title}</span>
        </div>
    )
}
