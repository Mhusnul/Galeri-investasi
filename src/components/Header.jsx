import React, { useState } from "react";
import logo from "../assets/logo-gi-gunadarma.png";

function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);

  const navItems = [
    { name: "Home", link: "/" },
    { name: "About", link: "/" },
    {
      name: "Activity",
      link: "/",
      dropdown: [
        { name: "Workshop", link: "/workshop" },
        { name: "Seminar", link: "/seminar" },
        { name: "Training", link: "/training" },
      ],
    },
    { name: "GI News", link: "/" },
    { name: "Facility", link: "/" },
    { name: "Gallery", link: "/" },
    { name: "Contact", link: "/" },
  ];

  const contactInfo = [
    {
      icon: (
        <svg
          className="w-4 h-4"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
          />
        </svg>
      ),
      label: "HP",
      value: "085750387729",
    },
    {
      icon: (
        <svg
          className="w-4 h-4"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
          />
        </svg>
      ),
      label: "Phone",
      value: "021-8727541",
    },
    {
      icon: (
        <svg
          className="w-4 h-4"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
          />
        </svg>
      ),
      label: "Email",
      value: "gi@livegunadarma.ac.id",
    },
  ];

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const handleDropdownToggle = (index) => {
    setActiveDropdown(activeDropdown === index ? null : index);
  };

  return (
    <header className="bg-white shadow-lg sticky top-0 z-50">
      {/* Top Bar */}
      <div className="bg-gradient-to-r from-gray-50 to-gray-100 border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center justify-between py-3 gap-4">
            {/* Logo */}
            <div className="flex items-center gap-3">
              <img
                src={logo}
                alt="Galeri Investasi Gunadarma"
                className="h-12 w-auto object-contain"
              />
            </div>

            {/* Contact Info */}
            <div className="flex flex-wrap items-center gap-4 text-sm text-gray-600">
              {contactInfo.map((contact, index) => (
                <div
                  key={index}
                  className="flex items-center gap-2 hover:text-purple-600 transition-colors duration-200"
                >
                  {contact.icon}
                  <span className="hidden sm:inline">{contact.label}:</span>
                  <span className="font-medium">{contact.value}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Navigation */}
      <nav className="bg-gradient-to-r from-purple-900 to-indigo-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Desktop Navigation */}
            <div className="hidden md:block flex-1">
              <ul className="flex items-center justify-center space-x-8">
                {navItems.map((item, index) => (
                  <li key={index} className="relative group">
                    <a
                      href={item.link}
                      className="text-white font-medium px-4 py-2 rounded-lg hover:bg-white/10 transition-all duration-300 flex items-center gap-1 group-hover:text-purple-200"
                      onMouseEnter={() =>
                        item.dropdown && setActiveDropdown(index)
                      }
                      onMouseLeave={() =>
                        item.dropdown && setActiveDropdown(null)
                      }
                    >
                      {item.name}
                      {item.dropdown && (
                        <svg
                          className={`w-4 h-4 transition-transform duration-200 ${
                            activeDropdown === index ? "rotate-180" : ""
                          }`}
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M19 9l-7 7-7-7"
                          />
                        </svg>
                      )}
                    </a>

                    {/* Dropdown Menu */}
                    {item.dropdown && (
                      <div
                        className={`absolute top-full left-0 mt-2 w-48 bg-white rounded-xl shadow-xl border border-gray-100 overflow-hidden transition-all duration-300 ${
                          activeDropdown === index
                            ? "opacity-100 visible transform translate-y-0"
                            : "opacity-0 invisible transform -translate-y-2"
                        }`}
                        onMouseEnter={() => setActiveDropdown(index)}
                        onMouseLeave={() => setActiveDropdown(null)}
                      >
                        {item.dropdown.map((dropdownItem, dropdownIndex) => (
                          <a
                            key={dropdownIndex}
                            href={dropdownItem.link}
                            className="block px-4 py-3 text-gray-700 hover:bg-purple-50 hover:text-purple-700 transition-colors duration-200 border-b border-gray-50 last:border-b-0"
                          >
                            {dropdownItem.name}
                          </a>
                        ))}
                      </div>
                    )}
                  </li>
                ))}
              </ul>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <button
                onClick={toggleMobileMenu}
                className="text-white p-2 rounded-lg hover:bg-white/10 transition-colors duration-200"
              >
                <svg
                  className={`w-6 h-6 transition-transform duration-300 ${
                    isMobileMenuOpen ? "rotate-90" : ""
                  }`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  {isMobileMenuOpen ? (
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M6 18L18 6M6 6l12 12"
                    />
                  ) : (
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  )}
                </svg>
              </button>
            </div>
          </div>

          {/* Mobile Navigation */}
          <div
            className={`md:hidden transition-all duration-300 ease-in-out ${
              isMobileMenuOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
            } overflow-hidden`}
          >
            <div className="px-2 pt-2 pb-3 space-y-1 bg-purple-800/50 rounded-t-xl mt-2">
              {navItems.map((item, index) => (
                <div key={index}>
                  <button
                    onClick={() =>
                      item.dropdown ? handleDropdownToggle(index) : null
                    }
                    className="w-full text-left text-white px-3 py-2 rounded-lg hover:bg-white/10 transition-colors duration-200 flex items-center justify-between"
                  >
                    <span>{item.name}</span>
                    {item.dropdown && (
                      <svg
                        className={`w-4 h-4 transition-transform duration-200 ${
                          activeDropdown === index ? "rotate-180" : ""
                        }`}
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M19 9l-7 7-7-7"
                        />
                      </svg>
                    )}
                  </button>

                  {/* Mobile Dropdown */}
                  {item.dropdown && (
                    <div
                      className={`ml-4 space-y-1 transition-all duration-300 ${
                        activeDropdown === index
                          ? "max-h-40 opacity-100"
                          : "max-h-0 opacity-0"
                      } overflow-hidden`}
                    >
                      {item.dropdown.map((dropdownItem, dropdownIndex) => (
                        <a
                          key={dropdownIndex}
                          href={dropdownItem.link}
                          className="block text-purple-200 px-3 py-2 rounded-lg hover:bg-white/10 hover:text-white transition-colors duration-200"
                        >
                          {dropdownItem.name}
                        </a>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
}

export default Header;
