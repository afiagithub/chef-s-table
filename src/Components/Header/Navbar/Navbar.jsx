import { FiSearch } from "react-icons/fi";
import { FaRegUserCircle } from "react-icons/fa";
const Navbar = () => {
    return (
        <div className="mx-5 lg:mx-14 py-5 lg:py-8">
            <div className="navbar bg-base-100">
                <div className="navbar-start">
                    <div className="dropdown">
                    <div tabIndex="0" role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </div>
                    <ul tabIndex="0" className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                        <li className="text-[#150b2bb3] py-1 text-base"><a>Home</a></li>
                        <li className="text-[#150b2bb3] py-1 text-base"><a>Recipes</a></li>
                        <li className="text-[#150b2bb3] py-1 text-base"><a>About</a></li>
                        <li className="text-[#150b2bb3] py-1 text-base"><a>Search</a></li>
                    </ul>
                    </div>
                    <a className="btn btn-ghost font-bold text-2xl lg:text-3xl">Recipe Calories</a>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                    <li className="text-[#150b2bb3] px-4 text-base"><a>Home</a></li>
                    <li className="text-[#150b2bb3] px-4 text-base"><a>Recipes</a></li>
                    <li className="text-[#150b2bb3] px-4 text-base"><a>About</a></li>
                    <li className="text-[#150b2bb3] px-4 text-base"><a>Search</a></li>
                    </ul>
                </div>
                <div className="navbar-end">
                    <div className="form-control mr-4 relative">
                        <input type="text" placeholder="&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Search" 
                        className="input input-bordered w-48 md:w-auto rounded-full bg-[#150b2b0d] border-none" />
                        <FiSearch className="absolute top-3 left-5 text-2xl text-[#150b2bb3]" />
                    </div>
                    <a className="btn rounded-full bg-[#0BE58A]"><FaRegUserCircle className="text-2xl" /></a>
                </div>
                </div>
        </div>
    );
};

export default Navbar;