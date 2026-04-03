import React, { useState, useEffect } from "react";
import { Menu, Dropdown, Button, Switch, Input, Grid, Avatar, Flex } from "antd";
import { MenuOutlined, SearchOutlined, CloseOutlined } from "@ant-design/icons";
import { GiShoppingCart } from "react-icons/gi";
import { useTranslation } from "react-i18next";

import logo from "../../assets/logo.png";
import imgStyleBarTop from "../../assets/style_bar_top.png";
import "../../style/Navbar.css";
import MobileDropdownMenu from "../mobile_menu/MobileDropdownMenu";
import SearchBar from "../search_bar/AnimatedSearchButton";
import AnimatedSearchButton from "../search_bar/AnimatedSearchButton";

const { useBreakpoint } = Grid;

const Navbar = () => {
  const screens = useBreakpoint();
  const { t, i18n } = useTranslation();

  const [activeKey, setActiveKey] = useState("home");
  const [mainNavTop, setMainNavTop] = useState(35);
  const [darkMode, setDarkMode] = useState(false);
  const [showSearch, setShowSearch] = useState(false);

  const menuItems = [
    { key: "home", label: t("home"), target: "home" },
    { key: "about", label: t("about"), target: "about" },
    { key: "service", label: t("service"), target: "service" },
    { key: "project", label: t("project"), target: "project" },
    { key: "blog", label: t("blog"), target: "blog" },
    { key: "contact", label: t("contact"), target: "contact" },
  ];

  // Scroll to section
  const scrollToSection = (id) => {
    const el = document.getElementById(id);
    if (el) {
      const offset = 100;
      window.scrollTo({ top: el.offsetTop - offset, behavior: "smooth" });
    }
  };

  // Dark mode toggle
  const toggleDarkMode = (checked) => {
    setDarkMode(checked);
    document.documentElement.classList.toggle("dark", checked);
  };

  const changeLanguage = (lang) => i18n.changeLanguage(lang);

  // Sticky navbar on scroll
  useEffect(() => {
    const handleScroll = () => setMainNavTop(window.scrollY >= 35 ? 0 : 35);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Scroll spy to update active menu item
  useEffect(() => {
    const handleScrollSpy = () => {
      const scrollPos = window.scrollY + 100;
      for (let item of menuItems) {
        const section = document.getElementById(item.target);
        if (section) {
          if (scrollPos >= section.offsetTop && scrollPos < section.offsetTop + section.offsetHeight) {
            setActiveKey(item.key);
          }
        }
      }
    };
    window.addEventListener("scroll", handleScrollSpy);
    return () => window.removeEventListener("scroll", handleScrollSpy);
  }, []);

  // Render menu items for Ant Design Menu
  const renderMenuItems = () =>
    menuItems.map((item) => ({
      key: item.key,
      label: item.label,
      onClick: () => scrollToSection(item.target),
    }));

  return (
    <div className="contianer-navbar">
      {/* Top bar */}
      <div className="style-bar-top">
        <img src={imgStyleBarTop} alt="style-bar" style={{ width: "100%", height: 35 }} />
      </div>

      {/* Main navbar */}
      <div className="main-navbar" style={{ top: mainNavTop }}>
        
        {/* Desktop menu */}
        {screens.md ? (
          <>
            {/* Logo */}
            <div>
              <img
                src={logo}
                alt="logo"
                style={{ height: 64, cursor: "pointer" }}
                onClick={() => scrollToSection("home")}
              />
            </div>
            <Menu
              mode="horizontal"
              selectedKeys={[activeKey]}
              items={menuItems.map((item) => ({
                key: item.key,
                label: (
                  <div
                    className="menu-label"
                    onClick={() => {
                      setActiveKey(item.key);
                      scrollToSection(item.target);
                    }}
                  >
                    {item.label}
                  </div>
                ),
              }))}
              style={{ flex: 1, justifyContent: "start", marginLeft: 80 }}
              className="menu-item"
            />

            <div style={{ display: "flex", gap: 10, alignItems: "center", marginRight: 10 }}>
              <AnimatedSearchButton />

              <Avatar style={{ backgroundColor: "#F2B50B", boxShadow: "0 4px 8px rgba(0,0,0,0.2)" }}>
                <GiShoppingCart size={20} />
              </Avatar>

              <Button size="small" onClick={() => changeLanguage("en")}>EN</Button>
              <Button size="small" onClick={() => changeLanguage("km")}>KM</Button>
              <Switch checked={darkMode} onChange={toggleDarkMode} />
            </div>
          </>
        ) : (
          <Flex justify="space-between" align="center" className="mobile-menu" style={{width:"100%" ,padding:"0px 10px"}}>
            
            <MobileDropdownMenu
              activeKey={activeKey}
              setActiveKey={setActiveKey}
              menuItems={menuItems}
              scrollToSection={scrollToSection}
              changeLanguage={changeLanguage}
              darkMode={darkMode}
              toggleDarkMode={toggleDarkMode}
            />  

            <div>
              <img
                src={logo}
                alt="logo"
                style={{ height: 64, cursor: "pointer" }}
                onClick={() => scrollToSection("home")}
              />
            </div>

            <AnimatedSearchButton />
            
          </Flex>
        )}
      </div>
    </div>
  );
};

export default Navbar;