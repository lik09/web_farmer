import React, { useEffect, useRef, useState } from "react";
import { Input, Button } from "antd";
import { SearchOutlined } from "@ant-design/icons";
import "../../style/SearchAnimation.css"; 

const AnimatedSearchButton = () => {
  const [showSearch, setShowSearch] = useState(false);
  const containerRef = useRef(null); // no type annotations in JS

  // Close input when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (containerRef.current && !containerRef.current.contains(event.target)) {
        setShowSearch(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className="search-container" ref={containerRef}>
      {/* Button hidden when input is active */}
      {!showSearch && (
        <Button
          type="text"
          icon={<SearchOutlined />}
          onClick={() => setShowSearch(true)}
          style={{ background: "transparent", border: "none" }} // remove default hover bg
        />
      )}

      {/* Input is always rendered, width is animated */}
      <div className={`search-wrapper ${showSearch ? "active" : ""}`}>
        <Input
          placeholder="Search..."
          className="search-input"
          autoFocus={showSearch}
        />
        <SearchOutlined className="search-icon" />
      </div>
    </div>
  );
};

export default AnimatedSearchButton;