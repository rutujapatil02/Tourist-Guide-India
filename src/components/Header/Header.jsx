import { useState } from "react";
import { FaSearch, FaChevronDown, FaRegHeart } from "react-icons/fa";
import { MdOutlineTravelExplore } from "react-icons/md";
import logo from '../../assets/images/logo.png';

function Header({ onToggleMenu }) {
  const [activeMenu, setActiveMenu] = useState(null);
  const menuItems = ["Be inspired", "Places to go", "Things to do", "Plan your trip"];

  const handleMenuClick = (name) => {
    const nextMenu = activeMenu === name ? null : name;
    setActiveMenu(nextMenu);
    
    if (onToggleMenu) {
      onToggleMenu(nextMenu);
    }
  };

  return (
    <header className="flex items-center justify-between px-12 py-4 bg-white border-b border-gray-200 sticky top-0 z-[100]">
      {/* Logo Section - Removed the gray/opacity logic */}
      <div 
        className="flex items-center gap-2 cursor-pointer transition-all duration-300 opacity-100"
        onClick={() => { setActiveMenu(null); onToggleMenu(null); }}
      >
        <span className="text-orange-500 text-xl font-bold">India</span>
        <img src={logo} alt="India Logo" className="h-10" />
      </div>

      {/* Navigation - Logic stays ONLY here */}
      <nav className="flex items-center gap-10 font-bold">
        {menuItems.map((item) => {
          const isOtherMenuOpen = activeMenu !== null && activeMenu !== item;
          const isActive = activeMenu === item;

          return (
            <div
              key={item}
              className={`flex items-center gap-1 cursor-pointer transition-all duration-300 border-b-2 h-12 ${
                isActive 
                  ? "text-black border-black" 
                  : isOtherMenuOpen
                  ? "text-gray-300 border-transparent" // Only these turn gray
                  : "text-black border-transparent hover:border-gray-200"
              }`}
              onClick={() => handleMenuClick(item)}
            >
              {item}
              <FaChevronDown className={`text-xs transition-transform duration-300 ${isActive ? 'rotate-180' : ''}`} />
            </div>
          );
        })}
      </nav>

      {/* Icons Section - Forced to stay text-black */}
      <div className="flex items-center gap-6 text-xl text-black transition-all duration-300">
        <MdOutlineTravelExplore className="cursor-pointer hover:text-orange-500"/>
        <FaRegHeart className="cursor-pointer hover:text-orange-500"/>
        <FaSearch className="cursor-pointer hover:text-orange-500"/>
      </div>
    </header>
  );
}

export default Header;