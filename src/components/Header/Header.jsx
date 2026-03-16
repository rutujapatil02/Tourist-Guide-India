import { useState } from "react";
import { FaSearch, FaChevronDown, FaRegHeart } from "react-icons/fa";
import { MdOutlineTravelExplore } from "react-icons/md";
import logo from '../../assets/images/logo.png';

function Header({ onTogglePlaces }) {
  const [activeMenu, setActiveMenu] = useState(null);
  const menuItems = ["Be inspired", "Places to go", "Things to do", "Plan your trip"];

  const handleMenuClick = (name) => {
    setActiveMenu(activeMenu === name ? null : name);
    // If they clicked "Places to go", trigger the toggle
    if (name === "Places to go" && onTogglePlaces) {
      onTogglePlaces();
    }
  };

  return (
    <header className="flex items-center justify-between px-12 py-4 bg-gray-100">
      {/* Logo */}
      <div className="flex items-center gap-2 cursor-pointer">
        <span className="text-orange-500 text-xl font-bold">India</span>
        <img src={logo} alt="India Logo" className="h-10" />
      </div>

      {/* Navigation */}
      <nav className="flex items-center gap-10 text-gray-800 font-bold">
        {menuItems.map((item) => (
          <div
            key={item}
            className={`flex items-center gap-1 cursor-pointer ${
              activeMenu && activeMenu !== item ? "text-gray-400" : "text-black"
            }`}
            onClick={() => handleMenuClick(item)}
          >
            {item}
            <FaChevronDown className="text-xs" />
          </div>
        ))}
      </nav>

      {/* Icons */}
      <div className={`flex items-center gap-6 text-xl ${activeMenu ? "text-gray-400" : "text-black"}`}>
        <MdOutlineTravelExplore className="cursor-pointer"/>
        <FaRegHeart className="cursor-pointer"/>
        <FaSearch className="cursor-pointer"/>
      </div>
    </header>
  );
}

export default Header;