import {Link} from "react-router-dom";
import Jobs from "../../pages/Jobs";
import Homepage from "../../pages/Homepage";
import Blog from "../../pages/Blog";
import ContactUs from "../../pages/ContactUs";
import Register from "../../pages/Register";
import Login from "../../pages/Login";

const Header = () => {
  return (
    <>
    
    <div className="w-full h-10 fixed">
        <div className="w-full bg-slate-200 flex justify-between items-center p-2">

{/* logo */}

    <div className="logo px-2 bg-green-500 ml-6">
         <div className="p-6 bg-yellow-500 rounded-full pl-5 border-4 border-red-500">
   
   {/* Insert logo file here in this div */}
    {/* <img src="logo22.png" className="w-8 h-8"/> */}  

            </div>
    </div>

{/* mid text */}

 <div className="w-[30%] h-auto px-2 py-1 flex justify-between items-center">

    <Link to="/" element={<Homepage/>} className="font-roboto hover:text-green-600 hover:text-md hover:font-semibold"> Home </Link>
    <Link to="/jobs" element={<Jobs/>} className="font-roboto hover:text-green-600 hover:text-md hover:font-semibold"> Jobs </Link>
    <Link to="/blog" element={<Blog/>} className="font-roboto hover:text-green-600 hover:text-md hover:font-semibold"> Blog </Link>
    <Link to="/ContactUs" element={<ContactUs/>} className="font-roboto hover:text-green-600 hover:text-md hover:font-semibold"> Contact Us! </Link>

 </div>

{/* Login / Register buttons */}

<div className="px-4 py-2">

    <Link to="/register" element={<Register/>} className="px-3 py-1 
    bg-blue-600 text-white rounded-lg hover:bg-blue-800 hover:font-semibold mx-2"> Register </Link>

    <Link to="/login" element={<Login/>} className="px-5 py-1 
        bg-green-600 rounded-lg text-white hover:bg-green-800 hover:font-semibold mx-2"> Login </Link>
    </div>

        </div>


    </div>

    </>
  )
}
export default Header