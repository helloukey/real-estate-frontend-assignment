// assets
import downIcon from "../assets/down.svg";
import menuIcon from "../assets/menu.svg";

const Navbar = () => {
  return (
    <nav className="navbar sm:px-6 md:px-8 lg:px-10 xl:px-12 sm:py-4 bg-base-100 border-b border-gray-300">

      {/* Mobile */}
      <div className="navbar-start items-center">
        <div className="dropdown">
          <label tabIndex={0} className="flex items-center btn btn-ghost px-0 w-5 h-5 lg:hidden">
            <img src={menuIcon} alt="menu" className="w-5 h-5 absolute" />
          </label>
          <ul
            tabIndex={0}
            className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
          >
            <li>
              <button>Rent</button>
            </li>
            <li tabIndex={0}>
              <button className="justify-between">
                Manage Property
                <img src={downIcon} alt="dropdown" className="w-5 h-5" />
              </button>
              <ul className="p-2">
                <li className="w-full">
                  <button>Buy</button>
                </li>
                <li>
                  <button>Sell</button>
                </li>
              </ul>
            </li>
            <li>
              <button>Resources</button>
            </li>
          </ul>
        </div>
        <h1 className="btn btn-ghost normal-case text-lg sm:text-xl font-bold"><a href="/">Dream-Estate</a></h1>
      </div>

      {/* Desktop */}
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          <li>
            <button>Rent</button>
          </li>
          <li tabIndex={0}>
            <button>
              Manage Property
              <img src={downIcon} alt="dropdown" className="w-5 h-5" />
            </button>
            <ul className="p-2 bg-base-200 w-full">
              <li>
                <button>Buy</button>
              </li>
              <li>
                <button>Sell</button>
              </li>
            </ul>
          </li>
          <li>
            <button>Resources</button>
          </li>
        </ul>
      </div>
      <div className="navbar-end">
        <button className="btn btn-xs sm:btn-md">Get started</button>
      </div>

    </nav>
  );
};
export default Navbar;
