import React, { useState } from "react";
import { Dropdown, Button, Switch, Flex } from "antd";
import "../../style/MobileDropdownMenu.css";

const MobileDropdownMenu = ({
  activeKey,
  setActiveKey,
  menuItems,
  scrollToSection,
  changeLanguage,
  darkMode,
  toggleDarkMode,
}) => {
  const [open, setOpen] = useState(false);

  // Hamburger Icon Animation
  const HamburgerIcon = ({ open }) => (
    <div className={`hamburger ${open ? "open" : ""}`}>
      <span />
      <span />
      <span />
    </div>
  );

  // Custom menu using div instead of AntD Menu
  const menu = (
    <div className="mobile-dropdown-content">
      <div className="custom-menu-items">
        {menuItems.map((item) => (
          <div
            key={item.key}
            className={`custom-menu-item ${activeKey === item.key ? "active" : ""}`}
            onClick={() => {
              setActiveKey(item.key);
              scrollToSection(item.target);
              setOpen(false);
            }}
          >
            {item.label}
          </div>
        ))}
      </div>

      {/* Divider */}
      <div className="menu-divider" />

      {/* Language buttons */}
      <div className="menu-lang" style={{padding:'6px 0px'}}>
        <Button size="small" onClick={() => changeLanguage("en")}>
          EN
        </Button>
        <Button size="small" onClick={() => changeLanguage("km")}>
          KM
        </Button>
      </div>

      {/* Dark mode switch */}
      <Flex gap={10} style={{padding:'6px 0px'}}>
        <span>Dark Mode</span>
        <Switch checked={darkMode} onChange={toggleDarkMode} />
      </Flex>
    </div>
  );

  return (
    <Dropdown
      open={open}
      onOpenChange={setOpen}
      trigger={["click"]}
      placement="bottomRight"
      popupRender={() => menu} 
    >
      <Flex className="mobile-menu-btn-wrapper" justify="center" align="center">
        <Button
          type="text"
          className="mobile-dropdown-btn"
          onClick={() => setOpen(!open)}
           style={{
            background: "transparent",
            border: "none",
            boxShadow: "none",
            padding: 0,
        }}
        >
          <HamburgerIcon open={open} />
        </Button>
      </Flex>
    </Dropdown>
  );
};

export default MobileDropdownMenu;