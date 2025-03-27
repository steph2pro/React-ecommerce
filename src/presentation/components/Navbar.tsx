import { Bell, ChatLeftText, ChevronDown,Search  } from "react-bootstrap-icons";
const Navbar = () => {
    return (
      <div className="flex items-center justify-between p-2 text-white shadow-md bg-primary2">
        <div className="flex items-center justify-between">
            <h1 className="mx-10 text-2xl font-bold">E-commerce App</h1>
            <div className="flex items-center p-2 rounded-md bg-primary2">
            <Search size={18} className="mr-2 text-white" />
            <input
                type="text"
                placeholder="Search..."
                className="text-white placeholder-white bg-transparent outline-none"
            />
            </div>
        </div>
        <div className="flex items-center justify-end p-3 space-x-6 text-white bg-primary2">
      {/* Icône Messages */}
      <ChatLeftText size={24} className="cursor-pointer" />

      {/* Icône Notifications avec Badge */}
      <div className="relative cursor-pointer">
        <Bell size={24} />
        <span className="absolute -top-2 -right-2 bg-blue-500 text-white text-xs font-bold px-1.5 py-0.5 rounded-full">
          5
        </span>
      </div>

      {/* Avatar + Nom */}
      <div className="flex items-center space-x-2 cursor-pointer">
        <div className="flex items-center justify-center w-8 h-8 font-bold text-white bg-green-500 rounded-full">
          R
        </div>
        <span className="text-sm font-medium">Randhir kumar</span>
        <ChevronDown size={16} />
      </div>
    </div>
      </div>
    );
  };
  
  export default Navbar;
  