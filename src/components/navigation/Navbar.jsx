import React, { useState, useEffect } from "react";
import { Menu, Drawer, Button, Switch, Input, Grid, Avatar, Flex } from "antd";
import { Link, useLocation } from "react-router-dom";
import { MenuOutlined, SearchOutlined, CloseOutlined } from "@ant-design/icons";
import { useTranslation } from "react-i18next";

import logo from "../../assets/logo.png";
import imgStyleBarTop from "../../assets/style_bar_top.png";
import { GiShoppingCart } from "react-icons/gi";
import "../../style/Navbar.css";

const { useBreakpoint } = Grid;

const Navbar = () => {
  const location = useLocation();
  const screens = useBreakpoint();
  const { t, i18n } = useTranslation();

  const [open, setOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(false);
  const [showSearch, setShowSearch] = useState(false);
  const [mainNavTop, setMainNavTop] = useState(35); // initially below top bar

  const menuItems = [
    { key: "/", label: <Link to="/">{t("home")}</Link> },
    { key: "/about", label: <Link to="/about">{t("about")}</Link> },
    { key: "/service", label: <Link to="/service">{t("service")}</Link> },
    { key: "/project", label: <Link to="/project">{t("project")}</Link> },
    { key: "/blog", label: <Link to="/blog">{t("blog")}</Link> },
    { key: "/contact", label: <Link to="/contact">{t("contact")}</Link> },
  ];

  // toggle dark mode
  const toggleDarkMode = (checked) => {
    setDarkMode(checked);
    document.documentElement.classList.toggle("dark", checked);
  };

  const changeLanguage = (lang) => i18n.changeLanguage(lang);

  // scroll effect: when top bar scrolls out, main navbar sticks to top
  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      if (scrollY >= 35) {
        setMainNavTop(0); // stick to top
      } else {
        setMainNavTop(35); // below top bar
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="contianer-navbar">
      {/* Top bar */}
      <div className="style-bar-top">
        <img src={imgStyleBarTop} alt="" style={{ width: "100%", height: 35 }} />
      </div>
      

      {/* Main navbar */}
      <div className="main-navbar" style={{ top: mainNavTop }}>
        <div>
          <img src={logo} alt="logo.png" style={{ height: 64 }} />
        </div>

        {screens.md ? (
          <>
            <Menu
              mode="horizontal"
              selectedKeys={[location.pathname]}
              items={menuItems}
              style={{ flex: 1, justifyContent: "start", marginLeft: 80 }}
              className="menu-item"
            />

            <div style={{ display: "flex", gap: 10, alignItems: "center" ,marginRight:10 }}>
              {showSearch ? (
                <Input
                  autoFocus
                  placeholder="Search..."
                  style={{ width: 200 }}
                  suffix={<CloseOutlined onClick={() => setShowSearch(false)} />}
                />
              ) : (
                <SearchOutlined
                  style={{ color: "#fff", fontSize: 18 }}
                  onClick={() => setShowSearch(true)}
                />
              )}

              <Flex>
                <Avatar
                  style={{ backgroundColor: "#F2B50B", boxShadow: "0 4px 8px rgba(0,0,0,0.2)" }}
                >
                  <GiShoppingCart size={20} />
                </Avatar>
              </Flex>

              <Button size="small" onClick={() => changeLanguage("en")}>EN</Button>
              <Button size="small" onClick={() => changeLanguage("km")}>KM</Button>
              <Switch checked={darkMode} onChange={toggleDarkMode} />
            </div>
          </>
        ) : (
          <>
            <Button
              type="text"
              icon={<MenuOutlined style={{ color: "#fff", fontSize: 20 }} />}
              onClick={() => setOpen(true)}
            />
            <Drawer
              title="Menu"
              placement="right"
              onClose={() => setOpen(false)}
              open={open}
            >
              <Menu mode="vertical" selectedKeys={[location.pathname]} items={menuItems} onClick={() => setOpen(false)} />
            </Drawer>
          </>
        )}
      </div>
    </div>
  );
};

export default Navbar;