import { FaFacebookF, FaInstagram, FaYoutube, FaPinterestP, FaChevronDown } from "react-icons/fa";
import { HiOutlineArrowUp } from "react-icons/hi";
import { useState } from "react";

// Imports based on your filenames
import BluePeacock from "../assets/images/BluePeacock.png";
import foot from "../assets/images/foot.png";

function Footer() {
  const [region, setRegion] = useState("India (English)");
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const countries = [
    "India (English)",
    "Australia (English)",
    "United Kingdom (English)",
    "United States (English)",
    "Canda (English)",
    "New Zealand (English)"
  ];

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="relative text-white pt-16 pb-12 font-sans" style={{ backgroundColor: "#3AA8C1" }}>
      
      {/* Scroll to Top Button */}
      <button 
        onClick={scrollToTop}
        className="absolute -top-7 right-10 md:right-20 bg-[#FFC107] p-4 rounded-full shadow-md hover:bg-[#ffb300] transition-all z-10"
      >
        <HiOutlineArrowUp className="text-black text-2xl" />
      </button>

      <div className="max-w-7xl mx-auto px-8 md:px-16">
        
        {/* 1. Header Logo Section */}
        <div className="flex flex-col items-center mb-12 border-b border-white/10 pb-10">
          <div className="flex items-center gap-3">
            <span className="text-2xl font-bold tracking-tight">India</span>
            <img src={BluePeacock} alt="Australia Logo" className="h-12 w-auto" />
          </div>
        </div>

        {/* 2. Acknowledgement Section */}
        <div className="mb-16">
          <h2 className="text-lg font-bold mb-6">Acknowledgement of Country</h2>
          <div className="flex flex-col md:flex-row items-start gap-10">
            <img src={foot} alt="Aboriginal Icon" className="w-20" />
            <div className="flex-1">
              <p className="text-lg leading-snug max-w-5xl opacity-90">
                We acknowledge the Traditional Aboriginal and Torres Strait Islander Owners of the land, sea and waters of the Australian continent, and <span className="font-semibold">recognise their custodianship of culture and Country for over 60,000 years.</span>
              </p>
              <a href="https://www.australia.com" target="_blank" rel="noreferrer" className="inline-block mt-3 text-white underline underline-offset-4 hover:opacity-80">
                Read more →
              </a>
            </div>
          </div>
        </div>

        {/* 3. Bottom Links Grid - ADDED EXTRA SPACING (gap-16) */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-16 border-b border-white/10 pb-16 mb-8">
          
          {/* Region Dropdown */}
          <div className="relative">
            <h3 className="text-[13px] font-bold uppercase mb-6 opacity-90">Change your region and language</h3>
            <div 
              className="border border-white/40 bg-white/5 p-3 flex justify-between items-center cursor-pointer hover:bg-white/10 transition-colors"
              onClick={() => setIsDropdownOpen(!isDropdownOpen)}
            >
              <span className="text-sm">{region}</span>
              <FaChevronDown className={`text-xs transition-transform ${isDropdownOpen ? 'rotate-180' : ''}`} />
            </div>
            
            {isDropdownOpen && (
              <ul className="absolute bottom-full left-0 w-full bg-[#2a94ac] border border-white/20 shadow-2xl z-50 mb-1">
                {countries.map((c) => (
                  <li 
                    key={c}
                    className="p-3 text-sm hover:bg-[#4ebcc5] cursor-pointer border-b border-white/5 last:border-0"
                    onClick={() => {
                      setRegion(c);
                      setIsDropdownOpen(false);
                    }}
                  >
                    {c}
                  </li>
                ))}
              </ul>
            )}
          </div>

          {/* Social Links - CLICK EVENTS ADDED */}
          <div>
            <h3 className="text-[13px] font-bold uppercase mb-6 opacity-90">Find us on</h3>
            <div className="grid grid-cols-1 gap-y-4 text-sm">
              <a href="https://www.facebook.com/seeaustralia" target="_blank" rel="noreferrer" className="flex items-center gap-3 hover:text-orange-400 transition-colors">
                <FaFacebookF /> Facebook
              </a>
              <a href="https://www.instagram.com/australia" target="_blank" rel="noreferrer" className="flex items-center gap-3 hover:text-orange-400 transition-colors">
                <FaInstagram /> Instagram
              </a>
              <a href="https://www.youtube.com/australia" target="_blank" rel="noreferrer" className="flex items-center gap-3 hover:text-orange-400 transition-colors">
                <FaYoutube /> YouTube
              </a>
              <a href="https://www.pinterest.com/seeaustralia" target="_blank" rel="noreferrer" className="flex items-center gap-3 hover:text-orange-400 transition-colors">
                <FaPinterestP /> Pinterest
              </a>
            </div>
          </div>

          {/* About This Site */}
          <div>
            <h3 className="text-[13px] font-bold uppercase mb-6 opacity-90">About this site</h3>
            <ul className="space-y-4 text-sm opacity-90">
              <li><a href="/privacy" className="hover:underline">Privacy Policy</a></li>
              <li><a href="/terms" className="hover:underline">Terms and Conditions</a></li>
              <li><a href="/accessibility" className="hover:underline">Accessibility Statement</a></li>
              <li><a href="/sitemap" className="hover:underline">Sitemap</a></li>
            </ul>
          </div>

          {/* Other Sites */}
          <div>
            <h3 className="text-[13px] font-bold uppercase mb-6 opacity-90">Other sites</h3>
            <ul className="space-y-4 text-sm opacity-90">
              <li><a href="/media" className="hover:underline">Media & Industry</a></li>
              <li><a href="/business" className="hover:underline">Business Events</a></li>
              <li><a href="/investment" className="hover:underline">Tourism Investment</a></li>
            </ul>
          </div>
        </div>

        {/* 4. Legal Disclaimer Section */}
        <div className="text-[11px] leading-relaxed opacity-80 space-y-4">
          <div className="flex justify-end pt-4">
            <span className="text-sm font-medium">© Tourism Australia 2026</span>
          </div>
          <p><span className="font-bold text-xl">*Product Disclaimer:</span></p>
          <p> Incredible India (Government of India) is not the owner, operator, advertiser, or promoter of the listed products and services. Information on listed products and services, including safety and certification details, are provided by the third-party operator on their website or as published on the India Tourism Data sources where applicable. Rates are indicative based on the minimum and maximum available prices of products and services. Please visit the operator’s website for further information. All prices quoted are in Indian Rupees (INR), unless otherwise stated. Incredible India makes no representations whatsoever about any other websites which you may access through its websites such as india.travel. Some websites linked to the Incredible India website are independent from Incredible India and are not under the control of Incredible India. Incredible India does not endorse or accept any responsibility for the use of websites which are owned or operated by third parties and makes no representation or warranty in relation to the standard, class, or fitness for purpose of any services, nor does it endorse or in any respect warrant any products or services by virtue of any information, material, or content linked from or to this site.</p>
          
        </div>
      </div>
    </footer>
  );
}

export default Footer;