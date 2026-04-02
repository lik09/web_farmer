import React, { useState, useEffect } from "react";
import { Menu, Drawer, Button, Switch, Input, Grid, Avatar, Flex } from "antd";
import { MenuOutlined, SearchOutlined, CloseOutlined } from "@ant-design/icons";
import { useTranslation } from "react-i18next";

import logo from "../../assets/logo.png";
import imgStyleBarTop from "../../assets/style_bar_top.png";
import { GiShoppingCart } from "react-icons/gi";
import "../../style/Navbar.css";

const { useBreakpoint } = Grid;

const Navbar = () => {
  const screens = useBreakpoint();
  const { t, i18n } = useTranslation();

  const [open, setOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(false);
  const [showSearch, setShowSearch] = useState(false);
  const [mainNavTop, setMainNavTop] = useState(35);
  const [activeKey, setActiveKey] = useState("home");

  const menuItems = [
    { key: "home", label: t("home"), target: "home" },
    { key: "about", label: t("about"), target: "about" },
    { key: "service", label: t("service"), target: "service" },
    { key: "project", label: t("project"), target: "project" },
    { key: "blog", label: t("blog"), target: "blog" },
    { key: "contact", label: t("contact"), target: "contact" },
  ];

  // scroll to section
  const scrollToSection = (id) => {
    const el = document.getElementById(id);
    const offset = 100;

    if (el) {
      const top = el.offsetTop - offset;
      window.scrollTo({ top, behavior: "smooth" });
    }
  };

  //dark mode
  const toggleDarkMode = (checked) => {
    setDarkMode(checked);
    document.documentElement.classList.toggle("dark", checked);
  };

  const changeLanguage = (lang) => i18n.changeLanguage(lang);

  // navbar stick on scroll
  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      setMainNavTop(scrollY >= 35 ? 0 : 35);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // scroll spy (active menu)
  useEffect(() => {
    const handleScrollSpy = () => {
      const scrollPosition = window.scrollY + 100;

      for (let item of menuItems) {
        const section = document.getElementById(item.target);
        if (section) {
          const offsetTop = section.offsetTop;
          const offsetHeight = section.offsetHeight;

          if (
            scrollPosition >= offsetTop &&
            scrollPosition < offsetTop + offsetHeight
          ) {
            setActiveKey(item.key);
          }
        }
      }
    };

    window.addEventListener("scroll", handleScrollSpy);
    return () => window.removeEventListener("scroll", handleScrollSpy);
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
          <img src={logo} alt="logo" style={{ height: 64 }} />
        </div>

        {screens.md ? (
          <>
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
                  style={{
                    backgroundColor: "#F2B50B",
                    boxShadow: "0 4px 8px rgba(0,0,0,0.2)",
                  }}
                >
                  <GiShoppingCart size={20} />
                </Avatar>
              </Flex>

              <Button size="small" onClick={() => changeLanguage("en")}>
                EN
              </Button>
              <Button size="small" onClick={() => changeLanguage("km")}>
                KM
              </Button>

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
              <Menu
                mode="vertical"
                selectedKeys={[activeKey]}
                items={menuItems.map((item) => ({
                  key: item.key,
                  label: item.label,
                }))}
                onClick={({ key }) => {
                  const item = menuItems.find((i) => i.key === key);
                  if (item) {
                    setActiveKey(key);
                    scrollToSection(item.target);
                  }
                  setOpen(false);
                }}
              />
            </Drawer>
          </>
        )}
      </div>
    </div>
  );
};

export default Navbar;